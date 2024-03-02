// split function
// It returns array of strings
const [firstName, lastName] = 'Shivaraj Bhanji'.split(' ');
console.log(firstName, lastName);
//Join
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
    const newName = name.toLowerCase().split(' ');
    for(let i=0; i<newName.length; i++) {
        const firstLetter = newName[i][0].toUpperCase();
        newName[i] = firstLetter + newName[i].slice(1);
    }
    return newName.join(' ');
}
console.log(capitalizeName('shivaraj rohit john'));

// Padding
const message = 'Go to gate 23';
// takes the message array and adds - at the beginning until the length is = 25
console.log(message.padStart(25, '-'));
// initially it pads with - until the length is 20 and then adds - at the end until overall length is 30
console.log('Jonas'.padStart(20, '-').padEnd(30, '-'));

const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(374982040));

// Repeat
const message2 = 'Bad weather... All flights are delayed...\n';
console.log(message2.repeat(5));