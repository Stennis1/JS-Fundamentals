// Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop

//     The first line: “C is fun”
//     The second line: “Python is cool”
//     The third line: “JavaScript is amazing”
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You are not allowed to use any if/else statement
//     You can use only one console.log
//     You must use a loop (while, for, etc.)

const array = ["C is fun", "Python is cool", "JavaScript is amazing"];
let output = '';

for (let i = 0; i < array.length; i++) {
    output += array[i] + '\n';
} 

console.log(output.trim());

// let output = '';
// let i = 0;

// while (i < array.length) {
//   output += array[i] + '\n';
// }

// console.log(output.trim());