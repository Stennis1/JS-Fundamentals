// Write a script that computes and prints a factorial

//     The first argument is integer (argument can be cast as integer) used for computing the factorial
//     Factorial of NaN is 1
//     You must do it recursively
//     You must use a function
//     You must use console.log(...) to print all output
//     You are not allowed to use var


const { argv }= require(`node:process`);
const userArgs = argv.slice(2);

const num = parseInt(userArgs[0]);

function factorial(n) {
    if (isNaN(n)) {
        return 1;
    } 
    
    if (n <= 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

console.log(factorial(num));