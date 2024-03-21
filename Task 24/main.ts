// Define Variables
let mango = "mango";
let uppercaseMango = "MANGO";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "mango", "pomegranate"]

// Test for equality and inequality with strings
console.log("Is mango equals to mango?");
console.log(mango == "mango");

console.log("\nIs mango not equals to mango?");
console.log(mango != "mango");

// Tests using Lowercase Function
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");

console.log("\nIs MANGO is not equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");

// Numerical Tests
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// Not Equal to
console.log("\nIs ten not equal to twenty?");
console.log(ten != twenty);

// Greater Than
console.log("\nIs ten greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs Twenty Less than ten?");
console.log(twenty < 10);

// Greater Than or equal to
console.log("\nIs ten greater than 5 or equal to 5?");
console.log(ten >= 5);

// Less Than Or Equal to
console.log("\n Twenty is less than 10 or equal to 10?");
console.log(twenty <= 10);

// Tests using "and" & "or" Operators

// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in array
console.log("\nIs pomegranate is in my fruits array?");
console.log(fruits.includes("pomegranate"));

// Not include
console.log("\nIs pomegranate not included in my fruits array?");
console.log(!fruits.includes("pomegranate"));