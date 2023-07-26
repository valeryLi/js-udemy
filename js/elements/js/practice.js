"use strict";
const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

// console.dir(box); // все стили которые находяться в объектк стилей это inline стили
// box.style.backgroundColor = "green";
// box.style.width = "500px";
box.style.cssText = "background-color: blue; width: 500 px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {   //при помощи цикла меняем стили у
//   hearts[i].style.backgroundColor = "purple"; //всех элементов сразу
// }

hearts.forEach((item) => {
  //меняем у всех элементов при помощи forEach
  item.style.backgroundColor = "purple";
});

// создание элемента
const div = document.createElement("div");
// const text = document.createTextNode("I was here"); //этот метод используется редко

//Чтобы изменить несколько значений при стилизации, чаще всего используются классы, а не инлайн стили
// className устаревшее и лучше его не использовать
//современный способ classList
div.classList.add("black");
//теперь нужно див добавить в дерево дом
// document.body.append(div); // вставится в самый конец
// wrapper.append(div);

// wrapper.prepend(div); // вставит в начало элемента

// hearts[0].before(div);
// hearts[0].after(div); // появится после первого сердца

// circles[0].remove(); //удаление элемента

// hearts[0].replaceWith(circles[0]); // замена одного элемента на другой

// УСТАРЕВШИЕ КОНСТРУКЦИИ
// wrapper.appendChild(div); // было
// wrapper.append(div); //стало

//раньше методов prepend, before, after  не существовало и использовался метод insertBefore? insertAfter
// wrapper.insertBefore(div, hearts[1]); //было
// hearts[0].before(div);
// hearts[0].after(div);

//вместо remove использовался removeChild
// wrapper.removeChild(hearts[1]); //было
// circles[0].remove(); //стало

//вместо replaceWith использовался replaceChild
// wrapper.replaceChild(circles[0], hearts[0]); //было
// hearts[0].replaceWith(circles[0]);  //стало

// /////////////////////////////////////////////////
wrapper.append(div);

div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "hello";

div.insertAdjacentHTML("afterbegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
// div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
// div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
