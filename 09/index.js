// Q.1
//  -  Q1. write a  higher order function runTwice(fn) that takes another function and execute in two times.
// function runTwice(fn) {
//     fn();
//     fn();
// }
// runTwice(() => {
//     console.log("This function runs twice!");
// });


// Q.2
// -  create one pure function that always return the same output for the given input, and one impure function using a global variable.
// Pure function
//  function pureAdd(a, b) {
//      return a + b;
// }
 
// console.log(pureAdd(2, 3)); // Example usage

// // Impure function
// let globalValue = 10;

// function impureAdd(a) {
//     return a + globalValue;
// }
// console.log(impureAdd(5)); // Example usage

// // Another example of pure function

// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 3)); // Example usage

// Q.3
// - Write a Object that destructuring inside parameters to extract and print the properties `name` and `age`.
// function printPerson({ name, age }) {
//     console.log(`Name: ${name}, Age: ${age}`);

//     }
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "Wonderland"
// };

// printPerson(person); // Example usage

// Q.4
// -Demonstrate the deference between normal function and arrow function when you uused as object  methods(use `this` essue).

// const obj = {
//     name: "My Object",
//     normalFunction: function() {
//         console.log("Normal Function:", this.name);
//     },
//     arrowFunction: () => {
//         console.log("Arrow Function:", this.name);
//     }
// };

// obj.normalFunction(); // Output: My Object
// obj.arrowFunction();  // Output: undefined (or window/global object name in non-strict mode)



// Q.5
// - Given an Array of Numbers, use map() to create a new Array where each number is squared.
 
// let numbers = [1, 2, 3, 4, 5];
// let squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Q.6
// -   Use fillter() to get only the even numbers from an Array.
 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// Q.7
// -  Use reduce to find the total slaary from an Array of employee objects with a `salary` property.
//  let employees = [
//      { name: "Alice", salary: 5000 },
//      { name: "Bob", salary: 6000 },
//      { name: "Charlie", salary: 7000 }
// ];
 
// let totalSalary = employees.reduce((total, employee) => total + employee.salary, 0); // Initial value is 0 = total variable and employee is current object
// console.log(totalSalary); // Output: 18000

// Q.8
// -  Create an Array of names and use some() and every() to test a condition (e.g, all name longer than 3 characters).
// let names = ["Al", "Bob", "Charlie", "Dave"];
// let allLongerThan3 = names.every(name => name.length > 3);
// let someLongerThan3 = names.some(name => name.length > 3);
// console.log("All names longer than 3 characters:", allLongerThan3); // Output: false
// console.log("Some names longer than 3 characters:", someLongerThan3); // Output: true


// Q.9
// -  Create an object user and test the behaviewr of Object.freeze() and Object.seal() methods, by adding/changing keys.
//  let person = {
//      name: "John Doe",
//      age: 30
// };
 
// // Object.freeze(person);
// Object.seal(person);
// person.age = 31; // This will work with seal, but not with freeze
// person.city = "New York"; // This will not work with either seal or freeze : error : Uncaught TypeError: Cannot add property city, object is not extensible

// console.log(person);
// console.log(person.name); // John Doe
// console.log(person.age);  // 31
// console.log(person.city); // New York

// Object.seal(person);
// person.age = 31; // This will work with seal, but not with freeze
// person.city = "New York"; // This will not work with either seal or freeze
// console.log(person.name); // John Doe
// console.log(person.age);  // 31
// console.log(person.city); // New York



// Q.10
// -  Create a nested object (user -> address -> city) and use optional chaining to access the city property safely.
// let user = {
//     name: "Jane Doe",
//     address: {
//         street: "123 Main St",
//         city: "Metropolis"
//     }
// };

// let city = user.address?.city;
// console.log("City:", city); // Output: Metropolis
// let user2 = {
//     name: "John Smith"
//     // address is missing
// };

// let city2 = user2.address?.city;
// console.log("City:", city2); // Output: undefined
