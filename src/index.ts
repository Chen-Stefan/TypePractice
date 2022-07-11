// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

//冒号后面的是type
const user1: {
  id: number,
  name: string
} = {
  id: 1,
  name: 'John'
}
//自定义type
type User = {
  id: number, 
  name: string
}

const user2: User = {
  id: 2,
  name: 'Stefan'
}