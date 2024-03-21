var guestList = ["Hamza", "Asghar", "Zehra", "Fatima"];
var dontCome = guestList[0];
console.log("Unfortunately,", dontCome, "can't make it to the dinner.");
guestList.splice(0, 1, "Fahad");
guestList.forEach(function (guest) { return console.log("Dear ".concat(guest, ", You are invited to dinner. Please join us!")); });
