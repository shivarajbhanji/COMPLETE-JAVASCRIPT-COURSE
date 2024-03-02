const airline = 'TAP Air Portugal';
const plane = 'A320';
// accessing characters is similar to array
console.log(plane[0]);
console.log('B737'[1]);
//returns first index if found or else -1
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
// it returns sub string from 4-6, excluding 7
console.log(airline.slice(4, 7));
// extracting words
// since words are separated by ' ' so we can use that to find the indices of ' '
//'TAP Air Portugal'
console.log(airline.slice(0, airline.indexOf(' ')));
// To extract second word
console.log(airline.slice(airline.indexOf(' ')+1, airline.lastIndexOf(' ')));
// To extract last word
console.log(airline.slice(airline.lastIndexOf(' ')+1));
// begin from end and returns 2 characters
console.log(airline.slice(-2));
// begins from index 1 and until the last_index-1
//TAP Air Portugal
// output -- AP Air Portuga
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') {
        console.log('middle seat');
    }
    else {
        console.log('Not a middle seat');
    }
}
checkMiddleSeat('11B');
checkMiddleSeat('21D');