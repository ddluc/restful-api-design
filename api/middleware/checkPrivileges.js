/**
 * HTTP API Design Abstract
 *
 * middleware/checkPrivilages
 * - Checks to see if the api consumer has a admin key in the POST body
 * - Implemented by resource which require
 */

  var Mongoose = require('mongoose'),
      User = require('../models/users/model.js');

  module.exports = function(req, res, next) {
      var userKey = req.param('userKey');
      User.findOne({_id: userKey}, function(err, usr) {
         if(err) res.send(500, err);
         else if(!usr) res.send(403, 'You don\'t have access to this resource');
         else {
             next();
         }
      });
  };
