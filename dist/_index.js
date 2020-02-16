"use strict";
// interface는 js에 관여하지 않음
// js안에 넣을 때는 class로
// interface Human {
//     name: string;
//     age: number;
//     gender: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const person = {
    name: "Chirs",
    age: 46,
    gender: "male"
};
const lynn = new Human("Lynn", 18, "female");
const sayHi = (person) => {
    // console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};
// console.log(sayHi(person));
console.log(sayHi(lynn));
//# sourceMappingURL=_index.js.map