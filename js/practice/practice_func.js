//  Задание на урок:

// 1) Первую часть задания повторить по уроку
"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How many movies have you seen?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How many movies have you seen?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Watched quite a few movies");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic viewer");
  } else if (personalMovieDB.count >= 30) {
    console.log("You are a movie buff");
  } else {
    console.log("Error");
  }
}

// detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

// P.S. Функции вызывать не обязательно*/

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Your favorite genre is number ${i}`);
    personalMovieDB.genres[i - 1] = genre;

    // personalMovieDB.genres[i - 1] = prompt(
    //   `Your favorite genre is number ${i}`
    // );
  }
}
writeYourGenres();
