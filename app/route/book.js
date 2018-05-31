const express = require('express');
const router = express.Router();
const BookController = require('../controller/BookController.js');

const controller = new BookController();

/** Books **/
router.get('/', (req, res, next) => {
    controller.getAll((json) => res.json(json));
});
router.get('/:id', (req, res, next) => {
    controller.getOne(req.params.id, (json) => res.json(json));
});
router.put('/', (req, res, next) => {
    controller.addOne(req.body, (json) => res.json(json));
});
router.patch('/:id', (req, res, next) => {
    controller.updateOne(req.params.id, req.body, (json) => res.json(json));
});
router.delete('/:id', (req, res, next) => {
    controller.deleteOne(req.params.id, (json) => res.json(json));
});

/** Comments **/
router.put('/:id/comment', (req, res, next) => {
    controller.addOneComment(req.params.id, req.body, (json) => res.json(json));
});

module.exports = router;
