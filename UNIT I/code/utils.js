var module = "Este es mi módulo";

export default class myUtils{
    constructor(){
    };
}

export function validateWord(variable, palabra) {
        
    if (variable.includes(palabra)) {
        return true;
    }
    return false;

}

// nexport {validateWord, module};