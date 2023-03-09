// Chapter3 - Q1

let marks = {
    'harry': 80,
    'rohan': 70,
    'aakash': 50
}

console.log(Object.keys(marks)); // this return the array of keys in object
console.log(Object.values(marks)); // this return the array of values in object

for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Chapter3 - Q2
for (let a in marks) {
    console.log("The marks of " + a + " is " + marks[a]);
}

// Chapter3 - Q3
let num = 10;
do {
    console.log('try again..');
} while (num != 10)

// Chapter3 - Q4
let avgOf5 = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}

console.log("The average is", avgOf5(10, 20, 30, 40, 50));