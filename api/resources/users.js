/**
 * Blog Engine: resources - users
 * Create By Daniel Lucas
 */

var _ = require('underscore'),
    q = require('q'),
    requireChildren = require('require-children');

var Middleware = requireChildren('../middleware', module),
    User = require('../models/users/model');

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
              User.findOne({username: username}, function(err, usr) {
                  if(err) res.send(500, 'ERR: ' + err);
                  else if(!usr) res.send(403, 'ERR: user doesn\'t exist');
                  else res.send(200, {'userKey': usr._id});
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
            middleware: [Middleware.checkPrivileges],
            requireAdmin: true,
            endpoint: function(req, res) {
              var username = req.param('username'),
                  password = req.param('password');
              var newUser = new User({
                  username: username,
                  password: password
              });
              console.log(newUser.username); 
              newUser.save(function(err) {
                 if(err) res.send(500, 'ERR: ' + err);
                 else res.send(200, 'User successfully created');
              });
            }
        }

    }
};
