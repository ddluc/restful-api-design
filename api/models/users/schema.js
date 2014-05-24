/**
 * HTTP API Design Abstract
 *
 * module/users/schema
 * Defines the Users document design and maps it to a MongoDB Collection
 */

  var Mongoose = require('mongoose');

  var UserSchema= new Mongoose.Schema({
    username: String,
    password: String
  });

  /**
   * Schema middleware
   **/

  UserSchema.pre('save', function(next) {
    //TODO: Add verification layer here
    next();
  });

  UserSchema.post('save', function() {
    //TODO: Add something else here.
  });

  module.exports = UserSchema; 
