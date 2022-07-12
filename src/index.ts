// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

class Person {
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