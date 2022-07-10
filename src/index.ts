// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

// read only so you can't modify
let employee: {
  readonly id: number,
  name: string
  retire: (date: Date) => void
} = {id: 1, name: '', retire: (date: Date) => {
  console.log(date)
}}

employee.id = 0
