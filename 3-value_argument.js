// Write a script that prints the first argument passed to it:

//     If no arguments are passed to the script, print “No argument”
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You are not allowed to use length

const { argv } = require(`node:process`);

const userArgs = argv.slice(2);

if ( userArgs.length === 0 ) {
    console.log("No argument");
    
} else {
    console.log(userArgs[0]);
}