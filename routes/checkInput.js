/**
 * Created by konstantinkunz on 20/09/15.
 */

exports.checkInput = function (task) {
    // This function checks if there is valid input in the fields.
    // Returns true if this is the case, else returns false
    if (!task.tasktext || !task.prio || !task.deadline ) {
        return false;
    }
    return true;
};
