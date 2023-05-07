"use strict";
class Coder {
    constructor(name, music, age, lang = "typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old.`;
    }
}
const coder = new Coder("sumeet", "pop", 27);
console.log(coder.getAge());
// console.log(coder.age);
// console.log(coder.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const webdev = new WebDev("Mac", "webdev", "jazz", 30);
console.log(webdev.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy", "guitar");
console.log(page.play("strums"));
// Static types
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const peep1 = new Peeps("peep1");
const peep2 = new Peeps("peep2");
const peep3 = new Peeps("peep3");
console.log(peep1.id);
console.log(peep2.id);
console.log(peep3.id);
console.log(Peeps.count);
// Getters and Setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
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
