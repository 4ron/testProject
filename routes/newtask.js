var express = require('express');
var router = express.Router();

/* GET new task page. */
router.get('/', function(req, res, next) {
    res.render('newtask', { title: 'Test' });
});

function checkInput(task, prio, deadline) {
    // This function checks if there is valid input in the fields.
    // Returns true if this is the case, else returns false
    if (!task || !prio || !deadline ) {
        return false
    }
    return true
}

router.post('/', function(req, res, next) {
    // retrieve the data from the user
    var task = req.body.task;
    var prio = req.body.prio;
    var deadline = req.body.deadline;

    // check for correctness TODO: implement better rules for checking for valid input
    if (checkInput(task, prio, deadline)) {
        console.log('Input was valid')

    } else {
        console.log('Input was invalid')
    }
    res.render('newtask', { title: 'Put your new tasks here!' });
});

module.exports = router;