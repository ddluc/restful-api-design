/**
 * Blog Engine: resources - posts
 * Created By Daniel Lucas
 */

var _ = require('underscore'),
    q = require('q');

var Posts = require('../models/posts/model.js');

module.exports = {
    description : 'Manage Posts',
    methods: {
        'create': {
            httpMethod: 'POST',
            description: 'Creates a new post',
            optionalParams: [
                {name: 'client', type: 'string'},
                {name: 'ingredients', type:'array'},
            ],
            requiredParams: [
                { name : 'title', type : 'string'},
                { name : 'date', type : 'string'},
                { name : 'type', type : 'string'},
                { name : 'content', type:'object'}
            ],
            requireAdmin: true,
            middleware : [checkPrivileges],
            endpoint : function(req, res){
                var title = req.param('title');
                var newPost = new post({
                    title       : req.param('title'),
                    date        : req.param('date'),
                    type        : req.param('type'),
                    client      : req.param('client'),
                    ingredients : req.param('ingredients'),
                    body        : req.param('body'),
                    link        : req.param('link')
                });

                newPost.save(function(err){
                    if(err) console.log('ERR: ' + err);
                    else{
                        res.send('Post Added!');
                    }
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
                Posts.find(function(posts, err) {
                    if(err) res.send(err);
                    else {
                        res.send('200', posts);
                    }
                });
            }
        }
    }
};