// Write a script that prints the addition of 2 integers

//     The first argument is the first integer
//     The second argument is the second integer
//     You have to define a function with this prototype: function add(a, b)
//     You must use console.log(...) to print all output
//     You are not allowed to use var

const { argv } = require(`node:process`);
let userArgs = argv.slice(2);

let num1 = parseInt(userArgs[0]);
let num2 = parseInt(userArgs[1]);

function add(a, b) {
    return a + b;
}

if (userArgs.length === 0 || userArgs.length === 1) {
    console.log("NaN");

} else {
    console.log(add(num1, num2)); 
}