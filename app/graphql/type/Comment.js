const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Comment',
    fields: {
        message: { type: GraphQLString, description: 'Comment' },
    }
});
