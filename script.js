

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


const a = prompt("What the last film you watched?",""),
      b = +prompt("description film you watched?",""),
      c = prompt("What the last film you watched?",""),
      d = +prompt("description film you watched?","");
      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;


console.log(personalMovieDB);