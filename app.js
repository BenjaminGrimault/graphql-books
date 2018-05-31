const app = require('express')();
const bodyParser = require('body-parser');

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

module.exports = app;
