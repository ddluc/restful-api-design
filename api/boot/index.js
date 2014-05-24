/**
 * HTTP API Design Abstract
 *
 * boot/index
 *   - Initializes database connection
 *   - Loads custom middleware
 *   - Automatically configures resources into a restful pattern
 *
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
        if (error) return console.error(error.stack);
        else return console.log('Mongoose connected successfully.')
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
     * Automatically configure rest pattern
     *   - Iterates through each resource using requireChildren
     *   - Constructs the resource and resource method url pattern
     *   - Adds the custom middleware to the resource using requireChildren
     *   - Attaches the resource endpoints
     *
     * Url Pattern  : api.domain.com/v1/{Resource}/{Method}
     * HTTP Methods : POST, GET
     *
     * @param <String>   Route -- Url string representation of the route i.e. '/resource/method'
     * @param <Array>    Middleware -- Array of functions to be executed before the end point
     * @param <Function> Endpoint --  I.E. function that defines the end of the request life cycle
     * Template: Express.httpMethod(Route, Middleware, Endpoint)
     *
     */

    _.each(Resources, function bootResource(resource, resourceName) {
        console.log('Booting Resources: ' + resourceName.toUpperCase());
        var apiDefaultMiddleware = _.values(Middleware._default);
        _.each(resource.methods, function bootResourceMethods(resourceMethod, resourceMethodName) {

            var resourceMethodRoute = '/' + resourceName + '/' + resourceMethodName,
                 resourceMethodHttpMethod = resourceMethod.httpMethod.toLowerCase(),
                 resourceMethodMiddleware = apiDefaultMiddleware.concat(resourceMethod.middleware),
                 resourceMethodEndpoint = _.bind(resourceMethod.endpoint, Api);

            console.log('Booting ' + resourceMethodRoute);

            Router[resourceMethodHttpMethod](
                resourceMethodRoute,
                resourceMethodMiddleware,
                resourceMethodEndpoint
            );

        });
    });

    /**
     * Return Configured API Router
     */

    return Router;
};
