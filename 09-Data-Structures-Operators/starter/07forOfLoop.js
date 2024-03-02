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

  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  for(const item of menu) {
    console.log(item);
  }

  // to get index as well
  // menu.entries returns array of elements having idx and item [ [0, 'pizza'] [1,'sandwich'].....]
  for(const [i, el] of menu.entries()) {
    console.log(`${i+1}: ${el}`)
  }