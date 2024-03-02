const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const uppperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpppercase(), ...others].join(' ');
}

// Higher-order function
const transformer = function(str, fn) {
    console.log(`orginal string: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
transformer('Javascript is the best!', oneWord);

const high5 = function() {
    console.log('👋');
}

document.body.addEventListener('click', high5);