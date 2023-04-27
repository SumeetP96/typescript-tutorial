let stringArr = ["one", "two", "three"]; // string[]

let mixedArr1 = ["some", "year", 1996]; // (string | number)[]

let mixedArr2 = ["other", 2, false]; // (string | number | boolean)[]

stringArr[0] = "sumeet";
stringArr.push("hey");

mixedArr1[0] = 1972;
mixedArr1.unshift("test");

let test = []; // any[]
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean];

myTuple = ["Dave", 2, true]; // [string, number, boolean]
let mixed = ["John", 1, false]; // (string | number | boolean)[]

myTuple[1] = 2;

// Objects
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

// auto inference
const exampleObj = {
  prop1: "sumeet",
  prop2: 26,
};

exampleObj.prop1 = "Sumeet";

// type Guitarist = {
interface Guitarist {
  name?: string; // boolean | undefined
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddid",
  active: false,
  albums: [1987, 5150, "OUB12"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}`;
  }
  return "Hello!";
};

console.log(greetGuitarist(jp));

// Enums
enum Grade { // starts from 0
  U = 1, // now this will start from 1
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
