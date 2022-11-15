
let numberOfFilms = +prompt("How many film you watched?","");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres:[],
    privat: false,
};

let x = prompt("What the last film you watched?","");

personalMovieDB.movies[x]= +prompt("description film you watched?","");
console.log(personalMovieDB)