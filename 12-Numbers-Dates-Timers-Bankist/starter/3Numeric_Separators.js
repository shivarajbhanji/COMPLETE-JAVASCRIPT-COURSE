// It is difficult to read large numbers
// so we use number separator
const diameter = 233_897_9000;
// 2338979000
console.log(diameter);

// we can use it only between digits
// 3._14 error
// _3.14 error
// console.log(Number('3.1_41')) error. It doesn't work with string