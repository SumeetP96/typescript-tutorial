"use strict";
let stringArr = ["one", "two", "three"]; // string[]
let mixedArr1 = ["some", "year", 1996]; // (string | number)[]
let mixedArr2 = ["other", 2, false]; // (string | number | boolean)[]
stringArr[0] = "sumeet";
stringArr.push("hey");
mixedArr1[0] = 1972;
mixedArr1.unshift("test");
let test = []; // any[]
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple;
myTuple = ["Dave", 2, true]; // [string, number, boolean]
let mixed = ["John", 1, false]; // (string | number | boolean)[]
myTuple[1] = 2;
// Objects
let myObj;
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
let evh = {
    name: "Eddid",
    active: false,
    albums: [1987, 5150, "OUB12"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
evh = jp;
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
