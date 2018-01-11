'use strict';
// step 2.consider the following array

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");

//step 2.2 log your new array

console.log(favoriteAnimals);

//step 2.3 add the favorite animal to the array and make sure it is placed after blowfish and before capricorn

favoriteAnimals.splice(1, 0, "meerkat");

//step 2.4 explain the new value of the array is.

console.log("the out put it will be the same array with adding 'meerkat' in position 1");

//step2.5 log the new new array.

console.log(favoriteAnimals);

//step 2.6 log the length of the array  and add a message

console.log("The array has a length of: " + favoriteAnimals.length);

//step 2.7 delete giraffe from the array

favoriteAnimals.splice(3,1);

//step 2.8 again log your new array

console.log(favoriteAnimals);

//step 2.9

let a = favoriteAnimals.indexOf("meerkat");

//step 2.10

console.log("The item you are looking for is at index: "+a);