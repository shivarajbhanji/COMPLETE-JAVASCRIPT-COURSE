// In js number is internally represented as floating point
// true
console.log(23 === 23.0);
// numbers are stored in 64 base2 format. It means they only compose of zeros and ones
// Base 10 => 0-9
// Base 2 => 0-1
// There are certain no's in js which are hard to represent. For ex 0.1. It is represented as infinite fractions
console.log(0.1 + 0.2);
// false
console.log(0.1 + 0.2 === 0.3);

// convert str to no
console.log(Number('23'));
// alternative way
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px'));
// For this to work the first argument must start with a number, blank spaces are allowed, sec arg is radix. By def it is base 10
// 30
console.log(Number.parseInt('30px', 10));
// NaN(Not a Number)
console.log(Number.parseInt('e13'));

// 2
console.log(Number.parseInt('2.5rem', 10));
// 2.5
console.log(Number.parseFloat('2.5rem', 10));
// 2.5
console.log(Number.parseFloat('    2.5rem', 10));


// check if value is NaN
// since 20 is a no so it returns false
console.log(Number.isNaN(20));
// false
console.log(Number.isNaN('20'));
// false
console.log(Number.isNaN(+'20'));
// true
console.log(Number.isNaN(+'20p'));
// Infinity
console.log(23 / 0);

// Checking if value is number
// true
console.log(Number.isFinite(20));
// false, since it is str so it is considered as Nan. So isFinite is better way to check if a value is number
console.log(Number.isFinite('20'));
// false
console.log(Number.isFinite(+'20x'));
// flase
console.log(Number.isFinite(23 / 0));

// true
console.log(Number.isInteger(20));
// true
console.log(Number.isInteger(20.0));
// false
console.log(Number.isInteger(23 / 0));
