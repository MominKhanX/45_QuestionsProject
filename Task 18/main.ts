// Making a array of Countries and Print it's Original Order
let countriesToVisit: string[] = ["Spain", "Italy", "Brazil", "Argentina"]
console.log("Original Order:", countriesToVisit);

// Print the Array in Alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the array is still in it's Original order
console.log("Still in Original Order:", countriesToVisit);

// Print the Array in reversed order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the array is still in it's Original order
console.log("Still in Original Order:", countriesToVisit);

// We Have Changed The Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that it's back to it's original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that it's order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We Have Changed again The Original Array Order Now in reverse order again 
console.log("Original Array Reversed Again:", countriesToVisit.reverse());