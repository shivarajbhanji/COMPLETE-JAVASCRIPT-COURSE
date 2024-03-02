const movements = [2000, -19999, 30000, -444, 8000];
// entries return array of array. Each element in an array contains an idx and element
for(const [i, movement] of movements.entries()) {
    if(movement>0) {
        console.log(`Movement ${i+1} You deposited ${movement}`);
    }
    else{
        console.log(`Movement ${i+1} You withdrew ${Math.abs(movement)}`);
    }
}

console.log('--------------------------------------------');
// foreach takes every element of an array and calls the callback fn
// first param is element for that iteration
// second param is idx
// Third is actual array we are looping
// Note continue and break doesn't work with foreach
movements.forEach(function(movement, index, array){
    if(movement>0) {
        console.log(`Movement ${index+1} You deposited ${movement}`);
    }
    else{
        console.log(`Movement ${index+1} You withdrew ${Math.abs(movement)}`);
    }
});

// foreach is also available on maps and sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
  ]);

currencies.forEach(function(value, key, map){
    console.log(`${key} ${value}`);
})

const currencyUnique = new Set(['USD','GBP', 'EUR', 'USD', 'INR']);
// It also returns value, key, set(entire set)
// since sets don't have key so it will be equal to value 
// To ommit the second param(key) we can use throwaway var _
currencyUnique.forEach(function(value, _, set){
    console.log(`${value}`);
})