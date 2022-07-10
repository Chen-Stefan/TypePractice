// Built-in types: number, string, boolean, null, undefined, object
// Typescript specific: any, unknown, never, enum, tuple

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;

}

// read only so you can't modify
let employee: Employee = {

  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
 
