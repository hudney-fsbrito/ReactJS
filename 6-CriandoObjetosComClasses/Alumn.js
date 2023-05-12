const Person = require("./Person");

class Alumn extends Person{
    constructor(name,age,turma){
        super(name,age);
        this.turma = turma;
    }

    greeting(){
        console.log(`Olá! Meu nome é ${this.name} e sou da turma ${this.turma}`);
    }
}

module.exports = Alumn;