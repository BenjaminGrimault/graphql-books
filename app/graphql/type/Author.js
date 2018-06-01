const {
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'Author',
    description: 'Author who wrote a book (generally)',
    fields: {
        id:        { type: GraphQLString, description: 'Author unique ID' },
        name:      { type: GraphQLString, description: 'Author last name' },
        firstName: { type: GraphQLString, description: 'Author first name' },
        birthDate: { type: GraphQLString, description: 'Author birthdate (format DD/MM/YYYY)' },
    }
});
