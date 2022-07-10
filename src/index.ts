// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined{
  return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0)

console.log(customer?.birthday?.getFullYear())

//Optional element access operator
customers?.[0]

//Optional call, will get executed only if log is referencing an actual function. Ohterwise, it will get undefined
let log: any = null
log?.('a')