const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title:         { type: String, required: true },
    publishedDate: { type: String, required: true },
    type:          { type: String, required: true },
    price:         { type: String, required: true },
    authorId:      { type: String, required: true },
    comments: [{
        message: String,
    }],
});

const Book = mongoose.model('Book', schema);

module.exports = Book;
