/**
 * HTTP API Design Abstract
 *
 * module/users/schema
 * Defines the Users document design and maps it to a MongoDB Collection
 */

var Mongoose = require('mongoose');

module.exports = new Mongoose.Schema({
    username: String,
    password: String
});
