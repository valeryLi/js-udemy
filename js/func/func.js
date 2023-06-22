"use strict";

let num = 20;

function showFirstMessage(text) {
  console.log(text);

  let num = 10;
  console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// /////////////////////////////////////////////
function calc(a, b) {
  return a + b;
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 3));

function ret() {
  let num = 50;

  //

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

// .................................
const logger = function () {
  console.log("Hello");
};
logger();
// ///////////////////////////////////////////////

const calc = (a, b) => a + b;

// //////////////////////////////////////////////////////

const usdCurr = 28;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
// //////////////////////////////////////////////////////

function doNothing() {}
console.log(doNothing() === undefined);
