//Q.1
// - Ask user age and check if eligible to vote or NOT, if age >=18 -> eligible ,else not eligible

// My Code!
// let age = prompt("Enter Your Age! for Check Voting eligibility")
// if (age === null) {
//     console.error("Bhaiya Cancel kyu kar diya")
// } else {
//     if (age.trim() === "") {
//         console.error("Bhaiya Space nhi age chahiye!")
//     } else {
//         if (isNaN(Number(age))) {
//             console.error("Bhaiya Number Chahiye String... nhi!")
//         } else {
//             if (age <= 0 || age >= 180) {
//                 console.error("Bhaiya Bhooooot ho kya?")
//             } else {
//                 if (age >= 18) {
//                     console.log(`Bhaiya aap Vote de sakte ho apka age ${age} hai`)
//                 } else {
//                      console.log(`Bhaiya aap Vote nhi de sakte ho apka age ${age} hai`)
//                 }
//             }
//         }
//     }
// }


//Chat GPT Code!
// function checkAge() {
//     let age = prompt("Enter your age to check voting eligibility:");

// if (age === null) return console.error("Bhaiya Cancel kyu kar diya");

// age = age.trim();

// if (!age) return console.error("Bhaiya Space nhi age chahiye!");
// if (isNaN(age)) return console.error("Bhaiya Number chahiye, string nahi!");
// age = Number(age);

// if (age <= 0 || age >= 180) return console.error("Bhaiya bhooot ho kya?");
// if (age >= 18) {
//   console.log(`Bhaiya aap vote de sakte ho. Aapka age ${age} hai ✅`);
// } else {
//   console.log(`Bhaiya aap vote nahi de sakte. Aapka age ${age} hai ❌`);
// }
// }
// checkAge()



//Q.2
// - Print multiplication table of 5 using loop, e.g -> 5x1=5

// //My code!
// const tableof = prompt("Kiska Table banna hai!")

// if (tableof === null) {
//     console.error("Bhaiya Cencel kar diya Table nhi chahiye kya?")
// } else {
//     if (tableof.trim() === "") {
//         console.error("Bhaiya Space ka Table nhi banta!")
//     } else {
//         if (isNaN(Number(tableof))) {
//             console.error("Bhaiya String ka table nhi banta number do")
//         } else {
//             for (let i = 1; i <=10; i++) {
//                 console.log(`${tableof} X ${i} = ${tableof*i}`)
//             }
//         }
//     }
// }

//Chat GPT code!
// function generateTable(params) {
//     const input = prompt("Kiska Table banna hai!");
// if (input === null) return console.error("Bhaiya Cancel kyu kar diya?");
// const num = input.trim();
// if (!num) return console.error("Bhaiya space ka table nahi banta!");
// if (isNaN(num)) return console.error("Bhaiya string ka table nahi banta, number do!");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} X ${i} = ${num * i}`);
// }
// }
// generateTable()




//Q.3
// - Count how many numbers between 1 and 15 are greater than 8, Loop and count conditionally.

//My Code!
// let count = 0;
// for (let i = 1; i <=15; i++) {
//     if (i > 8) {
//         count++;
//     }
// }
// console.log(`Count of numbers greater than 8 is: ${count}`);

//Chat GPT Code!
// let count = 0;

// for (let i = 9; i <= 15; i++) count++;
// console.log(`Numbers > 8 between 1 and 15 = ${count}`);



//Q.4
// - Ask user for password and print access status Hardcoded correct password. Compare with user input.

//my code!
// let isCorrect = false
// const correctPass = "admin"

// let password = prompt("Bhaiya Password dalo!")

// if (password === null) {
//     console.error("Bhiaya Cencel kyu kar diya Account open nhi karna kya?")
// } else if (password.trim() === "") {
//     console.error("Bhaiya Blank String mat do ...")
// } else {
//     if (password === correctPass) {
//        console.log("Log in Success!")
//     } else {
//         console.error("Password Not Match!")
//    }
// }

//chat GPT code!
// function checkPass() {
//    const correctPass = "admin";
// const input = prompt("Bhaiya Password dalo!");

// if (input === null)
//   return console.error("Bhaiya Cancel kyu kar diya? Login nahi karna tha?");
  
// const password = input.trim();

// if (!password)
//   return console.error("Bhaiya blank password nahi chalta...");

// if (password === correctPass) {
//   console.log("✅ Login Success!");
// } else {
//   console.error("❌ Password Not Match!");
// }
 
// }
// checkPass()



// - Level 2 – Slightly Tougher but Logical
//Q.4
// - Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked” using while loop

//my code!

// let attempts = 0;
// let correctPass = "admin"
// let password = prompt("Bhaiya Password dalo!")
// attempts++
// if (password === null) {
//     console.error("Bhaiya Cencel kyu kar diya log in nhi karna hai kya!")
// } else {
//     if (password.trim() === "") {
//         console.error("Bhiaya Blank String kyu de rhe ho")
//     } else {
//         while (password !== correctPass) {
           
//             password = prompt("Bhaiya Password dalo!")
//             attempts++
//             if (password === null) {
//                 console.error("Bhaiya Cencel kyu kar diya log in nhi karna hai kya!")
//             } else if (password.trim() === "") {
//                 console.error("Bhaiya Blank String kyu de rhe ho")
//             } else {
//                 if (attempts >= 3) {
//                     console.error("Bhaiya Account Locked!")
//                     break
//                 }
//             }
//         }
//          if(password === correctPass){
//                 console.log("Log in Success!")
//             }
//     }
// }

//chat GPT code!
// const correctPass = "admin";
// let attempts = 3;

// while (attempts > 0) {
//   const input = prompt(`Bhaiya Password dalo! (Attempts left: ${attempts})`);

//   if (input === null) {
//     console.error("Bhaiya cancel kyu kar diya? Login nhi karna?");
//     continue; 
//   }

//   const password = input.trim();

//   if (!password) {
//     console.error("Bhaiya blank password nhi chalega!");
//     attempts--;
//     continue;
//   }

//   if (password === correctPass) {
//     console.log("✅ Login Success!");
//     break;
//   }

//   console.error("❌ Wrong password!");
//   attempts--;
// }

// if (attempts === 0) {
//   console.error("🔒 Bhaiya Account Locked!");
// }
