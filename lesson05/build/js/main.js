"use strict";
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// invalid type assertion - TS won't know as we've taken the control of type
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string; // TS error
// Double casting
10;
// DOM
const img = document.querySelector("img");
const myImg = document.getElementById("img");
const nextImage = document.getElementById("img");
