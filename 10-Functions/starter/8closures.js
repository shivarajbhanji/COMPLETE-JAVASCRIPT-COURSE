const secureBooking = function() {
    let passengerCount = 0;
    return function() {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
// closure makes it possible to access its parent variables even though it has returned a fn and it's execution context is popped out from a stack
booker();
booker();
booker();
// shows all the properties and their scopes that a closure maintains
console.dir(booker);