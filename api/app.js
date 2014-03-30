/*
 * Blog Engine -- App Configuration
 * Created by Daniel Lucas
 */

var express = require('express'),
    _ = require('underscore'),
    boot = require('./boot'),
    routerHttpPort = 3000;

//Define Router as an Express Application
var Router = express();

/**
 * Configure shared router middleware
 */

Router.use(express.logger('short'));
Router.use(express.json());
Router.use(express.urlencoded());

/**
 * Extend Express Application with the API boot
 * function return value (Express Application object).
 */

Router = boot(Router);

Router.listen(routerHttpPort, function() {
   console.log('API is listening on port ' + routerHttpPort);
});





