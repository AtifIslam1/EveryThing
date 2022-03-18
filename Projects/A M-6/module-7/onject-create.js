// using object literal
const student = {name: 'Atif', job: 'student'};
// constructor
const person = new Object();

const human = Object.create(student);
// console.log(human.job);

// CLASS
// Syntactical Sugar 
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manush', 16);
console.log(peop);