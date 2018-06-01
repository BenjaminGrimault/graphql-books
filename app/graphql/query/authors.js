const {
    GraphQLList,
} = require('graphql');

const getProjection = require('../getProjection.js');

const authorType = require('../type/Author.js');

const Author = require('../../model/Author.js');

module.exports = {
    type: new GraphQLList(authorType),
    description: 'Get all authors',
    resolve: function (root, {id}, source, fieldASTs) {
        const projections = getProjection(fieldASTs);
        
        return new Promise((resolve, reject) => {
            Author.find({}, projections,(err, data) => {
                err ? reject(err) : resolve(data);
            });
        });
    },
};
