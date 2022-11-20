

let numberOfFilms;
 //   start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: true,
    writeYourGender : function(){
        for(let i=1; i<=3; i++){
            do{
                this.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
            }while(this.genres[i-1] === '' ||  this.genres[i-1] === null );
        }
        this.genres.forEach( (genr,i) =>{
            console.log(`Любимый жанр ${i+1} - это ${genr}`);
        });
    },
    showMyDB: function(hidden){
        if( !hidden ){
            console.log(personalMovieDB);}
            else{
                console.log('OK')
            }
    },
    detectPersonalLevel: function(){

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
          
    },
    toggleVisibleMyBD: function(){
        (this.privat == true) ?  this.privat = false :  this.privat = true;
    },
    
};

    // personalMovieDB.writeYourGender();

    // writeYourGender(){
    //     for(let i=1; i<=3; i++){
    //             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    //        if(genre === '' ||  genre == null ){
    //             console.log("Error");
    //             i--;
    //        }else{
    //         personalMovieDB.genres[i] = genre;
    //        }
    //     }
    //     personalMovieDB.genres.forEach( (genr,i) =>{
    //         console.log(`Любимый жанр ${i+1} - это ${genr}`);
    //     });
    // }


    // personalMovieDB.showMyDB(personalMovieDB.privat);
    // personalMovieDB.toggleVisibleMyBD();
    // personalMovieDB.showMyDB(personalMovieDB.privat);

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


    //  console.log(fib(4)) ;
    //  console.log(fib(7)) ;
    //  console.log(fib('7')) ;
    //  console.log(fib(1)) ;
    //  console.log(fib(0)) ;




    // -------------------------------------------------------------------------------------------


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


//----------------------------------- Oblect JS------------------



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(obj){  //=> 'Мне 29 и я владею языками: RU ENG'
        let str ='';
        const{languages} = obj.skills;
       languages.forEach(function(lang) {
        str+=`${lang.toUpperCase()} `;
       });
        //console.log(`Мне ${obj.age} и я владею языками: ${str}`);
        return `Мне ${obj.age} и я владею языками: ${str}`;
    }
};

//showExperience(personalPlanPeter); // => '1 month'
//showProgrammingLangs(personalPlanPeter); // =>"Язык js изучен на 20% Язык php изучен на 10%"
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
const {exp} = plan.skills;
   // console.log(exp);
    return(exp);
}

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;
    
    if( Object.keys(programmingLangs).length != 0 ){
            for (const key in programmingLangs) {
               //console.log(`Язык ${key} изучен на ${programmingLangs[key]} \n`);
               return `Язык ${key} изучен на ${programmingLangs[key]} \n`;
            }
        }else{
           // console.log("");
            return '';
        }
}

// ---------------massiv---------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str ='';
   (arr.length != 0) ?  str = 'Семья состоит из:' : str = 'Семья пуста';
    arr.forEach(element =>{
        str+=` ${element}`;
    });
    return str;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str ='';
    arr.forEach((city) =>{
        str+=`${city.toLowerCase()}\n`;
    });
    return str;
    
}

// console.log(showFamily(family)); // => 'Семья состоит из: Peter Ann Alex Linda'
// console.log(standardizeStrings(favoriteCities)); //  выведет в консоль lisbon rome milan dublin


function reverse(str) {
    let strReverse =  str.split('').reverse();
    return strReverse.join('');
}

const someString = 'This is some strange string';
// console.log(reverse(someString)); //=> 'gnirts egnarts emos si sihT'


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));

function availableCurr(arr, missingCurr) {
    if(arr.length == 0){
        return 'Нет доступных валют';
    }else{
    let newArr=[];
    for( let valueCurrencies of additionalCurrencies ){
        baseCurrencies.push(valueCurrencies);
       
    }
    for( let value of baseCurrencies){
       for(let i = 0; i < arr.length; i++){
        if (value === arr[i] ){
            if(arr[i] != missingCurr){
                newArr.push(arr[i]);
                }
            }
        }
    }   
    
    return 'Доступные валюты:\n'+newArr.join('\n');
}
}


const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};


isBudgetEnough(shoppingMallData);

function isBudgetEnough(mallData) {
    let square = 0;
    let squareAllMall = 0;
    let volumeAllMall = 0;
    let needBudget = 0;
    mallData.shops.forEach( (shop)=> {
        //console.log(shop);
        square = shop.length*shop.width;
        squareAllMall+=square;
    } );
    volumeAllMall = squareAllMall*mallData.height;
    needBudget = volumeAllMall* mallData.moneyPer1m3;
     console.log(needBudget);
    if(needBudget <= mallData.budget){
        console.log( 'Бюджета достаточно');
        return 'Бюджета достаточно';
    }else{
        console.log( 'Бюджета недостаточно');
        return 'Бюджета недостаточно';
    }
};