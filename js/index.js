"use strict";
// alert("hello")

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Are you happy?", "Yes");
// console.log(typeof answer);
// const answer = prompt("How old are you?", "18");
// console.log(answer + 5);
// const answers = [];

// answers[0] = prompt("How is your name?", "");
// answers[1] = prompt("How is your surname?", "");
// answers[2] = prompt("How old are you?", "");

// document.write(typeof answers);

// Интерполяция
// const category = "toys";
// console.log(`https://someurl.com/${category}/5`);

// const user = "Alex";
// alert(`Hello, ${user}`);

// Операторы
let incr = 10,
  decr = 10;
// Префиксная форма, если ее записать сразу в консоль то она выдаст сразу результат
// ++incr;
// --decr;
// Постфиксная формаб если ее записать сразу в консоль, то она вернет сначало первоначальное значение, а потом только выполнит действие
incr++;
decr--;

console.log(incr);
console.log(decr);

// Ответ будет один так как деление таким способом возвращает остаток
console.log(5 % 2);

// Если используется = это знак присваивания
// Если мы сравниваем двумя ==, то если мы сравним 2*4 == 8 будет тру, но если мы приведем 8 к строке, то тоже будет тру.Это сравнение по значению, а не по типу данных.
//  Если же мы хотим сравнить по типу данных мы обязательно ставим ===

// Оператор и && . Возвращает тру только в том случае, если все значения правдивы. Запинается на лжи.
// const isChecked = true,
//   isClose = false;

// console.log(isChecked && isClose);

// Оператор или || Возвращает тру, кроме того случая когда все значения лживы. Запинается на правде.
// const isChecked = true,
//   isClose = false;

// console.log(isChecked || isClose);

// Оператор воскрицания ! меняет буливое значение, то есть мы его используем, когда хотим поменять значение на противоположное.
// const isChecked = false,
//   isClose = false;

// console.log(isChecked || !isClose);

console.log(2 + 2 * 2 === 8);
// false
console.log(2 + 2 * 2 !== 6);
// false
console.log(2 + 2 * 2 !== "6");
// true
console.log(4 * 3 ** 2);
// 36
