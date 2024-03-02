const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
}

// Instead of using set to populate data into map we can add it directly into arrays
const question = new Map([
    ['question', 'Is javascript compiled language or interpreted?'],
    [1, 'compiled'],
    [2, 'interpreted'],
    [3, 'none'],
    ['correct', 2],
    [true, 'correct ans!'],
    [false, 'wrong ans!']
]);
console.log(question);
// we can convert object into map since Object.entries(<obj_name>) gives the similar output as above question map
// [
//     [ 'thu', { open: 12, close: 22 } ],
//     [ 'fri', { open: 11, close: 23 } ],
//     [ 'sat', { open: 0, close: 24 } ]
//   ]
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// quiz
console.log(question.get('question'));
for(const [key, value] of question) {
    if(typeof(key) == Number) {
        console.log(`option ${key}: ${value}`);
    }
}
const option = 2;
console.log(question.get(question.get('correct') == option));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);