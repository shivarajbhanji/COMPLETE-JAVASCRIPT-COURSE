console.log(Math.sqrt(25));
// using exponentiation operator
console.log(25 ** (1/2));
// cube root
console.log(8 ** (1/3));

// 23
console.log(Math.max(10, 14, 18, 19, 23));
// 23. It does type coersion
console.log(Math.max(10, 14, 18, 19, '23'));
// Nan. It doesn't do parsing
console.log(Math.max(10, 14, 18, 19, '23px'));
// 10
console.log(Math.min(10, 14, 18, 19, '23'));

// calculate radius 
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log(Math.trunc(Math.random()*6 + 1));

const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
// 0..1
// then we multiply with (max - min)
// we get 0..(max-min)
// we add +1 to include (max-min)
// to get min..max add min
// 0...max-min+min     min....(max-min+min)  => min...max  

console.log(randomInt(10, 20));

// Rounding int
// trunc just removes fractions
//23
console.log(Math.trunc(23.33));
// round returns the nearest integer
//23
console.log(Math.round(23.3));
//24
console.log(Math.round(23.9));
//24
console.log(Math.ceil(23.4));
//23
console.log(Math.floor(23.3));
//23
console.log(Math.floor(23.9));
//It can also do type coersion
console.log(Math.floor('23.5'));

// Rounding decimals
// toFixed returns string
// 3
console.log((2.7).toFixed(0));
//2.700
console.log((2.7).toFixed(3));
//2.5 Here it converts the result from str to number
console.log(+(2.345).toFixed(2));