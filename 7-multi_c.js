// Write a script that prints x times “C is fun”

//     Where x is the first argument of the script
//     If the first argument can’t be converted to an integer, print “Missing number of occurrences”
//     You must use console.log(...) to print all output
//     You are not allowed to use var
//     You can use only two console.log
//     You must use a loop (while, for, etc.)

const { argv } = require(`node:process`);

const userArgs = argv.slice(2);
const count = parseInt(userArgs[0]);

if (!isNaN(count) && count > 0) {
    let i = 0;
    let output = "";

    while (i < count) {
        output += "C is fun\n";
        i++
    }    
    console.log(output.trim());

} else if (!isNaN(count) && count <= 0) { 

} else {
    console.log("Missing number of occurrences");
}
