"use strict";

// if (4 == 9) {
//   console.log("ok!");
// } else {
//   console.log("error");
// }

const num = 50;

if (num < 49) {
  console.log("error");
} else if (num > 100) {
  console.log("too much");
} else {
  console.log("ok");
}

//Тернарный оператор
const num1 = 50;

num1 === 50 ? console.log("ok") : console.log("error");

// switch используется только при строгом сравнении, так же можно сравнивать строки
const num2 = 50;
switch (num2) {
  case 49:
    console.log("Wrong");
    break;
  case 100:
    console.log("Wrong");
    break;
  case 50:
    console.log("Correct");
    break;
  default:
    console.log("ops");
    break;
}

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
//   console.log("Done!");
// } else {
//   console.log("Angry customer!!!");
// }

console.log(1 && 0);
// Если с оператором и числовые значения и оба истины, то вернет последний истинный (числом)
console.log(1 && 5);
console.log(null && 5);
console.log(0 && "hdhhsihs");

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

// if (hamburger || cola || fries) {
//   console.log("Done!");
// } else {
//   console.log("Angry customer!!!");
// }

if ((hamburger === 3 && cola === 2) || (fries === 3 && nuggets)) {
  console.log("Done!");
} else {
  console.log("Angry customer!!!");
}

console.log((hamburger === 3 && cola === 2) || (fries === 3 && nuggets));

let johnReport,
  alexReport,
  samReport,
  mariaReport = "done";

console.log(johnReport || alexReport || samReport || mariaReport);
