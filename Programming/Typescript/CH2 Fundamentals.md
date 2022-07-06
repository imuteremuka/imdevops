# Fundamentals

TypeScript is a superset of JavaScript, it includes all the built-in types in JavaScript

- a) number
- b) string
- c) boolean
- d) object
- d) additional types (eg any, unknown, never, enum, tuple, etc)

- In TypeScript, the type of variables are annotated
- A variable of type any can take any kind of value!

# Tuples

- Tuples are fixed-length arrays where each element has a specific type. We often use them for representing two or three related values.

# Enums

Enums represent a list of related constants.

# Annotation

- letsales:number = 123_456_789;
- letnumbers:number[] = [1, 2, 3];

# Tuples

- letuser: [number, string] = [1, 'IDM'];

# Enums

- enum Size { Small = 1, Medium, Large }

# Functions

- functioncalculateTax(income:number):number
- { returnincome \* .2};

# Objects

- let student: {
  id:number;
  name:string;
  retire: (date:Date) =>void
  } = {
  id:1,
  name:'IDM',
  retire:(date:Date)=>{},
  };
