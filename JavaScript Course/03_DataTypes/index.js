//primitive data types in javaScript
// shortcut nn bb ss u
let a = null; //  null
let b = 10; // number
let c = true; // boolean
let d = BigInt('336'); // bigint
let e = 'hello, world'; // string
let f = Symbol('this is a symbol'); // symbol
let g = undefined; // undefined

console.log(a, b, c, d, e, f, g);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

// objects in javaScript

const items = {
    'first' : 'apple',
    'second' : 'guava',
    'third' : 'mango'
}

console.log(items)
console.log("the first item is", items['first']);
console.log("the first item is", items.third);