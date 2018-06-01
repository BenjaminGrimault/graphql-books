const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} = require('graphql');

const getProjection = require('../getProjection.js');

const authorType = require('./Author.js');
const commentType = require('./Comment.js');

const Author = require('../../model/Author.js');

module.exports = new GraphQLObjectType({
    name: 'Book',
    description: 'If you don\'t know what is a book, go back to elementary school',
    fields: {
        id: {
            type: GraphQLString,
            description: 'Book unique ID',
        },
        title: {
            type: GraphQLString,
            description: 'Book title',
        },
        publishedDate: {
            type: GraphQLString,
            description: 'Book published date (format DD/MM/YYYY)',
        },
        type: {
            type: GraphQLString,
            description: 'Book type (ex: thriller, fantasy...',
        },
        price: {
            type: GraphQLString,
            description: 'Book price',
        },
        author: {
            type: authorType,
            description: 'Book author',
            resolve: (parent, args, source, fieldASTs) => {
                const projections = getProjection(fieldASTs);
        
                return new Promise((resolve, reject) => {
                    Author.findById(parent.authorId, projections, (err, data) => {
                        err ? reject(err) : resolve(data);
                    });
                });
            },
        },
        comments: {
            type: new GraphQLList(commentType),
            description: 'Comments on book',
        },
    }
});
