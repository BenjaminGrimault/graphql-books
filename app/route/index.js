const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ message: 'Welcome home' });
});
router.get('/ah', function(req, res, next) {
    res.json({ message: 'Ah !' });
});

module.exports = router;
