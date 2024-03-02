const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passengerName = 'jOnAs';
// required Jonas
//step 1--change everything to lowercase
const lowerCasePassenger = passengerName.toLowerCase();
//step 2 -- capitaliza the first letter
const firstUpperCase = lowerCasePassenger[0].toUpperCase();
//step3 -- join both
const correctPassengerFormat = firstUpperCase + lowerCasePassenger.slice(1);
console.log(correctPassengerFormat);

// comparing emails
const email = 'shivaraj@gmail.com';
const loginEmail = '   SHIvaraj@gMail.com \n';
// normalize the loginEmail since the email is same 
const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
email===normalizedEmail ? console.log("Email match!") : console.log("Invalid Email");

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
// replaces word but only the first occurance
console.log(announcement.replace('door','gate'));
// To replace all the occurances
console.log(announcement.replaceAll('door', 'gate'));
// Boolens
const plane = 'Airbus A320neo';
console.log(plane.includes('Air'));
if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log(`${plane} part of the new airbus family`);
}

