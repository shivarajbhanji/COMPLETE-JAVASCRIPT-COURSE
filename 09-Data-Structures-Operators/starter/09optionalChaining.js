const openingHours = {
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
  }
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced object literals
    openingHours,
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
      console.log(
        `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
      );
    },
  
    orderPasta(ing1, ing2, ing3) {
      console.log(
        `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
      );
    },
  
    orderPizza(mainIngredient, ...otherIngredients) {
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  };

  // checking if a property exists if yes then logging it
  if(restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
  }
  // throws error bcz we are trying to access undefined.open which throws typeError
  //console.log(restaurant.openingHours.mon.open);
  
  // With opitonal chaining it returns undefined if a property doesn't exist and won't compute further
  // output undefined
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);
  const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  for(const day of weekdays) {
    // Since the open timing on sat is 0 so even though the property exists it stores closed
    //const open = restaurant.openingHours[day]?.open || 'closed';
    // solution is nullish operator
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    open!=='closed'?console.log(`on ${day} opens at ${open}`) : console.log(`closed on ${day}`);
  }

  // Methods
  console.log(restaurant.order?.(0,1)??'method does not exists');
  console.log(restaurant.orderRisotta?.(0,1)??'method does not exists');

  // Arrays
  const users = [{name: 'Shivaraj', email: 'abc@gmail.com'}];
  // without optional chaining
  /*
  if(users.length>0) {
    console.log(users[0].name);
  }
  */
  // using optional chaining
  console.log(users[0]?.name ?? 'user array is empty');