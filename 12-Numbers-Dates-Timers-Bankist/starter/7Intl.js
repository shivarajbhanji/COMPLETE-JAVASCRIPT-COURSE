const num = 364879494.70;
console.log('US', new Intl.NumberFormat('en-US').format(num));
console.log('Browser', new Intl.NumberFormat(navigator.language).format(num));