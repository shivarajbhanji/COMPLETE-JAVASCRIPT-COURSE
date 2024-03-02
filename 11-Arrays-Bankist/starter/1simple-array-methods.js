let arr = ['a', 'b', 'c', 'd', 'e'];
// start idx 2 and it returns new array values from idx 2 till end
console.log(arr.slice(2));
// 2 - (4-1) => 2 - 3
console.log(arr.slice(2,4));
// last two elements of an array [d,e]
console.log(arr.slice(-2));
// last element
console.log(arr.slice(-1));

// start from idx 1 and extract everything except the last 2 elements
console.log(arr.slice(1,-2));

// create a shallow copy of an array
console.log(arr.slice());
// alternative
// console.log([...arr]);

// SPLICE METHOD
// It is similar to slice but the major difference is after extracting the array elements it mutates the original array by let going the extracted elements
arr.splice(-1);
// last element is removed
console.log(arr);
// first parameter is the start idx and second is the no of elements we want to remove
arr.splice(1,2);

arr = ['a', 'b', 'c', 'd', 'e']
arr2 = ['j', 'i', 'h', 'g', 'f'];
// reverse method mutates the original array
arr2.reverse();
console.log(arr2);

// CONCAT
// doesn't mutates the array which calls the method
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(arr2.join('-'));