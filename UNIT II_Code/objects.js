const BMO = {
    name: "BMO",
    type: "Video Game Console",
    friends: ["Fin", "Jake", "Burbujita"],
    dance: function(){
        console.log("BMO is dancing...");
        return;
    },
};

for (key in BMO){
    console.log(`${key}: ${BMO[key]}`);
};

Object.keys(BMO);
Object.getOwnPropertyNames(BMO);