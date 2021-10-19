const student =  {
    name: undefined,
    age: undefined,
    major: undefined,
    quarter: undefined,
    group: undefined,
    greeting: function(msg){
        // console.log(`this is equal to: ${JSON.stringify(this)}`);
        console.log(`${msg}, soy ${this.name} y tengo ${this.age} años. Soy de ${this.major} de ${this.quarter} cuatrimestre y soy del grupo ${this.group}`);
    },
};

const Carlos = Object.create(student);
Carlos.name = "Carlos Jose";
Carlos.age = 20;
Carlos.greeting("Hola Mundo");

const Cesar = Object.create(student);
Cesar.name = "Cesar Jesus";
Cesar.age = 20;
Cesar.greeting("Hello World");
Cesar.programming = function(problem){
    // Logic and computing
    console.log("Programming solution for", problem);
};
Cesar.programming("Create an amazing WebApp");





