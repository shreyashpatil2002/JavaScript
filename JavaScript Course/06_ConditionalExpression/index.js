'use strict';
console.log("Checking the age for driving");

let age = 25;
// if
if(age > 18){
    console.log("You can drive");
}

// if-else
if(age < 10) {
    console.log("Your age is less than 10")
}
else {
    console.log("your age is above 10");
}

// nested if-else
if(age < 10) {
    console.log("You are child");
}
else if(age > 10 && age < 20) {
    console.log("You are teenager")
}
else {
    console.log("You are adult");
}


console.log("\nSwitch case in js");

let choice = 2;

switch(choice) {
    case 1: console.log("the choice is one");
        break;

    case 2: console.log("the choice is two");
        break;

    case 3: console.log("the choice is three");
        break;
        
    case 4: console.log("the choice is four");
        break;

    case 5: console.log("the choice is five");
        break;
}
