// I want to create a .txt file

const fs = require("fs");
const chalk = require("chalk");
// import fs from "fs"

const initialMessage = chalk.blue("App running...");

console.log(initialMessage);

const jsonInformation = "{}"

//Crear un archivo en la base de datos local
fs.writeFileSync("./db/dataInformation.txt", "Server Information");
console.log(chalk.green("dataInformation was created succesfully!"));


