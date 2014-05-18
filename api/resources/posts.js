/**
 * Blog Engine: resources - posts
 * Created By Daniel Lucas
 */

var _ = require('underscore'),
    q = require('q'),
    requireChildren = require('require-children');


var Middleware = requireChildren('../middleware', module);
    Post = require('../models/posts/model');

module.exports = {

    description : 'Manage Posts',

    methods: {

        'create': {
            httpMethod: 'POST',
            description: 'Creates a new post',
            optionalParams: [],
            requiredParams: [
                {name : 'title', type : 'string'},
                {name  : 'body',  type : 'string'}
            ],
            requireAdmin: true,
            middleware : [Middleware.checkPrivileges],
            endpoint : function(req, res){
              var title = req.param('title'),
                  body  = req.param('body');
              var newPost = new Post({
                  title  : title,
                  body   : body
              });
              console.log(newPost); 
              newPost.save(function(err){
                  if(err) res.send(500, 'ERRR: ' + err);
                  else res.send(200, {status: 'OK', post: newPost});
              });
            }
        },

        'load': {
            httpMethod: 'GET',
            description: 'Loads posts',
            optionalParams: [],
            requiredParams: [],
            middleware: [],
            endpoint: function(req, res) {
              Post.find(function(posts, err) {
                  if(err) res.send(err);
                  else res.send('200', posts);
              });
            }
        }
    }
};
