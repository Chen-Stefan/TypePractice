"use strict";
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const stefan = new Person(1, 'Stefan Chen');
const tom = new Person(2, 'Tom Qu');
console.log(stefan.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const shawn = new Employee(8, 'Shawn', 'Assistant');
