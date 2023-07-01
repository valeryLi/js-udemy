"use strict";

let num = 20;

function showFirstMessage(text) {
  // console.log(text);

  let num = 10;
  // console.log(num);
}

showFirstMessage("Hello World!");
// console.log(num);

// /////////////////////////////////////////////
function calc(a, b) {
  return a + b;
}

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 3));

function ret() {
  let num = 50;

  //

  return num;
}

const anotherNum = ret();
// console.log(anotherNum);

// .................................
const logger = function () {
  // console.log("Hello");
};
logger();
// ///////////////////////////////////////////////

// const calc = (a, b) => a + b;

// //////////////////////////////////////////////////////

const usdCurr = 28;

function convert(amount, curr) {
  // console.log(curr * amount);
}

convert(500, usdCurr);
// //////////////////////////////////////////////////////

function doNothing() {}
// console.log(doNothing() === undefined);

// Фибоначчи (вычесление порядкого номера)
function fibonacci(num) {
  const result = [0, 1];

  for (let i = 2; i <= num; i++) {
    const prevNum1 = result[i - 1];
    const preNum2 = result[i - 2];

    result.push(prevNum1 + preNum2);
  }

  return result[num];
}

console.log(fibonacci(3));

function fibonacciShort(num) {
  let a = 1,
    b = 1;

  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
    // [a,b] = [b,a+b] short example
  }
  return b;
}
console.log(fibonacciShort(3));
// Решение с помощью рекурсии медленное решение
function fibonacciRec(num) {
  if (num < 2) {
    return num;
  }
  return fibonacciRec(num - 1) + fibonacciRec(num - 2);
}

// udemy
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу. Если переданный аргумент не число - вернуть пустую строку.
// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

function fib(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return "";
  }

  let result = "";
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`;
      // Без пробела в конце
    } else {
      result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;
  }
  return result;
}
console.log(fib(5));
