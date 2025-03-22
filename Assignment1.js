// Q1:- Add two numbers
// Solution
 let a = 20;
 let b = 10;
 const res = a + b;
 console.log("The Addition of two nunbers are:- ", res);

//  Q2:- Find if the conditions are obeyed or not?
// solution

let A1 = 10;
let B1 = 20;

const validResult = (A1, B1);
console.log("valid result is", validResult);

//Q3:- You are given a numbers A and B. You need to do the following checks?
// 1. if both are divisble by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them is divisble by 10 console true.
 
let A = 12;
let B = 20;

if (A % 10 == 0 && B % 10 == 0) {
    console.log(true); // Both are divisible by 10
} else if (A % 10 === 0 || B % 10 === 0) {
    console.log(true); // One of them is divisible by 10
} else {
    console.log(false); // Neither is divisible by 10
}

// Q4:- Find the first digit of a 4 digit number?
let num = 987654321;
let firstFour = num.toString().slice(0, 4);

console.log(firstFour);

// Q5:- last 4 digts.

let num1 = 987654321;
let lastFour = num.toString().slice(-4); 

console.log(lastFour); 

// Q6:- find the remainder?

let A2 = 4; // Divisor
let B2 = 17; // Dividend

let remainder = B % A; 
console.log(remainder); 

// Q7:- Multiply two numbers
let n1 = 10;
let n2 = 5;

const FinalOutput = n1 * n2;

console.log(FinalOutput);

//Q8:- 
let SubA = 85; 
let SubB = 90; 
let SubC = 80; 

let totalMarks = SubA + SubB + SubC; // Calculate total
let averageMarks = totalMarks / 3; // Calculate average

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);






