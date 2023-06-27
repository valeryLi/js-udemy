"use strict";

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

const str = "test";
console.log(str.toUpperCase());

const string = "teSt";
console.log(string.toLocaleLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

// Math
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
