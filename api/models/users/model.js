/**
 * Created by dan on 4/9/14.
 */

var Mongoose = require('mongoose'),
    schema = require('./schema');

//Export model
module.exports = Mongoose.model('User', schema);