/**
 * Blog Engine: resources - posts
 * Created By Daniel Lucas
 */

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
            middleware : [],
            endpoint : function(req, res){
                res.send('Create Posts Endpoint');
            }
        },
        'load': {
            httpMethod: 'GET',
            description: 'Loads posts',
            optionalParams: [],
            requiredParams: [],
            middleware: [],
            endpoint: function(req, res) {
                res.send('Load Posts Endpoint');
            }
        }
    }
};