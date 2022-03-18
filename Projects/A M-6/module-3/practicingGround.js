 
// < --------Use This As a REVISION! ----------> //

let number = 0;
const name = 'Atif';


const Me = `
first name: Al-Amin
middle name: Islam
last name: Atif
nickname: Atif
`;
// console.log(Me);

const divide_5 = num => num / 5;
// console.log(divide_5(5));

const multiplyAfterAdd = (num1, num2) => {
    const add1 = num1 + 2;
    const add2 = num2 + 2;
    const product = add1 * add2;
    return product
};
// console.log(multiplyAfterAdd(23, 43));


const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(20, 20, 20));

const numbers = [9, 7, 5, 2, 40, 10, 3, 29, 30, 35];
const multiplyBy5 = numbers.map(number => number * 5);
// console.log(multiplyBy5);

const oddNums = numbers.filter(num => {
    if (num % 2 == 1) {
        return num;
    }
});
// console.log(oddNums);

const products = [
    { name: 'iphoneX', version: 'none', price: 780 },
    { name: 'iphone11', version: 'Pro', price: 880 },
    { name: 'iphone11', version: 'Pro Max', price: 1080 },
    { name: 'iphone12', version: 'Pro', price: 920 },
    { name: 'iphone12', version: 'Pro Max', price: 1280 },
    { name: 'iphoneXs', version: 'Max', price: 820 },
    { name: 'iphoneXr', version: 'none', price: 720 }
];

const product = { name: 'iphoneXr', version: 'none', price: 720 };

const { price } = product;

const price_1000 = products.find(pro => pro.price > 1000);
// console.log(price_1000);
// console.log(price);

const nums = [23, 34, 45, 56, 77];
const [first, second, third] = nums;
// console.log(third);

const sum = (num1 = 0, num2 = 0, num3 = 2) => num1 + num2 + num3;
// console.log(sum(23, 23));