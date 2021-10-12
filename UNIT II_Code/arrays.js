//Create an array

var myArray = [1,2,3,4,5]; // Literal Array
// myArray2 = new Array[1,2,3]; // Using constructor

//Longitud de arrays

const ln = myArray.length;
console.log(ln);

// Show Array;
console.log(myArray);

//Iterate arrays
for (let i = 0; i < ln; i++) {
    console.log(myArray[i]);
}

console.log("-----");

for (let index in myArray) {
    console.log(myArray[index]);
}

console.log("-----");

for (let i of myArray) {
    console.log(i);
}

// Adding elements

let data = [];
console.log(data);
const temp = 27;
data.push(temp);
console.log(data);
data.push(68);
console.log(data);

//Insert first element

data.unshift(12);
console.log(data);

// Splice --> Insert multiple data

data.splice(1,0,3,4); // splice(index, deletedata, add...)
console.log(data);

///* Delete elements */

data.pop();
console.log(data);

data.shift();
console.log(data);

data.splice(1,3,500);
console.log(data);

console.log("----");

// Copy

var friends = ["Luis", "Rafael", "Carla"];
console.log(friends);

var bestFriends = friends.slice(1);

console.log(bestFriends);
console.log(friends);

// Restar dos unidaddes a todos los items

var edades = [20, 22, 23, 24];

/*for (let i = 0; i < edades.length; i++) {
    edades[i] = edades[i] - 2;
}*/

edades = edades.map(function (currentValue, index) {
    return currentValue - 2;
})
console.log(edades);