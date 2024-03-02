const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 12345
}

// flightNum is a copy
// passenger stores reference of original obj
const checkIn = function(flightNum, passenger) {
    // doesn't change the value of flight at the top
    flightNum = 'LH999';
    // changes takes place in the original obj 
    passenger.name = 'Mr. ' + passenger.name; 
    if(passenger.passport === 12345) {
        alert('Checked In');
    }
    else {
        alert('Wrong Passport');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);