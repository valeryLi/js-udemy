"use strict";
/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы


2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания
// 1)

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("How many movies have you seen?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How many movies have you seen?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Which movie you have seen last?", "").trim(),
        b = prompt("How much do you rate it?", "");
      if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Watched quite a few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("You are a classic viewer");
    } else if (personalMovieDB.count >= 30) {
      console.log("You are a movie buff");
    } else {
      console.log("Error");
    }
  },
  showMyDb: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    // for (let i = 1; i <= 3; i++) {
    // let genre = prompt(`Your favorite genre is number ${i}`);
    //  if (genre === "" || genre === null) {
    //    console.log("ops... something went wrong...");
    //    i--;
    //  } else {
    //    personalMovieDB.genres[i - 1] = genre;
    //  }
    for (let i = 1; i <= 2; i++) {
      let genre = prompt(
        "Enter your favorite genres separated by comma"
      ).toLocaleLowerCase();

      if (genre === "" || genre === null) {
        console.log("ops... something went wrong...");
        i--;
      } else {
        personalMovieDB.genres = genre.split(", ");
        personalMovieDB.genres.sort();
      }

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    }
  },
};
// ////////////////////////////////////////////////////////////////////
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach((shop) => {
    square += shop.width * shop.length;
  });

  volume = data.height * square;

  if (data.budget - volume * data.moneyPer1m3 >= 0) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета недостаточно";
  }
  // const totalArea = data.shops.reduce((acc, shop) => {
  //   const shopsArea = shop.width * shop.length;
  //   return acc + shopsArea;
  // }, 0);
  // const volume = totalArea * data.height;
  // const checkBudget = volume * data.moneyPer1m3;
  // if (data.budget - checkBudget >= 0) {
  //   return "Бюджета недостаточно!";
  // } else {
  //   return "Бюджета достаточно";
  // }
}

console.log(isBudgetEnough(shoppingMallData));
