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
  };
  // destructuring an array means breaking complex objects and storing the required values into variables
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  
  // efficient way
  const [x, y, z] =  arr;
  
  //categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
  //first will be Italian and second will be Pizzeria
  //const [first, second] = restaurant.categories;
  // If we want to store Italian and Vegetarian
  let [main, ,secondary] = restaurant.categories;
  // Inorder to swap them we don't need to create temp obj
  [main, secondary] = [secondary, main]
  // getting multiple values from function using destructuring
  // garlic bread, pizza
  const [starter, mainCourse] = restaurant.order(2, 0);
  
  // nested destructuring
  const nested = [1, 2, [3,4]];
  
  // i=1 , j=[3,4]
  //const [i, ,j] = nested;
  // To get 3,4 in separate variables
  // i=1 ,j=3, k=4
  const [i, , [j, k]] = nested;
  
  // If we don't know the size of an array in runtime we can use default values
  //const [p, q , r] = [8, 9];
  // Here r will be undefined. To overcome this we can use default values
  const [p=1, q=1, r=1] = [8, 9];

  