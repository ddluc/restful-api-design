/**
 * HTTP API Design Abstract
 *
 * models/posts
 * Mongoose model definition for the Post document
 */

var Mongoose = require('mongoose'),
    schema = require('./schema');

// Export model
module.exports = Mongoose.model('Post', schema);
