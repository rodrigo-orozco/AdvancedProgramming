const student =  {
    name: "Pedro",
    age: 19,
    greeting: function(msg){
        console.log(`this is equal to: ${JSON.stringify(this)}`);
        console.log(`${msg} soy ${this.name} y tengo ${this.age} años`);
    },
};
const cpyStudent = {...student};
cpyStudent.name = "Fernando"
console.log(student);
console.log(cpyStudent);



