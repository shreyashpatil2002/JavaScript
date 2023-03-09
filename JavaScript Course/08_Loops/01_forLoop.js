/*------------------------------------------------------
    syntax of for loop :-

    for(intilization; condition; increment/decrement) {
        your code..
    }
----------------------------------------------------------*/

console.log("Multiplication table of 10");
let i = 0;
for(i = 10; i <= 100; i += 10){
    console.log(10 + " x " + i/10 + ' = ' +i);
}

console.log("\n\nMulitplication table from 2 to 20");
let num1, num2;
for(num1 = 2; num1 <= 20; num1++){ // loop starting from 2 to 20
    console.log("\n\nThe table of", num1);
    for(num2 = 1; num2 <= 10; num2++){ // loop starting from 1 to 10
        console.log(num1 + ' x ' + num2 + ' = ' + (num1*num2)); // multiplying both the numbers
    }
}


console.log("\n\nSum of 100 natural number");;
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;  
}
console.log("The sum of 100 natural numbers is", sum);

console.log("\n\nfactorial of 5");
let fact = 1;
for(let i = 1; i <= 5; i++){
    fact *= i;
}
console.log("the factorial of 5 is", fact);
