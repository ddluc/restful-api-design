/**
 * HTTP API Design Abstract
 *
 * models/posts
 * Mongoose model definition for the User document
 */

  var Mongoose = require('mongoose'),
      schema = require('./schema');

  //Export model
  module.exports = Mongoose.model('User', schema);
