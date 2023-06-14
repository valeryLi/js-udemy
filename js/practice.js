const numberOfFilms = +prompt("How many movies have you seen?", "");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Which movie you have seen last?", ""),
  b = prompt("How much do you rate it?", ""),
  c = prompt("Which movie you have seen last?", ""),
  d = prompt("How much do you rate it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
