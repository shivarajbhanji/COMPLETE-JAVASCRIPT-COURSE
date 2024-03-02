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
// 1. Destructuring
//Rest operator uses the same syntax as that of spread but does the opposite. Spread expands individual elements of array whereas rest collects multiple elements and condense them into array
// Spread bcz it is on right side of =
const arr = [1,2,...[3,4,5]]
// Rest bcz it is on left side of =
const [a, b, ...others] = [1,2,3,4,5];

// mainMenu: ['Pizza', 'Pasta', 'Risotto'] skips pasta 
// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// others will be ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// Note: Rest must always be at last
const [pizza, , risotto, ...otherMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ] --- output
console.log(pizza, risotto, otherMenu);

// objects
const { sat, ...weekdays } = restaurant.openingHours;
// { open: 0, close: 24 } { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } } ----- output
console.log(sat, weekdays);

//2. Functions
// calling function with arbitrary no of args
const add = function(...numbers) {
    let sum = 0;
    for(let i=0;i<numbers.length;i++) {
        sum++;
    }
    console.log(sum);
};

add(2, 3);
add(5, 3, 5, 2);
const x = [1, 3, 4, 5];
// spread operation
add(...x);