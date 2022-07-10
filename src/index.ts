// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

function greet(name: string | null | undefined) {
  if (name)
    console.log(name.toUpperCase())
  else
    console.log('Hola')
} 

greet(undefined)