const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Comment',
    description: 'Comment on a book',
    fields: {
        message: { type: GraphQLString, description: 'Comment' },
    }
});
