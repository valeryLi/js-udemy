// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  return str.endsWith(ending);
  //   return str[1] === ending[0] && str[2] === ending[1] ? true : false;
  //   const l = ending.length;
  //   const strNew = str.slice(-l);
  //   return strNew.match(ending) ? true : false;
}
// console.log(solution("abc", "bc"));

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  }
  if (n >= 5 && n < 10) {
    return n * 95;
  }
  if (n >= 10) {
    return n * 90;
  }
}
// console.log(saleHotdogs(10));

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
  // return name === owner ? 'Hello boss' : 	'Hello guest';
}
// console.log(greet("Daniel", "Daniel"));
// console.log(greet("Greg", "Daniel"));

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  }
  return (l + w) * 2;
  // return l == w ? l*w : 2*(l + w)
};

// console.log(areaOrPerimeter(3, 3));
// console.log(areaOrPerimeter(6, 10));

// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  if (typeof i === "number") {
    return i * 2;
  }
}
// console.log(doubleInteger(2));

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return null;
  }
}
// console.log(basicOp(("+", 4, 7)));
// console.log(basicOp(("-", 15, 18)));
// console.log(basicOp(("*", 5, 5)));
// console.log(basicOp(("/", 49, 7)));

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
  // return num * (num + 1) / 2
};
console.log(summation(2));
