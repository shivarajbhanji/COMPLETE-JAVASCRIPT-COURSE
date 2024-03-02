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

// In order to destructure object we need to match the exact names of the properties mentioned in the object
const {name, openingHours, categories} = restaurant;

// If we want to create customized names 
const {
    name: restaurantName,
    openingHours: hours,
    categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

// since menu property is unavailable it is empty array but not in case of starterMenu since this property is already available
const {menu = [], starterMenu: starters = []} = restaurant;

// Nested Objects
// fri = { open: 11, close: 23 }
//const {fri} = openingHours;
// to get open and close separately
const {
    fri: {open: o,close: c}
} = openingHours;

restaurant.orderDelivery({
    time: '22:30',
    address: 'pune',
    mainIndex: 2,
    starterIndex: 2
})