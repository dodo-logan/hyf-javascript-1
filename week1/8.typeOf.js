'use strict';

//declare four variables and assign them different types.
let l = true;
let country= 'Burundi';
let age= 25;
let programmer = ['dream'];

//for each variable write a console.log statement that logs the value.

console.log('The first letter of logan is l:' +l);
console.log('My country of origin is:' +country);
console.log('My age is:'+age);
console.log('To be a programmer is my:' +programmer);

// now write a console.log statement wherein you first explain in words what you think the type of the variables is.


console.log('the type of my variable l is a boolean ');
console.log('the type of my variable country is a string');
console.log('the type of my variable age is a number');
console.log('the type of my variable programmer is an array');

// now compare the types of your different variables with one another

if (typeof l === typeof country, typeof country === age, typeof age === typeof programmer){
    console.log('SAME TYPE')

    }
    else{
    console.log('NOT SAME TYPE');
}
