/**
 * Blog Engine -- User Schema
 */
var Mongoose = require('mongoose');

module.exports = new Mongoose.Schema({
    username: String,
    password: String
});
