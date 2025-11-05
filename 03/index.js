// Q.1
// -  Ask user for words until they type “stop”. Count how many times they typed “yes”

//my Code!
// let pr = prompt("Give me Your WORDS!")
// let count = 0;
// while (pr !== "stop") {
//     if (pr === "yes") {
//         count++
//     }
//     pr = prompt("Give me Your WORDS!")
// }
// console.log(`You Types yes ${count} times`)

//Chat GPT CODE!
// let input;
// let yesCount = 0;

// while (true) {
//   input = prompt("Enter a word (type 'stop' to end):");

//   // If user cancels or input is null — stop
//   if (input === null) break;

//   input = input.trim().toLowerCase();

//   if (input === "stop") {
//     break;
//   }

//   if (input === "yes") {
//     yesCount++;
//   }
// }
// console.log(`You typed "yes" ${yesCount} times.`);



// Q.2
// -  Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

//my Code!
// for (let i = 1; i <=50; i++) {
//     if (i % 7 == 0) {
//        console.log(i)
//    }
// }

//Chat GPT CODE!
// for (let i = 1; i <= 50; i++) {
//   if (i % 7 !== 0) continue;
//   console.log(i);
// }

// for (let i = 7; i <= 50; i += 7) {
//   console.log(i);
// }


// Q.3
// - Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

//my Code!
// let sum = 0;
// for (let i = 0; i <=30; i++) {
//     if (i % 2 !== 0) {
//         sum+=i
//     }
// }
// console.log(sum)

//Chat GPT CODE!
// let sum = 0;
// for (let i = 1; i <= 30; i += 2) {
//   sum += i;
// }
// console.log(sum);


//Q.4
// - Keep asking number until user enters an even number Use while loop. Stop only if input is even.
//my Code!
// let num = prompt("If You Type even number he will stop!")
// while (num % 2 !== 0) {
// num = prompt("If You Type even number he will stop!")
// }
// console.log(`You Enter ${num} `)


//Chat GPT CODE!
// let num;

// while (true) {
//   let input = prompt("Enter a number (even number will stop the program):");

//   // If user cancels
//   if (input === null) break;

//   input = input.trim();

//   // Convert to number
//   num = Number(input);

//   if (Number.isNaN(num)) {
//     alert("Please enter a valid number!");
//     continue;
//   }

//   if (num % 2 === 0) {
//     break;
//   }
// }

// console.log(`You entered an even number: ${num}`);


//Q.5
// - Print numbers between two user inputs Input start and end using prompt() → print all between.
//my Code!
// let num1=prompt("Give me 1st Number")
// let num2 = prompt("Give me 2st Number")

// for (num1; num1 <=num2; num1++) {
//    console.log(num1)
// }

//Chat GPT CODE!
// let start = Number(prompt("Enter start number:"));
// let end = Number(prompt("Enter end number:"));

// // Validate
// if (Number.isNaN(start) || Number.isNaN(end)) {
//   console.log("Invalid input — please enter numeric values only.");
// } else if (start > end) {
//   console.log("Start must be less than or equal to end.");
// } else {
//   for (let i = start; i <= end; i++) {
//     console.log(i);
//   }
// }

//Q.6
// - Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.
//my Code!
// let count = 0;

// for (let i = 0; i <= 20; i++) {
//     if (count === 3) break;
//     if (i % 2 !== 0) {
//         console.log(i)
//         count++
//     }
// }

//Chat GPT CODE!
// let printed = 0;

// for (let i = 1; i <= 20; i += 2) {  // start from 1, skip even numbers
//     console.log(i);
//     printed++;
//     if (printed === 3) break;
// }

//Q.7
// - Ask user 5 numbers. Count how many are positive Use loop + condition + counter.
//my Code!
// let num = 0;
// let count=0
// for (let i = 1; i <=5; i++) {
//     num = +prompt("Give me a number")
//     if (num >= 0) {
//         count++
//         console.log(num)
//     }
// }

// console.log(`${count} times positive `)

//Chat GPT CODE!
// let positiveCount = 0;

// for (let i = 1; i <= 5; i++) {
//     let input = prompt(`Enter number ${i}:`);
    
//     if (input === null) {
//         console.log("Input cancelled.");
//         break;
//     }

//     let num = Number(input);

//     if (Number.isNaN(num)) {
//         alert("Please enter a valid number!");
//         i--; // repeat this iteration
//         continue;
//     }

//     if (num > 0) {
//         positiveCount++;
//     }
// }

// console.log(`You entered ${positiveCount} positive number(s).`);



//Q.8
// - ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deductElse → print “Insufficient balance”
//my Code!
// let balance = 1000;
// let nikasiBlance=0
// for (let i = 1; i <= 3; i++) {
//     nikasiBlance = +prompt(`Kitna Nikalna hai sir per day 3 time nikal sakte!`)
//     if (nikasiBlance === null || isNaN(nikasiBlance)) {
//         console.error(`Apne kucch galat type kiya`)
//     } else {
//         if (nikasiBlance > balance) {
//             console.log(`Amount jayda hai bhaiya apke pass bas ${balance} hai`)
//         } else {
//             balance -= nikasiBlance;
//             console.log(`Aapne ${nikasiBlance} nikaala, ab aapke pass ${balance} hai`);
//         }
//     }
// }

//Chat GPT CODE!
// let balance = 1000;

// for (let i = 1; i <= 3; i++) {
//     let input = prompt(`Withdrawal ${i}/3 - Enter amount:`);

//     // Handle cancel
//     if (input === null) {
//         console.log("Transaction cancelled.");
//         break;
//     }

//     let withdrawal = Number(input);

//     // Validate input
//     if (Number.isNaN(withdrawal) || withdrawal <= 0) {
//         console.log("Please enter a valid positive amount.");
//         i--; // repeat this attempt
//         continue;
//     }

//     // Check balance
//     if (withdrawal > balance) {
//         console.log(`Insufficient balance! You have ₹${balance} only.`);
//     } else {
//         balance -= withdrawal;
//         console.log(`₹${withdrawal} withdrawn. Remaining balance: ₹${balance}.`);
//     }
// }


