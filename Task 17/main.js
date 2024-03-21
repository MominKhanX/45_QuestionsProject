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
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table won't arrive on time, so we can only invite two Guests to dinner.");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " We can't invite you to dinner"));
}
// Sending the invitations to the last two guests on the list
console.log("Invtations to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckily ".concat(lasttwo, ", you are still invited to the dinner.")); });
// Removing last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
