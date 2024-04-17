// This must be the first statement, comments are allowed
// This helps to fix hard to find bugs before hand
// bcz it forbids us to do certain things
// Also it creates visible errors in developer's console
'use strict';
let hasDriversLicense = false;
const passTest = true;
if(passTest) {
    // This var is not defined, so with strict mode activated it throws Reference error
    //hasDriverLicense = true;
    hasDriversLicense = true;
}
if(hasDriversLicense) console.log('I can drive');
// There are some reserved words for future, so with strict mode we can avoid using those vars
// const interface = 'Audio';
// const private = 534;