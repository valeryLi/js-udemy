"use strict";

const arr = [1, 2, 3, 6, 8];

// Метод поп удаляет последний элемент из массива
arr.pop();
console.log(arr);
// Метод пуш добавляет элемент в конкц массива
arr.push(10);
console.log(arr);

// перебор массива. Этот цикл будет отрабатывать до тех пор пока не закончится длина массива
const array = [2, 3, 6, 8, 10];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Конструкция перебора for...of, такая конструкция работает только с массивоподобными сущностями(массив, псевдомассив, строка, мэп и сэт)
for (let value of array) {
  console.log(value);
}

// length
const a = [25, 3, 14, 6, 8];
a.sort(compareNum);
console.log(a);
function compareNum(a, b) {
  return a - b;
}

a.forEach(function (item, i, a) {
  console.log(`${i}: ${item} inside array ${a}`);
});

// split()
// sort() сортирует только строки в правильном порядке, но можновнутрь добавь коллбэк

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join("; "));

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
