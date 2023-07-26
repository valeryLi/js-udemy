"use strict";

const box = document.getElementById("box"); //по id
console.log(box);

const btns = document.getElementsByTagName("button"); // получение всех элементов по тэгу
console.log(btns); // псевдомассив

const btn = document.getElementsByTagName("button")[1]; // получение конкретной кнопки по индексу из коллекции
console.log(btn);
console.log(btn[1]); // результат будет как и придыдущий

const circles = document.getElementsByClassName("circle"); // обращение через класс
console.log(circles);

// современные методы, которые чаще всего используются

// так как мы используем селекторы, нужно всегда ставить точку перед классом
const hearts = document.querySelectorAll(".heart");
// самый большой плюс этого метода, то что у него появляется метод forEach
hearts.forEach((item) => {
  console.log(item);
});

// получение одного первого элемента, так как он возвращает только самый первый элемент из коллекции
const oneHeart = document.querySelector(".heart");
console.log(oneHeart);
