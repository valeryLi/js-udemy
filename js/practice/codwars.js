// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
function solution(str, ending) {
  return str.endsWith(ending);
  //   return str[1] === ending[0] && str[2] === ending[1] ? true : false;
  //   const l = ending.length;
  //   const strNew = str.slice(-l);
  //   return strNew.match(ending) ? true : false;
}
console.log(solution("abc", "bc"));

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
console.log(saleHotdogs(10));

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
  // return name === owner ? 'Hello boss' : 	'Hello guest';
}
console.log(greet("Daniel", "Daniel"));
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

console.log(areaOrPerimeter(3, 3));
// console.log(areaOrPerimeter(6, 10));

// Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
  if (typeof i === "number") {
    return i * 2;
  }
}
console.log(doubleInteger(2));

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
console.log(basicOp(("+", 4, 7)));
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

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + " sheep...";
  }
  return result;
};
console.log(countSheep(2));

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
  // return n > 0 && m > 0 ? n * m : 0;
}
console.log(paperwork(5, 5));
console.log(paperwork(-5, -5));

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element
function removeEveryOther(arr) {
  // return arr.filter((item, index) => {
  //   return index % 2 === 0;
  // });
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Write function bmi that calculates body mass index (bmi = weight / height2).
function bmi(weight, height) {
  const bodyIndex = Math.round(weight / Math.pow(height, 2));

  if (bodyIndex <= 18.5) {
    return "Underweight";
  }
  if (bodyIndex <= 25) {
    return "Normal";
  }
  if (bodyIndex <= 30) {
    return "Overweight";
  }
  if (bodyIndex > 30) {
    return "Obese";
  }
}
console.log(bmi(98.8, 1.76));
console.log(bmi(80, 1.8));

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world"]));

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).
function rentalCarCost(d) {
  if (d < 3) {
    return d * 40;
  }
  if (d >= 3 && d < 7) {
    return d * 40 - 20;
  }
  if (d >= 7) {
    return d * 40 - 50;
  }
  //  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}
console.log(rentalCarCost(10));
