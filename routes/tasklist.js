var express = require('express');
var router = express.Router();
var database = require('../models/database');

/* GET list of tasks */
router.get('/', function(req, res, next) {
    //res.render('tasklist');
    database.queryAllTasks(res, doRender);
});

var doRender = function (res, rows) {
    res.render('tasklist', {tasks: rows});
};

module.exports = router;
