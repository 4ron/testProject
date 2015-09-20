var express = require('express');
var router = express.Router();

/* GET new task page. */
router.get('/', function(req, res, next) {
    res.render('newtask', { title: 'Test' });
});

router.post('/', function(req, res, next) {
    res.render('newtask', { title: 'Put your new tasks here!' });
});

module.exports = router;