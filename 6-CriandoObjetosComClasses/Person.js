

class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`Olá! Meu nome é ${this.name}`);
    }
}

module.exports = Person;