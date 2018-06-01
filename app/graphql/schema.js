const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');

// GraphQL queries
const bookQuery = require('./query/book.js');
const booksQuery = require('./query/books.js');
const authorQuery = require('./query/author.js');
const authorsQuery = require('./query/authors.js');

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        book:    bookQuery,
        books:   booksQuery,
        author:  authorQuery,
        authors: authorsQuery,
    }
});
  
const schema = new GraphQLSchema({query: queryType});

module.exports = schema;
