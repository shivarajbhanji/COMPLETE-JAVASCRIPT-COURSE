const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat in ${this.airline} flight ${this.iataCode}${flightNum}`);
    }
};

lufthansa.book(239, 'jonas');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};

const book = lufthansa.book;
// If we want to call the function multiple time then we need to pass the object name those many times.
// To solve this we can use bind method
// It sets the this keyword to the obj we pass and returns the function

const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
// Here we are binding this to eurowings and setting the flightno to 23
const bookEW23 = book.bind(eurowings, 23);
// so while calling the fn we just need to pass the remaining args
bookEW23('John');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

// this won't work bcz when we call the callback fn this keyword will be set to button element not to lufthansa
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// we use bind to resolve this issue since bind returns a function but with call it sets the this and calls the fn
//document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application --  here we don't care about what is set to this keyword
const addTax = (rate, value) => value + value*rate;
// we have to fix the rate for some country
const addVat = addTax.bind(null, 0.23);
console.log(addVat(200));

// above soln using returning fn within a fn
const addTaxRate = rate => value => value + value * rate;
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(300));
