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
    },
    orderPizza: function(toppings1, toppings2, toppings3) {
        console.log(`Your Pizza is on the way and the selected toppings are ${toppings1}, ${toppings2} and ${toppings3}`)
    }
  };
const arr = [7, 8, 9];
//const newArr = [5, 6, arr[0], arr[1], arr[2]];
//spread operator: Takes the array and puts the contents as if we have done it manually
const newArr = [5, 6, ...arr];
console.log(newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];

const mainMenuCopy = [...restaurant.mainMenu];
// join 2 arrays main + starter
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// It works on all iterables: strings, maps, sets, arrays, Not objects
const str = 'Jonas';
const letters = [...str, ' ' , 'S.']
console.log(...str)
// But this won't work in template literal
// unexpected token '...' 
//console.log(`${...str} Schemadtmann`)
const toppings = ['onion', 'paneer', 'olive'];
// Instead of manually passing we can use spread operator
restaurant.orderPizza(...toppings);

// objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'shivaraj'};