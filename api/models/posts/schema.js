/**
 * Blog Engine -- Post Schema
 */

var Mongoose = require('mongoose');

module.exports = new Mongoose.Schema({
    title: String,
    body: String
});
