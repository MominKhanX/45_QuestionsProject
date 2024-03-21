let guestList = ["Hamza", "Asghar", "Zehra", "Fatima"];

let dontCome = guestList[0];

console.log("Unfortunately,", dontCome, "can't make it to the dinner.");

guestList.splice(0, 1, "Fahad");

guestList.forEach(guest => console.log(`Dear ${guest}, You are invited to dinner. Please join us!`));