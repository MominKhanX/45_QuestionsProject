// Creating a Guest List Array
var guestList = ["Hamza", "Asghar", "Zehra", "Fatima"];
// making variable for those guest who can't come
var dontCome = guestList[0];
// Print the name of guest who can't come
console.log("Unfortunately,", dontCome, "can't make it to the dinner.");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Fahad");
// Message print for bigger table
console.log("Great news! We found a bigger dinner table.");
// Adding a new value at starting index of array
guestList.unshift("Zain");
// Adding a new value at ending index of array
guestList.push("Mehdi");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Faris");
// Print Messages of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Dear ".concat(oneguest, ", You are invited to dinner. Please join us!")); });
