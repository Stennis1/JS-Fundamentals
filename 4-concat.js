// Write a script that prints two arguments passed to it, in the following format: “ is ”

//     You must use console.log(...) to print all output
//     You are not allowed to use var

const { argv } = require(`node:process`);

const userArgs = argv.slice(2);

if ( userArgs.length >= 2 ) {
    console.log(userArgs[0] + " is " + userArgs[1]);

} else if ( userArgs.length === 1 ) {
    console.log(userArgs[0], "is undefined");

} else if ( userArgs.length === 0) {
    console.log(`undefined is undefined`);

} else {
    console.log("Try passing arguments")
}