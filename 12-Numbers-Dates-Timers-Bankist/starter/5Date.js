const now = Date();
console.log(now);

// js can automatically parse the string and gives Date format. This method is not recommended
// If we use js created date string then it is fine
console.log(new Date('Mar 01 2024 10:14:25'));
console.log(new Date('Dec 25, 2015'));

// we can pass year, month, date, hrs, mins, sec and so on
// 2037-11-19T09:53:05.000Z
// In js months are zero indexed, so 10 is considered as nov
console.log(new Date(2037, 10, 19, 15, 23, 5));
// 2023-11-30T18:30:00.000Z
// Since there are only 30 days in nov, js implicitly handles this and makes it as 30 
console.log(new Date(2023, 10, 31));
// 2023-12-02T18:30:00.000Z
// If we try to pass the dates>=max+2 then it will consider next month and add the extra dates
console.log(new Date(2023, 10, 33));
// we can also pass into the date constructor function, the amount of milliseconds passed since the beginning of the Unix time, which is January 1, 197.
// 1970-01-01T00:00:00.000Z
console.log(new Date(0));
// 3 days after jan 1
// 1970-01-04T00:00:00.000Z
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// working with dates
const future = new Date(2037, 10, 19, 15, 23);
// 2037
console.log(future.getFullYear());
// 10
console.log(future.getMonth());
// 19
console.log(future.getDate());
// 4 day of the week
console.log(future.getDay());
// 15
console.log(future.getHours());
// 23
console.log(future.getMinutes());
// converting date obj into string
console.log(future.toString());

const timestamp = future.getTime();
// timestamp is the number of milliseconds passed since jan1 1970
// 2037-11-19T09:53:00.000Z
console.log(new Date(timestamp));

const curr_timestamp = Date.now();

// Like above get methods, similarly we have setters as well
future.setFullYear(2038);
// 2038-11-19T09:53:00.000Z
console.log(future);