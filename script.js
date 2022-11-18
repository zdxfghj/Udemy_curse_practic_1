

let numberOfFilms;
 //   start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: true,
};

//rememberMyFilms();
   // detectPersonalLevel();
   // console.log(personalMovieDB);
     showMyDB(personalMovieDB.privat);
    writeYourGender();
    console.log(personalMovieDB);



function writeYourGender(){
    for(let i=1; i<=3; i++){
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
   
}

    function showMyDB(hidden){
    if( !hidden ){
        console.log(personalMovieDB);}
}


function detectPersonalLevel(){

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
      
}




function rememberMyFilms(){

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
}

function start(){
    numberOfFilms = +prompt("How many film you watched?","");
    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt("How many film you watched?","");
    }
}