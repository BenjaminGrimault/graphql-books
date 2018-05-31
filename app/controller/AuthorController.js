const Controller = require('./Controller.js');
const Author = require('../model/Author.js');

class AuthorController extends Controller {
    constructor() {
        super(Author);
    }
}

module.exports = AuthorController;
