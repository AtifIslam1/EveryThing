// Java-Script Object Notation
// JSON
const user = { id: 11, name: 'Gorib Amir', job: 'Actor' };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranvir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhat',
        profession: 'Actor'
    },
    isExpesive: false
};
const shopStr = JSON.stringify(shop);
console.log(shop);
console.log(shopStr);
const converted = JSON.parse(shopStr);
console.log(converted);