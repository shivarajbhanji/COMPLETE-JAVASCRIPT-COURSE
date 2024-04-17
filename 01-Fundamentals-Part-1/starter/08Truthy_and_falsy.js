// Falsy values : These are the values which becomes false when converted into boolean
// There are 5 falsy values in js : 0, '', undefined, null, NaN
// false
console.log(Boolean(0));
// false
console.log(Boolean(undefined));
// true
console.log(Boolean('Jonas'));
// true : empty object
console.log(Boolean({}));
// false
console.log(Boolean(''));

const money = 100;
// In case of logical context js implicitly converts anything to boolean and it follows truthy and falsy values
if(money) {
    console.log("Don't spend it all!");
}
else {
    console.log("You should get a job");
}

// We can also check if a var is defined or not
