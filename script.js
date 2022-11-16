

let numberOfFilms = +prompt("How many film you watched?","");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
};
for(let i = 0; i<2;i++){
    let a = prompt("What the last film you watched?",""),
        b = +prompt("description film you watched?","");
        if( a === '' || a.length >= 50 || a === null)
          {
            a = prompt("What the last film you watched?","");
          } 
          else  if( b === '' || b.length >= 50 || a === null)
          {
            b = prompt("What the last film you watched?","");
          } else
                {personalMovieDB.movies[a] = b; }
}


if(personalMovieDB.count<10){
    alert("Просмотрено довольно мало фильмов");
}
else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
    alert("Вы класический зритель");
}
else if(personalMovieDB.count > 30){
    alert("Вы киноман");
}else{
    alert("error");
}
        
console.log(personalMovieDB);