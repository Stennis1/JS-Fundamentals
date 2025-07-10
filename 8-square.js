// Write a script that prints a square

//     The first argument is the size of the square
//     If the first argument can’t be converted to an integer, print “Missing size”
//     You must use the character X to print the square
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You must use a loop (while, for, etc.)

const { argv } = require(`node:process`);
let userArgs = argv.slice(2);

const squareSize = parseInt(userArgs[0]);

if (!isNaN(squareSize)) {
    for (let i = 0; i < squareSize; i++) {
        console.log('X'.repeat(squareSize));
    }

} else {
    console.log("Missing size");
}