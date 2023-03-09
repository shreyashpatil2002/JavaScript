let a = 1, b = 2, c = 3;

console.log("one plus average of a and b is", 1 + (a+b) / 2);
console.log("one plus average of b and c is", 1 + (b+c) / 2);
console.log("one plus average of a and c is", 1 + (a+c) / 2);

// wether doing this we can use the function for it

function onePlusAvg(a, b){
    return 1 + (a+b) / 2;
}

// another method of creating a funtion is arrow function
const done = ()=> {
    console.log("Done");  // change in here changes the all things
}

console.log("one plus average of a and b is", onePlusAvg(a, b));
done();
console.log("one plus average of b and c is", onePlusAvg(b, c));
done();
console.log("one plus average of a and c is", onePlusAvg(a, c));
done();