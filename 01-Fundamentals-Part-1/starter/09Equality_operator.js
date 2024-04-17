const age = 18;
// Strict equality: Here both must be of same data types
if(age === 18) {
    console.log("strict");
    console.log("You just became an adult");
}
// Loose Equality: Here js does type coercion
const ageStr = '18';
if(ageStr == 18) {
    console.log("loose");
    console.log("You just became an adult");
}
// In case of !== use strict 