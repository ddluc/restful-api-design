/**
 * HTTP API Design Abstract
 * @author : Daniel Lucas
 * @description : design abstract for developing simple declarative and modular Restful APIs
 *
 * app
 * - Inialize a new express application with boot method
 * - Set HTTP port listener
 *
 */

/**
 * Load Dependenies
 */

var express = require('express'),
    _ = require('underscore'),
    boot = require('./boot');

/**
 * Set the port the app will listen on
 */

 var routerHttpPort = 3000;

/**
 * Define Router as an Express Application
 */

var Router = express();

/**
 * Configure connect middleware
 */

Router.use(express.logger('dev'));
Router.use(express.json());
Router.use(express.urlencoded());

/**
 * boot
 * Custom Express Extention Module
 *   @param <Express> Router -- Express Application
 *
 * The boot module is an express extension config tool
 *   - Configures the database connection,
 *   - Loads custom middleware,
 *   - Automatically configures resources into a restful pattern
 */

Router = boot(Router);

Router.listen(routerHttpPort, function() {
   console.log('API is listening on port ' + routerHttpPort);
});
