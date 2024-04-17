const age = 23;
// we can use ternary operator in place of if else, provided it is small code of 1 line
// we can also use this to conditionally define a var
const Eligibility = age >= 18 ? 'eligible' : 'Not eligible';
// we can also use this in template literal, but we cannot use if else here since it is a statement not an expression
console.log(`You are ${age >= 18 ? 'eligible' : 'Not eligible'} for driving license`);