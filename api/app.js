/**
 * HTTP API Design Abstract
 * @author : Daniel Lucas
 * @description : Design abstract for developing simple declarative and modular Restful APIs
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
      bootHttp = require('./boot/http');

  /**
   * Set the ports the app will listen on
   */

   var routerHttpPort = 3000;


  /**
   * Define Router as an Express Application
   *
   */

  var Router  = express();


  /**
   * Configure connect middleware
   */

  Router.use(express.logger('dev'));
  Router.use(express.json());
  Router.use(express.urlencoded());

  /**
   * Boot HTTP Router (Express)
   * Boot Sockets  (Socket.io)
   */

  Router = bootHttp(Router);



  Router.listen(routerHttpPort, function() {
     console.log('API is listening on port ' + routerHttpPort);
  });
