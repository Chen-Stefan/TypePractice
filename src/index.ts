// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

interface PersonInterface {
  id: number, 
  name: string,
  register(): string
}
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const stefan = new Person(1, 'Stefan Chen')
const tom = new Person(2, 'Tom Qu')

console.log(stefan.register())

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const shawn = new Employee(8, 'Shawn', 'Assistant')