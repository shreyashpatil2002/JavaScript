// Difference between let, var and const

// if we use var for declaring a variable
console.log("USING VAR");
var a = 'one';
console.log("outside the block -->", a);

{
    // if we use another variable of name a in the block
    var a = 'two';
    // the value of a affect the value of a outside of the block
    console.log("inside the block -->", a);
}

console.log("outside the block -->", a);





// when we use let 
console.log("USING LET")
let user = 'rahul';
console.log("outside the block -->", user)

{
    let user = 'Mahesh';
    console.log("inside the block -->", user)
}

console.log("outside the block -->", user)


// using const

const theValueofPi = 3.14; 
/* this value can not changed throught out the code if we 
 assign new value it will through an error */