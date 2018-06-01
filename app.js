// Libraries
const app = require('express')();
const bodyParser = require('body-parser');
const graphql = require('express-graphql');

// GraphQL
const gqlSchema = require('./app/graphql/schema.js');

// Routes
const indexRouter  = require('./app/route/index.js');
const bookRouter   = require('./app/route/book.js');
const authorRouter = require('./app/route/author.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', indexRouter);
app.use('/book', bookRouter);
app.use('/author', authorRouter);

// GraphQL
app.use('/graphql', graphql({
    schema: gqlSchema,
    graphiql: true,
}));

module.exports = app;
