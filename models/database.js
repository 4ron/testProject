/**
 * Created by konstantinkunz on 20/09/15.
 */

var pg = require('pg');

// var conString = "postgres://konstantinkunz:mamamia@localhost:5432/konstantinkunz";
// var conString = "postgres://postgres:aron@localhost:5432/testdb1";
var conString = process.env.DATABASE_URL;

// make sure your local db has a table called task_table
exports.addTaskToDb = function(task) {
    pg.connect(conString, function(err, client, done) {
        client.query("INSERT INTO task_table(tasktext, prio, deadline, complete) " +
            "VALUES($1, $2, $3, $4)", [task.tasktext, task.prio, task.deadline, false], function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
        });
    });
};

exports.queryAllTasks = function(res, callback) {
    pg.connect(conString, function(err, client, done) {
        console.log(client);
        client.query("SELECT * FROM task_table", function(err, result) {
            done();
            if (err) {
                console.error(err); response.send("Error " + err);
            } else {
                console.log(result);
                // somehow render the tasklist with the results
                callback(res, result.rows);
            }
        });
    });
};

exports.setTaskComplete = function(task_id, set_value) {
  // Sets the task completed variable to true.
    pg.connect(conString, function(err, client, done) {
      client.query("UPDATE task_table SET complete=($1) WHERE id=($2)", [set_value, task_id])
    })
}
