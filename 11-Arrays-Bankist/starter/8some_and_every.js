const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// EQUALITY
console.log(movements.includes(-130));

// CONDITION
// It is similar to includes, but here we can check wrt condition
// Returns true if condition holds true else returns false
console.log(movements.some(mov => mov>1500));

// EVERY
// it is similar to some method but here it returns true only if all the elements satisfies a particular condition
console.log(movements.every(mov => mov>0));

// separate callbacks
// we can reuse these and call it whereever req
const deposit = mov => mov>0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));