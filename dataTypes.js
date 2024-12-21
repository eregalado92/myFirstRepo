// 1. String - Text data, wrapped in quotes (single, double, or backticks)
let name = "Alice"; // double quotes
let greeting = 'Hello'; // single quotes
let message = `Welcome, ${name}!`; // template literal with backticks
console.log("String Examples:");
console.log(name);        // Output: Alice
console.log(greeting);    // Output: Hello
console.log(message);     // Output: Welcome, Alice!
console.log("\n");

// 2. Number - Numeric data, including integers and floating-point numbers
let age = 25; // integer
let price = 19.99; // floating-point
let bigNumber = 123456789012345678901234567890n; // BigInt (for large numbers)
console.log("Number Examples:");
console.log(age);         // Output: 25
console.log(price);       // Output: 19.99
console.log(bigNumber);   // Output: 123456789012345678901234567890n
console.log("\n");

// 3. Boolean - Represents true or false values
let isStudent = true;
let isAdmin = false;
console.log("Boolean Examples:");
console.log(isStudent);   // Output: true
console.log(isAdmin);     // Output: false
console.log("\n");

// 4. Null - Represents an empty or unknown value
let emptyValue = null;
console.log("Null Example:");
console.log(emptyValue);  // Output: null
console.log("\n");

// 5. Undefined - A variable that has been declared but not assigned a value
let notAssigned;
console.log("Undefined Example:");
console.log(notAssigned); // Output: undefined
console.log("\n");

// 6. Object - A collection of key-value pairs, used to store complex data
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log("Object Example:");
console.log(person); // Output: { name: 'Alice', age: 25, isStudent: true }
console.log(person.name); // Accessing a property (Output: Alice)
console.log("\n");

// 7. Array - A list of values, also an object, where values are indexed
let colors = ["red", "green", "blue"];
console.log("Array Example:");
console.log(colors);       // Output: [ 'red', 'green', 'blue' ]
console.log(colors[1]);    // Accessing an element (Output: green)
console.log("\n");

// 8. Symbol - A unique and immutable data type used for unique identifiers
let id = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol Example:");
console.log(id);           // Output: Symbol(id)
console.log(id === id2);   // Symbols are unique, so this is false
console.log("\n");

// Summary
console.log("Summary of Data Types:");
console.log("String:", typeof name); // Output: string
console.log("Number:", typeof age); // Output: number
console.log("Boolean:", typeof isStudent); // Output: boolean
console.log("Null:", typeof emptyValue); // Output: object (quirk in JS)
console.log("Undefined:", typeof notAssigned); // Output: undefined
console.log("Object:", typeof person); // Output: object
console.log("Array (also object):", Array.isArray(colors)); // Output: true
console.log("Symbol:", typeof id); // Output: symbol


/*
two majors types of data in JS 
strings, number, boolean (true/false), null(represents an intentional 'empty' value), underfined(something declared, but not asigned), Symbol, BigInt

Primitive Data types: you cannot modify their values directly


non-primitive (Reference) Data types:
does not hold actual values, instead they store a reference point to where that value is located
arrays
object



*/


//variable declarations
//let lets you change the value later
//const your value must stay consistant
//var is a variable that is used within a function
