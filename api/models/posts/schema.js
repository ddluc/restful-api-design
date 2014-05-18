/**
 * Blog Engine -- Post Schema
 */

var Mongoose = require('mongoose');

schema = new Mongoose.Schema({
    title: String,
    body: String
});
