const bookings = [];
// we can mention expression which uses previously set values as well while creating default parameters
const createBooking = function(flightNum, numPassengers=1, price=199 * numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
// we can't skip the arguments instead we can mention it as undefined
createBooking('LH123', undefined, 1000);
