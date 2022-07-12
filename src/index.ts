// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['stefan', 'damon', 'tom'])

// numArray.push('hello')
// strArray.push(1)