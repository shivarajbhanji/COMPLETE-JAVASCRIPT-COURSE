const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2024;
console.log(
  "I'm " + firstName + ", a " + (year - birthYear) + " Years old " + job + "!"
);
// To manage complex strings like this we can use template literals
console.log(`I'm ${firstName}, a ${year - birthYear} Years old ${job}!`);
// We can also use ` for regular strings
console.log(`Just a regular string`);
// we can use ` for multiline strings
console.log(`multiline 
string`);