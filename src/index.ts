// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple


function kgToLbs(weight: number | string): number {
  // Narrowing down the union type into a specific type
  if (typeof weight === 'number') {
    return weight * 2.2
  }else {
    return parseInt(weight) * 2.2
  }
}

kgToLbs(10);
kgToLbs('10kg')