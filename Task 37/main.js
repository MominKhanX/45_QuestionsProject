"use strict";
// Making Function
function makeShirt(size = "Large", printMessage = "I love TypeScript!") {
    console.log(`Creating a ${size} size shirt with "${printMessage}" printed on it!`);
}
// Make a large shirt with the default message!
makeShirt();
// Make a medium shirt with the default message!
makeShirt("Medium");
// Make a shirt of any size with a different message
makeShirt('small', 'Hello, World!');
