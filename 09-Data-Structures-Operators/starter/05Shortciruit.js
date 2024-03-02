const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex, mainIndex) {
      //returing multiple values
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
    // No need to remember the order 
    orderDelivery: function(obj) {
        const {starterIndex = 0, mainIndex = 0, address, time = '20:00'} = obj;
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${this.address}`)
    }
  };

console.log('-----------OR------------');
//3
console.log(3 || 'Jonas');
//Jonas
console.log('' || 'Jonas');
//true
console.log(true || 0);
//null
console.log(undefined || null);
//Hello
console.log(undefined || 0 || '' || undefined || 'Hello' || 23);

// No need to use ternary operator const guests = restaurant.numGuests ? restaurant.numGuests : 20;
// But this approach will fail if it contains 0 as the value
const guests = restaurant.numGuests || 20;

console.log('-----------AND------------');
// It breaks right at the first check and returns that value
console.log(0 && 'JONAS');
//JONAS
console.log(true && 'JONAS');
//null
console.log('Hello' && 23 && null && 'JONAS');