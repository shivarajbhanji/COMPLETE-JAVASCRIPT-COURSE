const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulator, current value, index, entire array
// in each iteration we add current value to accumulator
// 1st param is callback fn and 2nd param is initial value of accumulator
const balance = movements.reduce(function(acc, curr, i, arr) {
    return acc + curr;
}, 0);
console.log(balance);

// we can also use reduce to get a single value out of an iterable
const maxValue = movements.reduce((acc, mov)=> mov>acc ? mov : acc, movements[0]);
console.log(maxValue);