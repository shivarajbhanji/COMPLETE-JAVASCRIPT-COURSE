const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings
// It sorts on original array
const owners = ["Jonas", "Zach", "Adam", "Mark"];
console.log(owners.sort());
console.log(owners);

// Number
// It doesn't sort bcz it treats it like strings
// so - is treated as first value then 1 then 2 and so on..
//console.log(movements.sort());
// If we return anything>0 then current value A is greater than B
// Here for ascending order we need B then A
// If we return anything < 0 then current value A is less than B
// Here we keep as is A then B
// For descending order we just need to change the return values
// Ascending
console.log(movements.sort((a, b) => {
    if(a>b) {
        return 1;
    }
    if(b>a) {
        return -1;;
    }
}));

// Descending
console.log(movements.sort((a, b) => {
    if(a>b) {
        return -1;
    }
    if(b>a) {
        return 1;;
    }
}));

// if a>b then return +ve
// if a<b then return -ve
// Ascending
console.log(movements.sort((a, b) => a - b));
// Descending
console.log(movements.sort((a, b) => b - a));
console.log(movements);