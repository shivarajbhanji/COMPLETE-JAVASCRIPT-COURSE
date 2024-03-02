// Set is a collection of unique values i.e duplicates are not allowed
// Order of element in a set is irrelevant
// new Set(<iterable>)
const orderSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
])
//Set(3) { 'Pasta', 'Pizza', 'Risotto' }
console.log(orderSet);
//3
console.log(orderSet.size);
//true
console.log(orderSet.has('Pizza'));
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet);
for(const order of orderSet) {
    console.log(order);
}

// Example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
// unique letters in a string
console.log(new Set('shivaraj').size);