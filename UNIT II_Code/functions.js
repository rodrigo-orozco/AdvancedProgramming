// console.log(addTwoNumbers(2,3));

function addTwoNumbers(parametr1, parametro2){ //Expression!
    return parametr1 + parametro2;
};

const addFullnumbers = function (){ //Sentencia
    const numbers = [...arguments]
    const add =  numbers.reduce( (acc, currentValue, currentIndex, array) => {
            return acc = {add: acc.add + currentValue};
    }, acc = {add: 0} )
    return add;
};
console.log(addFullnumbers(1,2,3));

//Arrow function//
function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function sayHello( callback, first, last ){
    console.log(`Hello ${callback(first, last)}`);
}

sayHello( getName, "Luis", "Gerardo");

console.log(arrowFunction( 2));
const arrowFunction =  arg1 => arg1*2; //sentencia
//console.log(arrowFunction( 2));2