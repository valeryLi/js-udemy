"use strict";
// const btn = document.querySelector("button");
const btns = document.querySelectorAll("button"),
  overlay = document.querySelector(".overlay");

// btn.onclick = function () {
//   alert("Click");
// };

// btn.addEventListener("click", () => {
//   alert("click");
// });

let i = 0;

const deleteElement = (e) => {
  console.log(e.currentTarget);
  console.log(e.type);

  //   i++;
  //   if (i === 1) {
  //     btn.removeEventListener("click", deleteElement);
  //   }
  //   e.target.remove();
};

// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);

//  Чтобы повесить обработчик на несколько элементов, сначала надо перебрать коллекцию forEach
btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true }); //так же третьим аргументом можно передавать опции
});

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
