type One = string;
type Tow = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Tow; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;
// invalid type assertion - TS won't know as we've taken the control of type
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string; // TS error

// Double casting
10 as unknown as string;

// DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement;
const nextImage = <HTMLImageElement>document.getElementById("img");
