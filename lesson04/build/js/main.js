"use strict";
// Type aliases
// Literal types
let myName;
let userName;
userName = "Amy";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello");
logMsg(add(1, 2));
const subtract = (c, d) => {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
const multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(2, 2));
// optional parameters
const addAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(1, 1));
// Rest params
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(1, 1, 10, 1));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number";
};
// use of never
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen!");
};
