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

restaurant.numGuests = 0;
//const guests = restaurant.numGuests || 20;
// Nullish: only null or undefined (NOT 0 or '')
const guests = restaurant.numGuests ?? 20;

const rest1 = {
    name: 'Capri',
    numGuests: 20
};
const rest2 = {
    name: 'La Pinos',
    Owner: 'abc'
};

// check if an object has numGuest if not then set it to 10
// rest1.numGuests || = 10;
// rest2.numGuests || = 10;

// rest1.numGuests ?? = 10;
// rest2.numGuests ?? = 10;

