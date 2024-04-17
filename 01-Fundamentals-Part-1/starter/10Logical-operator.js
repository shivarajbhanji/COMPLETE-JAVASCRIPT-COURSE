const hasDriversLicense = true;
const hasGoodVision = false;
//Logical AND
console.log(hasDriversLicense && hasGoodVision);
//Logical OR
console.log(hasDriversLicense || hasGoodVision);
//NOT
console.log(!hasDriversLicense);

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is allowed to drive');
}
else {
    console.log('Someone else should drive');
}
