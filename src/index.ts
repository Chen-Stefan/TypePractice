// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

//Use const keyword with enum, compiler will generate much optimized code 

const enum Size {Small = 1, Medium, Large}
// enum Size {Small = 's', Medium = 'm', Large = 'l'}
let mySize: Size = Size.Medium