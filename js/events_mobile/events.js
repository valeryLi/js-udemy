"use strict";
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (event) => {
    event.preventDefault();

    console.log("start");
    console.log(event.changedTouches);
  });

  box.addEventListener("touchmove", (event) => {
    event.preventDefault();

    console.log(event.targetTouches[0].pageX);
  });

  box.addEventListener("touchend", (event) => {
    event.preventDefault();

    // console.log("end");
  });
});

//touches all fingers on the screen
//targetTouches
//changedTouches
