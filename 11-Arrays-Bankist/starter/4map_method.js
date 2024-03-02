const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

// It is similar to forEach but inside call back we need to write an expression which will be calculated and returned
// After the calculation it returns new array
const movementsUSD = movements.map(function(mov) {
    return mov * eurToUsd;
});
console.log(movementsUSD);

// It has access to all the paramaters like forEach
const movementsDescriptions = movements.map(
    (mov, i, arr) => `Movement ${i+1} `+ (mov>0 ? `You deposited ${mov}` : `You withdrew ${mov}`)
);
console.log(movementsDescriptions);