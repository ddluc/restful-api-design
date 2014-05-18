/**
 * Blog Engine -- Boot:
 *  1. initializes database connection
 *  2. boots resources and middleware
 *  3. configures express routes
 *
 * Created By Daniel Lucas
 */


var _ = require('underscore'),
    mongoose = require('mongoose'),
    requireChildren = require('require-children');

module.exports = function(Router) {
    var databaseConnectionUri = 'mongodb://localhost/ddluc',
        Api,
        Middleware,
        Mongoose,
        Resources;

    /**
     * Connect to database and listen for connection errors
     */

    Mongoose = mongoose.connect(databaseConnectionUri, function mongooseConnectionCallback(error) {
        if (error) {
            return console.error(error.stack);
        }
        return console.log('Mongoose connected successfully.')
    });

    Mongoose.connection.on('error', function handleMongooseConnectionError(error) {
        console.error('An error occurred on the Mongoose connection:');
        console.error(error.stack);
    });

    /**
     * Load API Components
     */

    Middleware = requireChildren('../middleware', module);
    Resources = requireChildren('../resources', module);


    Api = {
        Database : Mongoose
    };

    /**
     * Boot Resources
     */
    _.each(Resources, function bootResource(resource, resourceName) {
        console.log('Booting Resources: ' + resourceName.toUpperCase());
        apiDefaultMiddleware = _.values(Middleware._default);
        _.each(resource.methods, function bootResourceMethods(resourceMethod, resourceMethodName) {
            var resourceMethodRoute = '/' + resourceName + '/' + resourceMethodName,
                 resourceMethodHttpMethod = resourceMethod.httpMethod.toLowerCase(),
                 resourceMethodMiddleware = apiDefaultMiddleware.concat(resourceMethod.middleware),
                 resourceMethodEndpoint = _.bind(resourceMethod.endpoint, Api);

            resourceMethodMiddleware.unshift(function(req, res, next){
                console.log('req.body:', req.body);
                console.log('req.params:', req.params);
                console.log('req.query:', req.query);
                next();
            });

            console.log('Booting ' + resourceMethodRoute);
            Router[resourceMethodHttpMethod](
                resourceMethodRoute,
                resourceMethodMiddleware,
                resourceMethodEndpoint
            );
        });
    });

    /**
     * Return API Router
     */

    return Router;
};





