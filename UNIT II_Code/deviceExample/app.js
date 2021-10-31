// import {chalk} from "chalk";
const chalk = require("chalk");


class Device {
        constructor(Name, model, noLeds, location){
                this.name =  Name;
                this.model = model;
                this.noLeds = noLeds;
                this.location = location;
        };
        turnOnLed(){
                console.log( chalk.blue(`Led turned On...`));
        }
};

class DeviceWithCamera extends Device{
        constructor(Name, model, noLeds, location, camaraModel){
                super(Name, model, noLeds, location);
                this.camaraModel = camaraModel;
        };
        takeAPicture(){
                console.log( chalk.green(`Taking a picture...`));  
        };
        get getInfo(){
                return `name: ${this.name}, mode ${this.model}`;
        }
}


//instanciar un objecto
const firstDevice = new Device("MyFirstDevice", "RaspberryPi3", 2, 1000);
firstDevice.turnOnLed();

const secondDevice =  new DeviceWithCamera("SecondDevice", "RaspberryPi4", 4, 1000);
secondDevice.turnOnLed();
secondDevice.takeAPicture();
console.log(secondDevice.getInfo);