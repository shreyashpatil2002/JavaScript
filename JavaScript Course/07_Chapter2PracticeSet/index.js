// Chapter 2 - Q1
let age = 15;
if(age > 10 && age < 20) {
    console.log("Your age is between 10 to 20 😀")
}
else {
    console.log("Your age is not special 🙁")
}

// Chapter 2 - Q2
let choice = 'banana';

switch(choice){
    case 'apple': console.log('the price of 🍎 is 100');
        break;
    case 'mango': console.log('the price of 🥭 is 120');
        break;
    case 'papaya': console.log('the price of 🍐 is 150');
        break;
    case 'guava': console.log('the price of 🍈 is 50');
        break;
    case 'banana': console.log('the price of 🍌 is 80');
        break;
    default: console.log("Nothing is selected..");
}

// Chapter2 - Q3
let num = 6;
if(num%2 == 0 && num%3 == 0){
    console.log("The number is divided by 2 and 3 both 😃");
}
else {
    console.log("The number is not divided by 2 and 3 😥");
}

// Chapter2 - Q4
let _age = 19;

console.log('You', _age > 18? 'can':'can not', 'drive', _age > 18? '🚗':'😥');
 
