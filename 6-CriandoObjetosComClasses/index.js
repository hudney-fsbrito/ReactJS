const Person = require("./Person");
const Alumn = require("./Alumn");


const pedro = new Person("Pedro", 36)
pedro.greeting()
console.log(pedro);

const mario = new Alumn("Mario", 45, 302)
mario.greeting();
console.log(mario);