"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

console.dir([1, 2, 3]);

const soldier = {
  health: 400,
  armor: 100,
  sayHello: function () {
    console.log("Hello");
  },
};

// const john = {
//   health: 100,
// };

const john = Object.create(soldier);
// Object.setPrototypeOf(john, soldier);

// old method
// john.__proto__ = soldier;
// console.log(john.armor);
john.sayHello();
