// Type conversion is the process of converting from one data type to another explicitly
// For ex if we take form input from user and want to do some calculations. Since data is in string form, we need to convert it into integer
const inputYear = "1981";
// 198118
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

// Whenever an operation related to Numbers fails to produce a number, we get Nan
// Type of nan is number
// NaN
console.log(Number("Jonas"));
// number
console.log(typeof NaN);
console.log(String(23));

// Type coercion: Js does it automatically
// Whenever + is performed with string and a number, js converts number into string and performs concatenation of strings
console.log("I'm " + 23 + " Years old!");
// In case of - operator it is the opposite effect. Js converts strings into number 
console.log('23' - 10 - '3');
// Whereas + converts number into string
console.log('23' + '10' + 3);
// For mul string is converted into number
console.log('23' * '4');
// same is the case for div as well
console.log('23' / '2');
