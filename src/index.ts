// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

// Literal type with union

type Quantity = 50 | 100
let quantity: Quantity = 100

type Metric = 'cm' | 'inch'