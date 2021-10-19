const device = {
    sensorModel: "HC04",
    count: 0,
    date: new Date(),
};

console.log(device.date.getFullYear(), typeof device);

const deviceJSON = JSON.stringify(device); // Conversion Object -> JSON
console.log(deviceJSON, typeof deviceJSON);

//Crear un JSON desde code

const myJson = '{"name": "Rodrigo", "edad": 20, "friends": ["Christian", "Marcos"], "isManager": false}';
console.log(myJson, typeof myJson);

//Manipular JSON format

const myObj = JSON.parse(myJson); // Conversion JSON -> Object
console.log(myObj.name);


