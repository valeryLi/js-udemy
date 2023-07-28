"use strict";

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes); //позволяет получить все узлы, которые находятся внутри этого родителя
//console.log(document.body.firstChild); // позволяет получить первого ребенка
//console.log(document.body.lastChild); // позволяет получить последнего ребенка

console.log(document.querySelector("#current").parentNode.parentNode);

//получение дата-атрибута
// console.log(document.querySelector("[data-current='3']").previousSibling); // получаем текстовые узлы

console.log(
  document.querySelector("[data-current='3']").previousElementSibling
); // получаем элемент
console.log(document.querySelector("[data-current='3']").nextElementSibling);

// console.log(document.querySelector("#current").parentNode);
console.log(document.querySelector("#current").parentElement); // аналог parentNode

//console.log(document.body.firstChild);
console.log(document.body.firstElementChild);

//аналога childNodes не существует и поэтому иногда его создают вручную. Метод forEach позволяет перебрать все элементы, которые находятся в коллекции, но иногда мы не можем использовать метод forEach. Это бывает редко, но такое случается. Тогда можно применить конструкцию for of

// допустим мы хотим из childNodes убрать все текстовые значения
for (let node of document.body.childNodes) {
  if (node.nodeName === "#text") {
    continue;
  }

  console.log(node);
}
// Иногда когда нужно перебрать какие-то элементы псевдомассива используется чтобы остановить или прервать цикл полностью.
