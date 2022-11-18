

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
    // showMyDB(personalMovieDB.privat);
    // writeYourGender();
    // console.log(personalMovieDB);

    // calculateVolumeAndArea(15);
    // calculateVolumeAndArea(-15);
    // calculateVolumeAndArea(15.5);
    // calculateVolumeAndArea('15');

    // getCoupeNumber(33);
    // getCoupeNumber(7);
    // getCoupeNumber(300) ;
    // getCoupeNumber(0) ;
    // getCoupeNumber(7.7) ;
    // getCoupeNumber(-10);
    // getCoupeNumber('Hello');

    // console.log(getTimeFromMinutes(150));
    // console.log(getTimeFromMinutes(50)) ;
    // console.log(getTimeFromMinutes(0)) ;
    // console.log(getTimeFromMinutes(-150)) ;


    // console.log(findMaxNumber(1, 5, 6.6, 11)) ;
    // console.log(findMaxNumber(1, 5, '6', '10')) ;


     console.log(fib(4)) ;
     console.log(fib(7)) ;
     console.log(fib('7')) ;
     console.log(fib(1)) ;
     console.log(fib(0)) ;

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

function calculateVolumeAndArea(lengthCub) {
    if( typeof(lengthCub) === 'string' || lengthCub <= 0 || lengthCub % 1 !== 0 ){
        console.log("При вычислении произошла ошибка");
    }else{
        console.log(`Обьем куба: ${Math.pow(lengthCub,3)}, площадь всей поверхности: ${Math.pow(lengthCub,2)*6}`);
    }
}

// Место для второй задачи
function getCoupeNumber(seating) {
    if( typeof(seating) === 'string' || seating <= 0 || seating % 1 !== 0 ){
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }else if( 0 < seating  && seating >= 36) {
       console.log("Таких мест в вагоне не существует");
    }else{
        console.log( Math.ceil(seating/4));
    }
}

function getTimeFromMinutes(minite) {
    let str = '';
    if( minite >= 0 && minite < 60 || minite >= 300 && minite <= 600){
        str = 'ов';
        return `Это ${Math.floor(minite/60)} час${str} и ${minite%60} минут`;
    }else if(minite >= 60 && minite < 300 ){
        str = 'а';
        return `Это ${Math.floor(minite/60)} час${str} и ${minite%60} минут`;
    } else{
        return "Ошибка, проверьте данные";
    }
}


function findMaxNumber(num1, num2,num3,num4) {
        const arr = [num1, num2,num3,num4];
        let max = 0 ;
        for ( let i = 0; i<4; i++) {
            if( typeof(arr[i]) === "string" || arr[i] == undefined ) 
            {return 0;}
            else{
                if(arr[i] >  max){ max = arr[i];}
            }
        }
        return max;
}

function fib(col) {
    let arr =[];
    let num1 = 0;
    let num2 = 1;
if(typeof(col) !== 'string'){
    if(col == 1){
        return `${num1}`;
    }else if(col == 2 ){
        return `${num2}`;
    }else if(col == 0 ){
        return '';
    }else{
        arr[0] = num1;
        arr[1] = num2;
        for(let i = 2; i < col; i++){
            arr[i]= arr[i-2]+arr[i-1];
        }
    }
   
    return  arr.toString;
}else{
    return '';
}
     
}

