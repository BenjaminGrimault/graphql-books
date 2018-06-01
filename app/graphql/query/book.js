const {
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const getProjection = require('../getProjection.js');

const bookType = require('../type/Book.js');

const Book = require('../../model/Book.js');

module.exports = {
    type: bookType,
    description: 'Get book by it\'s ID',
    args: {
        id: { type: new GraphQLNonNull(GraphQLString), description: 'ID of the requested book' }
    },
    resolve: function (root, {id}, source, fieldASTs) {
        const projections = getProjection(fieldASTs);

        for (selection of fieldASTs.fieldNodes[0].selectionSet.selections) {
            if (selection.name.value === 'author') {
                projections.authorId = true;
                break;
            }
        }

        return new Promise((resolve, reject) => {
            Book.findById(id, projections, (err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    },
};
