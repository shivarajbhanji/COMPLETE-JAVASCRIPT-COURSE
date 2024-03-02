/*const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};
*/

// converting above function to arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);
const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Jonas');