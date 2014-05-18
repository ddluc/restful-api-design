/**
 * Blog Engine -- Post Model
 */
var Mongoose = require('mongoose'),
    schema = require('./schema');

// Export model
module.exports = Mongoose.model('Post', schema);
