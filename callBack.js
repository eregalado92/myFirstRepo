// callback functions:
// is a function passed as an argument to another function.
// allos for more customizable behavior, ensures code exercutes in a speciic sequence


// function greet(name, callback) {
//     console.log(`hello, ${name}`);
//     callback();
// }

function sayGoodbye() {
    console.log('Goodbye')
};

// passing sayGoodbye as a callback to the function greet
// greet('Alice', sayGoodbye);

// function expressions:
// a function is stored in a variable
// it cannot be called before it is defined 

const subtract = function (a, b){
    return a - b;
};

console.log(subtract(5,3));


// Arrow functions:
// are a shorter way to write function expressions. They use => syntax and are specially useful for callbacks

// traditional function expression

const square = function (num){
    return num * num;
};

// arrow function
const squareArrow = (num) => num * num;

console.log(squareArrow(8));

/*
******RULES!!!******
1. If the function only has one parameter, the parentheses can be omitted:
2. If the function has no parameters, you MUST include ();
3. If the function has multiple line of code, use the curly braces {} and the return keyword
*/

const greet = name => console.log(`Hello, ${name}`);
//greet('bob');

const sayHi = () => console.log('Hi there!');
sayHi();

const add = (a,b) => {
    return a+ b;
};
