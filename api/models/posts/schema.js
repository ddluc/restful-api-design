/**
 * Blog Engine -- Post Schema
 */

var Mongoose = require('mongoose');

schema = new Mongoose.Schema({
        title       : String,
        date        : String,
        type        : String,
        client      : String,
        ingredients : Array,
        body        : Object,
        link        : String
});
