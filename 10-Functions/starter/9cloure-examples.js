// example 1
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a*2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b*2);
    }
}
g();
// even though g's execution context is popped out f has access to local vars of g due to closure
f();
// Reassigning h
h();
f();

// example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    // even though the callback fn is called after the last line of the boardPass fn is executed it has access to its local vars due to closure
    setTimeout(function() {
        console.log(`we are boarding all ${n} passengers`);
        console.log(`There are three groups each with ${perGroup} passengers`);
    }, wait*1000);

    console.log(`will start boarding in ${wait} seconds`);
}
boardPassengers(180, 3);