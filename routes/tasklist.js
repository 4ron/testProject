var express = require('express');
var router = express.Router();

/* GET list of tasks */
router.get('/', function(req, res, next) {
    res.render('tasklist');
});

module.exports = router;
