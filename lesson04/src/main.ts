// Type aliases

type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal types
let myName: "Sumeet";

let userName: "Sumeet" | "John" | "Amy";

userName = "Amy";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(1, 2));

const subtract = (c: number, d: number): number => {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

const multiply: mathFunction = (c, d) => {
  return c * d;
};

logMsg(multiply(2, 2));

// optional parameters
const addAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};

logMsg(addAll(1, 1));

// Rest params
const total = (...nums: number[]) => {
  return nums.reduce((prev, curr) => prev + curr, 0);
};

logMsg(total(1, 1, 10, 1));

// never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number";
};

// use of never
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("This should never happen!");
};
