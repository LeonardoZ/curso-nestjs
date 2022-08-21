# NestJS Course - Udemy

# Typescript

- Js + Type system
- TS:  Type System: Catch errors in dev, uses type annotations to analyze code, only active on dev, doesn't provide anii performance improvements.

## Setup
`npm install -g typescript ts-node`
`tsc --help`

## Learning
- tsc file.ts => compiles to .js => node file.js or
- ts-node file.ts


## Types
- Type: easy way to refer to the different properties + functions that a value has
- Value: something we can assign
- Primitive Types: string, number, boolean, void, undefined, symbol, null
- Object Types: functions ((i: number) => void), arrays (type[]), classes, objects ({ x: number; y: number })
- Used by TSC do analyze possible errors
- Or types = boolean | number

## Type annotation
- Code that tell what type of a value a variable will refer to.
`const logTodo = (id: number, title: string, completed: boolean) => {})`
`const apples: number = 5;`
- Use Everything  but parameters and return types

## Type inference
- Typescript guesses the type
- Three scenarios to avoid Type Inference: *Function returns*, *Declare and initializa variables in different moments*, and *When a type can be infered on a variable*.
- JSON.parse = return any
- Any: TS cant infer

## Tuples
- Array-like structure, where each element represents some property of a record
`const pepsi: [string, boolean, number] = ['brown', true, 40];`
`type Drink = [string, boolean, number];`
- Reading CSV is good use case
- Overall not used, prefer objects

## Interfaces
- Create a new type, describing the property names and value types of an object
```
interface Todo {
  id: number;
  title: string;
  completed: boolean
}
```
- Can ignore properties
- May need type cast, like ` const todo = response.data as Todo;`
- Reusability strategies: Use interface as parameters, implement it in object/classes

## Classes
- Blueprint to create an object with some fields and methods to represet a thing
- Fields by default are public, bu can be private or protected (can use method in child classes)
- Has inheritance and method overlaoding
- constructors: `constructor(public color: string) {}` defines property and constructor


```
class Vehicle {
  constructor(public color: string) {}

  honk(): void {
    console.log('mululu');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vrom');
    console.log(`${this.wheels} wheels`);
    console.log(`${this.color} colors`);
  }
}
const car = new Car(3, 'orange');
car.drive();
```

# Parcel
- Parcel is a Bundler
- It serves html as a server
`parcel index.html`

# Type Definition Files
- Type mapping files, that some libs uses.
- Install the declarion file
- @types/{library name} -> @types/faker
- May come with the lib, or not
