let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof(true));
console.log(typeof(javascriptIsFun));
console.log(typeof(23));
console.log(typeof('Jonas'));
// Js is dynamically typed language which means we can change the type of the value a var is holding.
javascriptIsFun = 'Yes!';
console.log(typeof(javascriptIsFun));

// whenever we declare an empty var the value and type are undefined initially
let year;
console.log(year);
console.log(typeof(year));

// object. It is an error which is never corrected due to legacy reasons. It must be null
console.log(typeof(null));