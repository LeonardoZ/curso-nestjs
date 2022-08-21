let apples: number = 5;

let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];

let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Class
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// First Case - Any
const json = '{"x":20,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// Seconds Case - Split declartion / assign
let words = ['red', 'green'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word === 'green') {
    foundWord = true;
  }
}

// Type cannot be inferred
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
