// Current Users Array
let current_users = ["Usman", "Zain", "Aisha", "Ali", "Rehman"];

// New Users Array
let new_users = ["Mehdi", "Fatima", "Zain", "Musa", "Aisha"];

// Loop through new_users to check for usernames availability
new_users.forEach(new_one_users => {
// Making a condition for username already exists and save in "our_condition" Variable
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase());

    // Print different message using "If-Else" statements 
    if (our_condition){
        console.log(`${new_one_users} is already taken!`);
    }else{
        console.log(`This username ${new_one_users} is available!`);
    }
})