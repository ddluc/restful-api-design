/**
 * HTTP API Design Abstract
 *
 * module/posts/schema
 * Defines the Posts document design and maps it to a MongoDB Collection
 */

  var Mongoose = require('mongoose');

  var PostSchema = new Mongoose.Schema({
    title: String,
    body: String
  });

  /**
   * Schema middleware
   **/

  PostSchema.pre('save', function(next) {
    //TODO: Add verification layer here
    next();
  });

  PostSchema.post('save', function() {
    //TODO: Add web socket event emmitter
  });

  module.exports = PostSchema; 
