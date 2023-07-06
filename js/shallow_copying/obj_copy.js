"use strict";

// Когда мы работаем с примитивными типами данных (строки, числа, логические значения), то они передаются по значению как показано ниже. В значение b записывается 5;
let a = 5,
  b = a;

b = b + 5;

console.log(b);
console.log(a);

// На практике видно, что изменяю копию объекта, мы модифицируем и наш объект obj. При работе с объектами, массивами, функциями, спкцифические объекты, идет передача не по значению, а по ссылке. В переменную копи не кладется новый объект, а идет передача по ссылке.
const obj = {
  a: 5,
  b: 1,
};

const copyObj = obj; //ссылка

copyObj.a = 10;

console.log(copyObj);
console.log(obj);

//  Чтобы создать копию объектов существует несколько способов
// 1)Цикл
function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
// Если начать тестирование более тчательно, то можно заметить одну интересную особенность.
newNumbers.c.x = 10;
// c поменяется в двух местах. Когда копируются объекты есть два понятия копирования: глубокие и поверхностные. В этом примере создана поверхностная копия. Так как при копирование в с сохранилась ссылка, с поменялся в двух местах.

console.log(newNumbers);
console.log(numbers);

// 2) Object.assign()

const numbersObj = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumber = copy(numbersObj);

newNumber.a = 10;
newNumber.c.x = 10;

console.log(newNumber);
console.log(numbersObj);

const add = {
  d: 17,
  e: 20,
};

// Теперь необходимо соединить numbersObj c add
console.log(Object.assign(numbersObj, add));

// Тоже самое можно сделать и с пустым объектом
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add); //{d:17, e: 20}
console.log(clone); //{d: 20, e: 20}

// Копия массива
// если записать вот так, то в newArray запишется просто ссылка
const oldArray = ["a", "b", "c"];
// const newArray = oldArray;
// Чтобы сделать копию нужно записать через метод slice(), который позволяет просто скопировать старый массив. В него еще можно передать аргументы по кол-ву этих элементов
const newArray = oldArray.slice();

newArray[1] = "abrakadabra";

console.log(newArray);
console.log(oldArray);

// ////////////////////////////////////
// spread
const video = ["youtube", "vimeo", "netflix"],
  blogs = ["wordpress", "livejournal", "blogger"],
  internet = [...video, ...blogs, "fb", "instagramm"];

console.log(internet);

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newArr = [...array];

console.log(newArr);

const q = {
  one: 1,
  two: 2,
};

const newObj = { ...q };
console.log(newObj);
