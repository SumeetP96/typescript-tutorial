class Coder {
  dangerousProperty!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age} years old.`;
  }
}

const coder = new Coder("sumeet", "pop", 27);
console.log(coder.getAge());
// console.log(coder.age);
// console.log(coder.lang);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const webdev = new WebDev("Mac", "webdev", "jazz", 30);
console.log(webdev.getLang());
// console.log(webdev.age);
// console.log(webdev.lang);

// Implementing interface to classes

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));

// Static types
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
const peep1 = new Peeps("peep1");
const peep2 = new Peeps("peep2");
const peep3 = new Peeps("peep3");

console.log(peep1.id);
console.log(peep2.id);
console.log(peep3.id);
console.log(Peeps.count);

// Getters and Setters
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not an array of strings!");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);
MyBands.data = ["Van Halen"];
console.log(MyBands.data);
