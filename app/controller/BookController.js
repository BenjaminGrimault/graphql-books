const Controller = require('./Controller.js');
const Book = require('../model/Book.js');

class BookController extends Controller {
    constructor() {
        super(Book);
    }

    addOneComment(bookId, params, callback) {
        Book.findById(bookId, (err, book) => {
            if (err) {
                console.error(err);
                callback(err);
            } else {
                book.comments.push(params);

                Book.updateOne({ _id: bookId }, book, (err, data) => {
                    this.manageMongoReturn(err, data, callback);
                });
            }
        });
    }
}

module.exports = BookController;
