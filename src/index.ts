// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

let cid: any = 1
// Type assertion的两种方法
let customerID1 = <number>cid
let customerID2 = cid as number

// customerID1 = true