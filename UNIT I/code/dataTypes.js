import {validateWord} from "./utils.js"
var myNumber = 12;
const myFloat = 3.1416;
let myString = "HelloWorld";


console.log(`${myString.length}`);
console.log(`${myString.toLowerCase()}`);
console.log(`${myString.indexOf("o")}`);
console.log(`${myString.toUpperCase()}`);


if(validateWord(myString, "Hello")){
    console.log("Hi, everyone");
}

const mySubstring = myString.substring(5, myString.indexOf("r"));
console.log(mySubstring);

const newString = myString.padStart(50, ".");
console.log(newString);

const otherString = myString.padEnd(50, ".");
console.log(otherString);