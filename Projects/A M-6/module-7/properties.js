const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);
// get all values
const values = Object.values(bottle);
// console.log(values);
// get both
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
// You cannot delete, neither insert a property after sealing, but can modify


// Object.freeze(bottle);
// You cannot customize or di anything after freezing

delete bottle.isCleaned;
console.log(bottle);