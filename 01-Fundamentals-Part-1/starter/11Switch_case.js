const day = 'monday';

// If we want to repeatatively compare the same thing then go for switch case
// It follows strict equality
// break is necessay or else eveything after first matching comparison gets executed until the break is found. If not found then even the default will also be executed
switch (day) {
    case 'monday': 
        console.log('solve dsa');
        break;
    case 'tuesday':
        console.log('watch theory lectures');
        break;
    case 'wednesday':
        console.log('watch movies');
        break;
    default:
        console.log('Invalid choice');
}
