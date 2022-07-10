// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

function calculateTax(income: number, taxYear = 2022): number {
  if(taxYear < 2022)
    return income * 1.2
  return income * 1.3
}

calculateTax(10_000)

// void suggests no return value
function whatever(): void {
  console.log('haha')
}