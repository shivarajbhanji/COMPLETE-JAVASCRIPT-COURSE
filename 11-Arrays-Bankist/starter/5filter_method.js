const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// filter method is like map, it too returns a new array by iterating over an array but elements are added to a new array only if certain condition holds true
const deposits = movements.filter(function(mov) {
    return mov>0;
});
console.log(deposits);
const withdrawals = movements.filter(mov => mov<0);
console.log(withdrawals);