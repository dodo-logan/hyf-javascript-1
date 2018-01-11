'use strict';

// step 1.1 consider the following string

let myString = "hello,this,is,a,difficult,to,read,sentence";

// step 1.2 console.log it

console.log(myString);

// step 1.4 console.log the length 

console.log(myString.length);

//step 1.5 replace the commas by a white space
myString = myString.replace(/,/g, " ");

//step 1.6 console log it

console.log(myString);