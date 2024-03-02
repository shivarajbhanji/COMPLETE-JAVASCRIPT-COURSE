// Map is used to store data in key value pair. The diff bw map and obj is maps allows key to be any type whereas obj only allows string
const rest = new Map();
// key, value
rest.set('name', 'Classico Italino');
rest.set(1, 'Firenze Italy');
// It adds the data and then returns the map
// Map(3) {
//     'name' => 'Classico Italino',
//     1 => 'Firenze Italy',
//     2 => 'Lisbon, Portugal'
//   }
console.log(rest.set(2, 'Lisbon, Portugal'));
//since first set returns the map after adding data so we can chain it
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are Open')
    .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
rest.get(time>rest.get('open') && time<rest.get('close'));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();