/**
 * Blog Engine -- Post Schema
 */

var Mongoose = require('mongoose');

schema = new Mongoose.Schema({
        title       : String,
        date        : String,
        type        : String,
        body        : Object,
        link        : String
});
