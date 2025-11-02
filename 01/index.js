//Q.1
// - Print number 1 to 10 using for loop
// for (let i = 1; i < 11; i++){
//     console.log(`Lo Bhaiya ${i}`)
// }

//Q.2
//  - Print only even number using loops & condinional oprator
// for (let i = 1; i < 50; i++){
//     if (i % 2 ===0) {
//         console.log(i)
//     }
// }

//Q.3
//  - Print Numbers from 10 to 1 Using loop
// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }


//Q.4
//  - Print the Word YES Of 5 Times using loop!
// for (let i = 1; i < 6; i++){
//     console.log("YES")
// }



//Q.5
// - Ask user for a number and say if is positive Or negative
// const num = prompt("Give a number")
// if (num >= 0) {
//     console.log(`Ye to Postive Number hai Sir : ${num}`)
// } else {
//      console.log(`Ye to Nagative Number hai Sir : ${num}`)
// }



//Q.5
// - Ask user age and check user is elible to vote Or not
// const age = prompt("Type Your Age!")
// if (age >= 18) {
//     console.log(`Bhaiya aap VOTE de Sakte ho! : ${age}`)
// } else {
//      console.log(`Bhaiya aap VOTE nhi de Sakte ho! : ${age}`)
// }


//Q.6
// - Print multiplication table of 5 using loop
// for (let i = 1; i < 11; i++) {
//     console.log(`5 x ${i} = ${5 * i}`)
// }

//Q.6
// - how to handle edge case in js with if else
    //🐼 my Code
// const age = prompt("Type Your Age!")
// if (age === null) {
//     console.log("Bhaiya Apne Cencel Kar diya!")
// } else {
//     if (age.trim() === "") {
//        console.log("Bhaiya Number do Space nhi")
//     } else {
//         if (
//             isNaN(Number(age))
//         ) {
//             console.log("Bhaiya Yaar sahi se number do!")
//         } else {
//             if (age >= 18) {
//     console.log(`Bhaiya aap VOTE de Sakte ho! : ${age}`)
// } else {
//      console.log(`Bhaiya aap VOTE nhi de Sakte ho! : ${age}`)
// }
//         }
//    }
// }

// 😁 GPT CODE one Problem --> Illegal return statement : because return cannot be used at the top level in normal JavaScript files (only allowed inside functions).
// const age = prompt("Type Your Age!");
// if (age === null) {
//     console.log("Bhaiya aapne cancel kar diya!");
//     return;
// }

// if (age.trim() === "") {
//   console.log("Bhaiya number do, space nahi!");
// }

// if (isNaN(Number(age))) {
//   console.log("Bhaiya sahi se number do!");
// }

// if (Number(age) >= 18) {
//   console.log(`Bhaiya aap VOTE de sakte ho! : ${age}`);
// } else {
//   console.log(`Bhaiya aap VOTE nahi de sakte ho! : ${age}`);
// }

// 😁 GPT CODE NO Problem with function Base
// function checkAge() {
//   const age = prompt("Type Your Age!");

//   if (age === null) {
//     console.log("Bhaiya aapne cancel kar diya!");
//     return;
//   }

//   if (age.trim() === "") {
//     console.log("Bhaiya number do, space nahi!");
//     return;
//   }

//   if (isNaN(Number(age))) {
//     console.log("Bhaiya sahi se number do!");
//     return;
//   }

//   if (Number(age) >= 18) {
//     console.log(`Bhaiya aap VOTE de sakte ho! : ${age}`);
//   } else {
//     console.log(`Bhaiya aap VOTE nahi de sakte ho! : ${age}`);
//   }
// }

// checkAge();
