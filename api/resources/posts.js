/**
 * Blog Engine: resources - posts
 * Created By Daniel Lucas
 */

var _ = require('underscore'),
    q = require('q'),
    requireChildren = require('require-children');


var Middleware = requireChildren('../middleware', module);
    Post = require('../models/posts/model.js');

module.exports = {

    description : 'Manage Posts',

    methods: {

        'create': {
            httpMethod: 'POST',
            description: 'Creates a new post',
            optionalParams: [
                {name: 'link', type: 'string'},
                {name: 'ingredients', type:'array'},
            ],
            requiredParams: [
                { name : 'title', type : 'string'},
                { name : 'date', type : 'string'},
                { name : 'type', type : 'string'},
                { name : 'content', type:'object'}
            ],
            requireAdmin: true,
            middleware : [Middleware.checkPrivileges],
            endpoint : function(req, res){
                var title = req.param('title');
                var newPost = new Post({
                    title       : req.param('title'),
                    date        : req.param('date'),
                    type        : req.param('type'),
                    client      : req.param('client'),
                    ingredients : req.param('ingredients'),
                    body        : req.param('body'),
                    link        : req.param('link')
                });

                newPost.save(function(err){
                    if(err) res.send(500, 'ERRR: ' + err);
                    else res.send('Post Added!');
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
                    else {
                        res.send('200', posts);
                    }
                });
            }
        }
    }
};
