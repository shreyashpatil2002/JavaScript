// some examples of expressions
'this is possible in javascript'
true
454

// oprators in javascript

console.log("Arithmatic oprators in JavaScript");
let a = 10, b = 5;
console.log("a + b :", (a + b));
console.log("a - b :", (a - b));
console.log("a * b :", (a * b));
console.log("a / b :", (a / b));
console.log("a % b :", (a % b));
console.log("a ** b :", (a ** b));

let num = 10;
console.log("the number is ", num)
console.log("the post increment is ", num++)
console.log("the number is ", num)
console.log("the post decrement is ", num--)
console.log("the number is ", num)
console.log("the pre increment is ", ++num)
console.log("the number is ", num)
console.log("the pre decrement is ", --num)
console.log("the number is ", num)


console.log("\n\nAssignment oprators in JavaScript");
let _a = 16;
console.log(_a);
_a += 5; //same as _a = _a + 5
console.log(_a);
_a -= 5; //same as _a = _a - 5
console.log(_a);
_a *= 5; //same as _a = _a * 5
console.log(_a);
_a /= 5; //same as _a = _a / 5
console.log(_a);
_a %= 5; //same as _a = _a % 5
console.log(_a);
_a **= 5; //same as _a = _a ** 5
console.log(_a);


console.log("\n\nComparision oprators in JavaScript");
let comp1 = 6;
let comp2 = '5';
console.log("comp1 == comp2", comp1 == comp2)
console.log("comp1 != comp2", comp1 != comp2)
console.log("comp1 < comp2", comp1 < comp2)
console.log("comp1 > comp2", comp1 > comp2)
console.log("comp1 <= comp2", comp1 <= comp2)
console.log("comp1 >= comp2", comp1 >= comp2)

console.log("comp1 === comp2", comp1 === comp2)
console.log("comp1 !== comp2", comp1 !== comp2)
// === it also checks the data type of variable


console.log("\n\nLogical oprators in JavaScript");
let x = 5;
let y = 6;

console.log(x < y && x == 5);
console.log(x < y || x == 5);

console.log(!(x < y || x == 5));
console.log(!false);
console.log(!true);

// ternary oprator
console.log("\n\nternary oprator");
let five = 5;
let six = 6;
five < six ? console.log("true") : console.log("false")
five == six ? console.log("true") : console.log("false")