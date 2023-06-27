"use strict";

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

function sayHello(name) {
  const message = `Hello, ${name}`;
  return message;
}

console.log(sayHello("John"));

//2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше
function returnNeighboringNumbers(number) {
  return [number - 1, number, number + 1];
}

console.log(returnNeighboringNumbers(5));

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
function getMathResult(baseNum, repNum) {
  if (typeof repNum !== "number" || repNum <= 0) {
    return baseNum;
  }
  let result = "";

  for (let i = 1; i <= repNum; i++) {
    if (i === repNum) {
      result += `${baseNum * i}`;
    } else {
      result += `${baseNum * i}---`;
    }
  }
  return result;
}
console.log(getMathResult(10, 5));

// ////////////////////////////////////////////////////////////
function getMathResult(num1, num2) {
  return `${num1}---${num1 * 2}---${num1 * 3}`;
}

console.log(getMathResult(10, 5));
// /////////////////////////////////////////
// CODEWARS
// apply() - это метод в JavaScript, который позволяет вызывать функцию с заданным значением this и аргументами, предоставленными в виде массива (или объекта, похожего на массив). В приведенном примере Math.max.apply(null, numbers) используется для поиска максимального значения в массиве numbers. Аргумент null используется в качестве значения this, потому что он не используется в этом случае.

var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};

var numbers = [1, 2, 3, 4, 5];
console.log(max(numbers)); // 5
console.log(min(numbers)); // 1
// ////////////////////////////////////////////
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);
// ///////////////////////////////////////////////////
function findAverage(array) {
  if (array.length === 0) {
    return 0;
  }
  const sum = array.reduce((a, b) => a + b);
  const avg = sum / array.length;

  return avg;
}
console.log(findAverage([]));
// var find_average = (array) => {
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }
// метод map() для удвоения значений в массиве
function maps(x) {
  const doubleNum = x.map((number) => number * 2);
  return doubleNum;
}
console.log(maps([1, 2, 3]));
// метод forEach() для удвоения значений в массиве.
const doubledNumbers = [];
numbers.forEach((number) => {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);
// //////////////////////////////////////////
function maps(x) {
  //return x.map(el => el * 2);
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}
// //////////////////////////////////////////
function openOrSenior(data) {
  return data.map((member) => {
    const [age, handicap] = member;

    if (age >= 55 && handicap > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
// /////////////////////////////////////////////////////////////////

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
// ///////////////////////////////////////////////////////////
function openOrSenior(data) {
  var result = [];
  data.forEach(function (member) {
    if (member[0] >= 55 && member[1] > 7) {
      result.push("Senior");
    } else {
      result.push("Open");
    }
  });
  return result;
}
// //////////////////////////////////////////////////////

function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      if (isNaN(parseInt(pin[i]))) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(validatePIN("a231"));
// return /^(\d{4}|\d{6})$/.test(pin)
