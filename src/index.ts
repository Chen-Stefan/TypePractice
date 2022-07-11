// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

// Use interface with objects. Interfacec can't be used with Union types

const user1: UserInterface = {
  id: 1,
  name: 'Stefan'
}

// user1.id = 7