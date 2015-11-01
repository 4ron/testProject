var express = require('express');
var check = require('./checkInput');
var database = require('../models/database');
var router = express.Router();

/* GET new task page. */
router.get('/', function(req, res, next) {
    res.render('newtask', { title: 'Create task' });
});


router.post('/', function(req, res, next) {
    // retrieve the data from the user
    task = {};
    task['tasktext'] = req.body.task;
    task['prio'] = req.body.prio;
    task['deadline'] = req.body.deadline;

    // check for correctness TODO: implement better rules for checking for valid input
    if (check.checkInput(task)) {
        console.log('Input was valid')
        database.addTaskToDb(task);
    } else {
        console.log('Input was invalid')
    }
    
    res.render('newtask', { title: 'Create task' });
});

module.exports = router;
