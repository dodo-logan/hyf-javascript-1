'use strict';
//step 1
function sumArguments(a, b, c) {
    return a + b + c;
};
console.log(sumArguments(1, 2, 3));
//step 2
function colorCar(color) {
    return "a " + color + " car";
}
console.log(colorCar("red"));
//step3
const mySelf = {
    firstName: "dodo",
    lastName: "logan",
    age: 25
};
function mySelfPrint(obj1) {
    for (let key in obj1) {
        console.log(key + ": " + obj1[key]);
    }
}
mySelfPrint(mySelf);
//step4
function vehicleType(a, b) {
    if (b === 1) {
        console.log(a + " car");
    }
    else if (b === 2) {
        console.log(a + " motorbike");
    }
    else {
        console.log("try to call the function again and the seconde parameter 1 or 2");
    }
}
vehicleType("red", 2);
//step5
console.log(3 === 3);
//step6
function vehicle(color, b, age) {
    if (b === 1) {
        if (age <=1 ) {
            console.log("a " + color + " new car");
        }
        else {
            console.log("a " + color + " used car")
        }
    }
    else if (b === 2) {
        if (age <= 1) {
            console.log("a " + color + " new motorbike");
        }
        else {
            console.log("a " + color + " used motorbike")
        }
    }
    else {
        console.log("try to call the function agian and the seconde parameter 1 or 2");
    }
}
vehicle("red", 2, 5);
//step7
let vehiclesList = ["car","motorbike", "caravan", "bike"];
//step8
console.log("i get the third element by used arr[2];");
//step9
function vehicle1(color, age, listItem) {
    if (age <= 1) {
        console.log("a " + color + " new " + vehiclesList[listItem]);
    }
    else {
        console.log("a " + color + " used " + vehiclesList[listItem]);
    }
}
vehicle1("red", 1, 1);

//step10
let str = "Amazing Joe's Garage, we service ";
for (let i = 0; i < vehiclesList.length; i++) {
    str = str + vehiclesList[i] + "s, ";
}
//remove the space from the end of string
str = str.slice(0, -1);
//replace "," by "." in the end of string
str = str.replace(/.$/, ".");
//replace last comma by " and"
str = str.replace("caravans,", "caravans and");
console.log(str);
// step11 
console.log("if I added a new vehicle to the list ,the code will change.");
//step12
let obj2 = {};
//step13
let teachers = {
    teacher1: {
        name:"Dina"
    },
    teacher2: {
        name:"Unmesh"
    },
    teacher3: {
        name:"Jim"
    }
};
//step14
teachers["teacher1"]["language"] = "HTML";
teachers["teacher2"]["language"] = "Git";
teachers["teacher3"]["language"] = "JavaScript";
console.log(teachers);
//step15
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log("I think all the value return will be True");
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
//step16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log("i think that when you do o3 = o2 is different than o2 = o3");
console.log(" so ,the order of the assign does matter matter");
//step17
let bar = 42;
typeof typeof bar;
console.log("the output will be string");