const fish = {
    id: 58,
    name: 'king Hilsha',
    price: 9000,
    phone: '01717555555',
    address: 'Chandpur',
    dress: 'silver'
};

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;

console.log(phone, price);
console.log(phone);
console.log(phone, price);
console.log(phone);
console.log(phone);

const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'Website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: {
                name1: 'JavaScript',
                name2: 'EchmaScript'
            }
        }
    }
};
// const work = company.web.work;
// const framework = company.web, framework;
const { work, framework } = company.web;
const { name } = company;
const { name1 } = company.web.tech.third;
const { first } = company.web.tech;
console.log(work, name, first);


// destructuring array
const [p, q] = [45, 37];
// console.log(p);