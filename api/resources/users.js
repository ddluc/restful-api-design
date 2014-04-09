/**
 * Blog Engine: resources - users
 * Create By Daniel Lucas
 */

var _ = require('underscore'),
    q = require('q');

var User = require('../models/users/model.js');

module.exports = {
    description : 'Manage Users',
    methods: {
        'login' : {
            httpMethod: 'POST',
            description: 'Verify\'s user, and responds with user key',
            optionalParams: [],
            requiredParams: [
                {name: 'password', type:'string'},
                {name: 'username', type:'string'}
            ],
            middleware: [],
            endpoint : function(req, res) {
                var username = req.param('username'),
                    password = req.param('password');
                console.log(username);
                var verified = false;
                User.findOne({username: username}, function(err, usr) {
                    if(err) res.send('500', 'ERR: ' + err);
                    else if(!usr) res.send('500', 'ERR: user doesn\'t exist');
                    //console.log(usr);
                    responseObject = {'userKey': usr._id};
                    res.send('200', responseObject)
                });
            }
        },
        'create' : {
            httpMethod: 'POST',
            description: 'Creates a new user',
            optionalParams: [],
            requiredParams: [
                {name: 'password', type:'string'},
                {name: 'username', type:'string'}
            ],
            middleware: [],
            endpoint: function(req, res) {
                var username = req.param('username'),
                    password = req.param('password');

                var newUser = new User({
                    username: username,
                    password: password
                });

                newUser.save(function(err) {
                   if(err) res.send('500', 'ERR: ' + err);
                   else {
                       res.send('200', 'User successfully created');
                   }
                });

            }
        }
    }
};