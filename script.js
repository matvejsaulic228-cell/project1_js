'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из полседних просмотреных фильмов ? ', ''),
    b = prompt('На сколько его оцените?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('вы классический зритель ');
} else if (personalMovieDB >= 30) {
  console.log('вы киноман');
} else {
  console.log('произошла ошибка');
}

console.log(personalMovieDB);
