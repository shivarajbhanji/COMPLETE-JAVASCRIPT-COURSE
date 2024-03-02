const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);

console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty array and fill
// whenever we just mention one element using Array() we get empty elements of that size
const x = new Array(7);
// [ <7 empty items> ]
console.log(x);
// since it is empty we might think of calling map method but it won't work
// fills array with 1 at all places
//x.fill(1);
// fills array with 1 at index 3, 4 excluding 5
x.fill(1, 3, 5);
// [ <3 empty items>, 1, 1, <2 empty items> ]
console.log(x);

// It overwrites the arr
arr.fill(23, 2, 6);

// Array.from
const y = Array.from({length:7}, () => 1);
console.log(y);

// since we don't need current element so we use _ to skip
const z = Array.from({length:7}, (_, i) => i+1);
console.log(z);

// 100 random dice rolls
const rolls = Array.from({length:100}, () => Math.floor(Math.random()*6 + 1));
console.log(rolls);

// Initially Array.from was introdued to create array from array like structures. Since, most array fns were supported to them
// For example in our bankist app imagine we don't have movements array
// To calculate sum of movements we need to convert them to array
// This won't work here, we need to add it to script.js and attach to some event handler
// const movements_UI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     (el) => Number(el.replace('€',''))
// );

// Here after we get elements we need to again map by removing euro sign and converting to number
// so Array.from is handy here
// const movementsUI2 = [...document.querySelectorAll('.movements__value')];