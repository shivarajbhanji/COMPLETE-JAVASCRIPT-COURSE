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

// we want the same book function for this obj as well
const book = lufthansa.book;
// doesn't work bcz this keyword here points to undefined
//book(23, 'sarah williams');

// we can use call method
// since function is like an object, since object can have methods so does functions
// first arg is the name of the object so that this will point to that
book.call(eurowings, 23, 'sarah williams');
// instead of call method we can use apply 
// only difference is it takes the args after the obj name in array format
const flightDetails = [23, 'Rohan'];
book.apply(lufthansa, flightDetails);
// If we have data in array we can use call method instead of apply by using spread operator
//book.call(lufthansa, flightDetails);

