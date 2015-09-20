/**
 * Created by konstantinkunz on 20/09/15.
 */

exports.checkInput = function (task, prio, deadline) {
    // This function checks if there is valid input in the fields.
    // Returns true if this is the case, else returns false
    if (!task || !prio || !deadline ) {
        return false;
    }
    return true;
};
