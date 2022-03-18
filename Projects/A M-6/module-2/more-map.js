const friends = ['tom Hanks', 'tom cruise', 'tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);

const products = [
    { name: 'Water Bottle', price: 80, color: 'yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'black' },
    { name: 'Smart Watch', price: 3000, color: 'black' },
    { name: 'sticky Notes', price: 300, color: 'pink' },
    { name: 'Water Glass', price: 30, color: 'white' }
];
const productName = products.map(pro => pro.name);
const productPrices = products.map(pro => pro.price);
const blacks = products.filter(pro => pro.color == 'black');
console.log(blacks);
// products.forEach(pro => console.log(pro))
// console.log(productName, productPrices);
