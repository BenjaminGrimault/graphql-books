const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:      { type: String, required: true },
    firstName: { type: String, required: true },
    birthDate: { type: String, required: true },
});

schema.methods.write = function() {
    console.log('Writing a book');
};

const Author = mongoose.model('Author', schema);

module.exports = Author;
