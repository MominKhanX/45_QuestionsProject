// Creating a Array With 5 Values
let userNames = ["Asghar", "Faris", "Zain", "Admin", "Mehdi"];

// Remove all values from our Array, Now our Array is Empty
userNames = []

// "If" Statement for checking length of our Array is empty?
if(userNames.length === 0){
    console.log("Your Array is empty, We need to find some users!");
}else{
    // Using forEach loop on Array
    userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}

