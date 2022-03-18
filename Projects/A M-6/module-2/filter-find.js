const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNum = numbers.filter(number => number > 20);
const smolNum = numbers.filter(number => number < 10);
// console.log(smolNum);

const products = [
    { name: 'Water Bottle', price: 80, color: 'yellow' },
    { name: 'Mobile Phone', price: 15000, color: 'black' },
    { name: 'Smart Watch', price: 3000, color: 'black' },
    { name: 'sticky Notes', price: 300, color: 'pink' },
    { name: 'Water Glass', price: 30, color: 'white' }
];
const expensive = products.filter(pro => pro.price > 100);
// console.log(expensive);
const blacks = products.filter(pro => pro.color == 'black');
// console.log(blacks);

const whites = products.find(pro => pro.color == 'white');
console.log(whites);