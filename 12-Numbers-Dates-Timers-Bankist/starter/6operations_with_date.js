const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// 20
// two timestamps will be subtracted then divided with 1000 * 60 * 60 * 24 to convert it into days passed
console.log(calcDaysPassed(new Date(2024, 3, 4), new Date(2024, 3, 24)));
