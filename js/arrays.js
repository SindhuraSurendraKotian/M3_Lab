
//STEP 1
var fav_movies = ["Top Gun Maverick", "Spider-Man", "Ironman", "Avengers", "Captain America"];
console.log(fav_movies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "Top Gun Maverick";
movies[1] = "Spider-Man";
movies[2] = "Ironman";
movies[3] = "Avengers";
movies[4] = "Captain America";
console.log(movies[0]);

//STEP 3
var movies_2 = new Array(5);
movies_2[0] = "Top Gun Maverick";
movies_2[1] = "Spider-Man";
movies_2[2] = "Ironman";
movies_2[3] = "Avengers";
movies_2[4] = "Captain America";
movies_2.splice(2,0,"Loki");
console.log(movies_2.length);

//STEP 4
var movies_3 = [];
movies_3[0] = "Top Gun Maverick";
movies_3[1] = "Spider-Man";
movies_3[2] = "Ironman";
movies_3[3] = "Avengers";
movies_3[4] = "Captain America";

delete movies_3[0];
console.log(movies_3);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "Top Gun Maverick";
favMovies3[1] = "Spider-Man";
favMovies3[2] = "Ironman";
favMovies3[3] = "Avengers";
favMovies3[4] = "Captain America";
favMovies3[5] = "Loki";
favMovies3[6] = "La La Land";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

//STEP 6
var favMovies4 = [];
favMovies4[0] = "Top Gun Maverick";
favMovies4[1] = "Spider-Man";
favMovies4[2] = "Ironman";
favMovies4[3] = "Avengers";
favMovies4[4] = "Captain America";
favMovies4[5] = "Loki";
favMovies4[6] = "La La Land";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "Top Gun Maverick";
favMovies5[1] = "Spider-Man";
favMovies5[2] = "Ironman";
favMovies5[3] = "Avengers";
favMovies5[4] = "Captain America";
favMovies5[5] = "Loki";
favMovies5[6] = "La La Land";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "Top Gun Maverick";
favMovies6[1] = "Spider-Man";
favMovies6[2] = "Ironman";
favMovies6[3] = "Avengers";
favMovies6[4] = "Captain America";
favMovies6[5] = "Loki";
favMovies6[6] = "La La Land";


var leastFavMovies = [];
leastFavMovies[0] = "Joker";
leastFavMovies[1] = "Creed";
leastFavMovies[2] = "Fury";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());
window.console.log("\n");

//STEP 11
var movies2 = favMovies6.concat(leastFavMovies);
var movie = movies.shift();
window.console.log(movie);
window.console.log("\n");

//STEP 12

const moviesNew = ["Hustle", "Man From Toronto", "The Godfather", "The Dark Knight", "Pulp Fiction"];
const dislikedMovies = ["Hustle", "Man From Toronto"];

const indices = [];

moviesNew.forEach((movie, index) => {
  if (dislikedMovies.includes(movie)) {
    indices.push(index);
  }
});

const likedMovies = ["The Spider-Man", "You People", "Interstellar"];

indices.forEach((index) => {
    moviesNew[index] = likedMovies.shift();
});

window.console.log("Movies that I like are:");
for (let index = 0; index < moviesNew.length; index++) {
    window.console.log(moviesNew[index] );
}
window.console.log("\n");

//STEP 13

let movies2d = [ ["You Peolpe", 1], ["Baby boss", 2], ["Dark", 3], ["Stanger things", 4], ["The Originals", 5]];

let mymovie = movies2d.filter( value => {
    return typeof value[0] === 'string';
});
mymovie = mymovie.map(movie => movie[0]);

for (let index = 0; index < mymovie.length; index++) {
    window.console.log(mymovie[index]);
}
window.console.log("\n");

//STEP 14

var employees = ["Sindhu", "Abhi", "Mike", "Rahul", "Steve"];
window.console.log("Employees: " + "\n" );

var showEmployee = function (e){
    for (let index = 0; index < e.length; index++) {
        window.console.log(e[index]);
    }
}
showEmployee(employees);
window.console.log("\n");

//STEP 15

function filterValues(array) {
    return array.filter(value => {
      return value !== false && value !== null && value !== 0 && value !== '';
    });
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
window.console.log("\n");

  // STEP 16

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
  
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getRandomItem(numbers));
window.console.log("\n");


// STEP 17

function getLargestNumber(array) {
return Math.max(...array);
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getLargestNumber(numbersArray));
window.console.log("\n");

