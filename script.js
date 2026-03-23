

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из полседних просмотреных фильмов?', ''),
    b = prompt('На сколько его оцените?', ''),
    c = prompt('Один из полседних просмотреных фильмов?', ''),
    d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);