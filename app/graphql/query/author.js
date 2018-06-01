const {
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const getProjection = require('../getProjection.js');

const authorType = require('../type/Author.js');

const Author = require('../../model/Author.js');


module.exports = {
    type: authorType,
    description: 'Get author by it\'s ID',
    args: {
        id: { type: new GraphQLNonNull(GraphQLString), description: 'ID of the requested author' }
    },
    resolve: function (root, {id}, source, fieldASTs) {
        const projections = getProjection(fieldASTs);
        
        return new Promise((resolve, reject) => {
            Author.findById(id, projections,(err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    },
};
