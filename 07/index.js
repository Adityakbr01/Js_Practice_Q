// Q.1
//  - write a function `sayHello()` that prints "Hello, JavaScript!",
// function sayHello() {
//     console.log("Hello, JavaScript!");
// }

// Q.2
// - create a function `add(a,b)` that return their sum and print it

// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3)); // Example usage

// Q.3
// - Write a function with default parameter `name=Guest` thats prints "Welcome, <name>!"

// function welcome(name = "Guest") {
//     console.log(`Welcome, ${name}!`);
// }

// welcome(); // Example usage with default parameter
// welcome("Alice"); // Example usage with provided parameter


// Q.4
// - Use rest parameter to make a function thats add unlimited numbers and return the sum,print it
// function addUnlimitedNumbers(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0); // Using reduce to sum up the numbers-> initial value 0, sum is accumulator, num is current value
// }

// console.log(addUnlimitedNumbers(1, 2, 3, 4, 5)); // Example usage
// console.log(addUnlimitedNumbers(10, 20, 30)); // Another example usage

// Q.5
// - Create an IIFE that prints "I run immediately!"
// (function() {
//     console.log("I run immediately!");
// })();


// Q.6
// -  make nested function where inner function prints a variable from the outer one
// function outerFunction() {
//     let outerVariable = "I'm from the outer function!";
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     innerFunction();
// }

// outerFunction(); // Example usage

// Q.7
// - Create an Array of 5 fruits, Add one at the end and remove one from the beginning, print the final array

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
// fruits.push("Fig");
// fruits.shift();
// console.log(fruits);
// Final array will be: ["Banana", "Cherry", "Date", "Elderberry", "Fig"]

// Q.8
// -  Use a `for` loop to print all elements of an array.

// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// Q.9
// - Create an Object `person` with properties `name`, `age`, and `city`. and print each key's value
// let person = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
// };

// console.log(person.name); // John Doe
// console.log(person.age);  // 30
// console.log(person.city); // New York

// Q.10
// - Use `setTimeout` to log `Times up!` after 3 seconds.
// setTimeout(() => {
//     console.log("Times up!");
// }, 3000);

