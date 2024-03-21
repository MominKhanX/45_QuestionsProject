// Current Users Array
var current_users = ["Usman", "Zain", "Aisha", "Ali", "Rehman"];
// New Users Array
var new_users = ["Mehdi", "Fatima", "Zain", "Musa", "Aisha"];
// Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_users) {
    // Making a condition for username already exists and save in "our_condition" Variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() === new_one_users.toLowerCase(); });
    // Print different message using "If-Else" statements 
    if (our_condition) {
        console.log("".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_users, " is available!"));
    }
});
