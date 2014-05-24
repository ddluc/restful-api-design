/**
 * HTTP API Design Abstract
 *
 * module/posts/schema
 * Defines the Posts document design and maps it to a MongoDB Collection
 */
var Mongoose = require('mongoose');

module.exports = new Mongoose.Schema({
    title: String,
    body: String
});
