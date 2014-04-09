var Mongoose = require('mongoose'),
    User = require('../models/users/model.js');

module.exports = function(req, res, next) {
    var userKey = req.param('userKey');
    console.log('USER KEY: ' + userKey);
    next();
};