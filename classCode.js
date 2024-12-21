// Simple call function
function greet(name, callback) {
    callback(name);
};
function sayHello(name) {
    console.log(`Hello, ${name}`);

};
greet('John', sayHello);

// processText - takes two parameter (text, callback)
// calls a callback function with text as a parameter
// toUpperCase - takes a parameter(text)
// and you console.log (text)
// toUpperCase
// call the processText function...
// Output: Uppercase your agruments

function processText(text, callback) {
    callback(text);
}
function toUpperCase(text) {
    console.log(text.toUpperCase());
}
processText('Uppercase your arguments', toUpperCase);

// variables with function in them
let subtract = (x,y) => x - y;

const add = (c, d) => c + d;

// Arrow functions
// Provide a shorter syntax for writing function expressions

const multiply = (a,b) => a * b;
const myName = name => console.log(name);

let isEven = num => num % 2 === 0;
console.log(isEven(9))