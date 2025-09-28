class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return 'Hi my naame is ${this.name} and I am ${this.age} years old. ';
    }
}
//Demo
const person1 = new Person ("Daniel", 20);
console.log(person1.greet());