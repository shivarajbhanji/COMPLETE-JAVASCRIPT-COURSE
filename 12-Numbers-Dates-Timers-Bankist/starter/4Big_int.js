// In js numbers are stored in 64bits out of which 53 bits are used for storing no's and rest are used for storing sign and other details 
//9007199254740991
console.log(2 ** 53 - 1);
//9007199254740991
console.log(Number.MAX_SAFE_INTEGER);
// It fails to represent no's larger than this
// So we can use Bigint for that
console.log(48980000000000000000000000000484n);
console.log(BigInt(24443));

// operations
console.log(1000n + 1000n);
// we cannot mix BigInt with regular no's, to do so we must typecast it first.
console.log(183000n * BigInt(200));

// true
console.log(20n > 15);
// false, bcz 20n is BigInt and 20 is Number
console.log(20n === 20);
// true, bcz it does type coersion
console.log(20n == 20);

// Note Math operations doesn't work with BigInt
// Division
// If the result is in decimal, then it removes and returns nearest BigInt
// 3.333 ~ 3(O/P)
console.log(10n / 3n);