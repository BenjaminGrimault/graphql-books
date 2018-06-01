const {
    GraphQLList,
} = require('graphql');

const getProjection = require('../getProjection.js');

const bookType = require('../type/Book.js');

const Book = require('../../model/Book.js');

module.exports = {
    type: new GraphQLList(bookType),
    description: 'Get all books',
    resolve: function (root, {id}, source, fieldASTs) {
        const projections = getProjection(fieldASTs);
        
        return new Promise((resolve, reject) => {
            Book.find({}, projections,(err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    },
};
