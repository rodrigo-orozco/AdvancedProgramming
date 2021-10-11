var myInt = 24;
var myFloat = 3.1416;
var myString = "Luis";
var myNull = null;


//TypeCasting: Explicit using Global Function

console.log(typeof myFloat);
console.log(typeof String(myFloat));
console.log(typeof myFloat);

myString = Number(myString);
console.log(typeof myString);
console.log(myString);

//Falsy Values

console.log(" "); // This value is true bc it contains an space
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(myNull));
console.log(Boolean(false));

// True Values

console.log(Boolean("Rodrigo"));
console.log(Boolean(5));
console.log(Boolean({}));
console.log(Boolean([]));

console.log(typeof myNull);

console.log( isNan( Number("5x") ) );

// TypeCasting Explicit Methods

console.log( Number.parseInt(myString));
console.log( Number.parseFloat(myString));

// TypeCasting Implicit Cohersion

var result = "hola " + "mundo"
var resultNumbersString = 2 + "22"; 
var resultNumbersStringRemainder = 2 - "22";
console.log(resultNumbersString);