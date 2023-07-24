"use strict";

// To String
//1) устаревший способ
console.log(typeof String(null));
console.log(typeof String(4));

//2) канкатинация
console.log(typeof (5 + ""));

const num = 5;

// устаревшая запись, можно встретить на старых сайтах
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";
console.log(fontSize);

//To Number
//1) этим способом пользуются еще реже, чем String
console.log(typeof Number("4"));

//2) унарный плюс
console.log(typeof +"5");

//3) этими пользуются редко
console.log(typeof parseInt("15px", 10));

//Все что мы получаем от пользователя всегда будет типом данных строка
//более реальный пример использования
let answ = +prompt("Hello", "");

// To boolean
// 0, "", null, undefined, NaN, false;
//1) нативный способ
let switcher = null;

if (switcher) {
  console.log("working...");
}

switcher = 1;

if (switcher) {
  console.log("working...");
}

// 2)почти никогда не используется
console.log(typeof Boolean("4"));

//3)очень редко используется
console.log(typeof !!"444444");
