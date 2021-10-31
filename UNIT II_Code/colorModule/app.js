// I want to creae a .txt file
const fs = require("fs");
const chalk = require("chalk");


const initialMessage =  chalk.blue("App running...");

console.log( initialMessage );


//An object:
const device = {
        sensorModel: "HC04",
        count: 0,
        date: new Date(),
};

//Crear un archivo en la base de datos local!
fs.writeFileSync("./db/log.json", '');
console.log( chalk.green("dataInfomation was created successfully!") );

try{
        fs.appendFileSync("/db/log.json", JSON.stringify(device));
        console.log(chalk.green("JSON done!"));
} catch(error) {
        console.log(chalk.red( chalk.red(`Error: ${error}`)));
}
console.log(chalk.yellow("Algoritmos running...."));
