/*
a function is a reusable block of code that performs a specific task.

1. Type the function keyboard
2. a name to id the function
3. give it a parentheses () -- they hold parameters
    - what parameters are, they are variables that are going to be used within that function, and only within that function
4. curly braces { } containing the code to run


*/

function greet() {
    console.log('Hello!')
};
greet();


function greetPerson(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old`)
}

greetPerson("Alice", 25);


function add(a, b) {

    return a + b;
}

let sum1 = add(5, 3);
let sum2 = add(10, 7);

console.log("The furst sum is:", sum1);
console.log("The second sum is:", sum2);


//helper function
function calculateArea(length, width){
return length * width;

};


//other function
function displayArea(length, width){
    let area = calculateArea(length, width);
    console.log(`The area is ${area}`)
}

displayArea(5,10);

//Exercise
//write a function called multiple, it takes two arguments as parameters and return their product. call that one time

function multiple(a,b){
    return a * b;
}
console.log(multiple(3,3));

//write a helper function to calculate the perimeter of a rectangle and use it in the main function to display the result
function calculatePerimeter(length, width){
    return 2 * (length * width)
};
function displayPerimeter(length, width){
    let perimeter = calculatePerimeter(length, width);
    console.log(`The perimeter is ${perimeter}`)

}
displayPerimeter(5,10);

//write a function called greetStudent that takes a student's name and display a personalized message using templete literals
function greetStudent(name){
console.log(`Greetings from ${name}! I hope to learn javascript as much as possible`)
}
greetStudent('Emilio');