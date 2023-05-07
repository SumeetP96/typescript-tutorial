// Generics
const stringEcho = (arg: string): string => arg;
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { arg, is: false };
  }
  return { arg, is: !!arg };
};

console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave", new: true }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));

// Generics with interface
interface BookCheck<T> {
  value: T;
  is: boolean;
}

const checkBoolValue = <T>(arg: T): BookCheck<T> => {
  if (Array.isArray(arg) && !arg.length) {
    return { value: arg, is: false };
  }
  if (isObj(arg) && !Object.keys(arg as keyof T).length) {
    return { value: arg, is: false };
  }
  return { value: arg, is: !!arg };
};

// extending Generics
interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  return user;
};

console.log(processUser({ id: 1, name: "Dave" }));
// console.log(processUser({ name: "Dave" }));

const users = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" },
  { id: 4, name: "User4" },
];

const getUsersProperty = <T extends HasId, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

console.log(getUsersProperty(users, "id"));
console.log(getUsersProperty(users, "name"));

// Generics with class
class StateObject<T> {
  private data: T;

  constructor(data: T) {
    this.data = data;
  }

  public get state(): T {
    return this.data;
  }

  public set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("John"); // inferred as string
console.log(store.state);
// store.state = 11; // gives error as it's inferred as string

// Adding types to class
const myState = new StateObject<(string | number | boolean)[]>([15]);
console.log(myState.state);
myState.state = ["Dave", 42, true];
console.log(myState.state);
