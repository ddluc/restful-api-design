/**
 * Blog Engine -- User Schema
 */
var Mongoose = require('mongoose');

schema = new Mongoose.Schema({
    username: String,
    password: String
});