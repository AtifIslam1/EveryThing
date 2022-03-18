// declare variable based on the name of an object property
const myObject = {
    x: 2,
    y: 50,
    z: 600,
    a: 25,
    b: 68
};
const { x, b } = myObject;
// console.log(b);

// destructuring array
const [p, q] = [45, 37];
// console.log(p);

const [best, notBest] = ['Ahnaf', 'Nafi'];
// console.log(best);

const { sky, color, money } = {
    sky: 'blue',
    soil: 'mati',
    color: 'red',
    money: '500'
};

// chaining!
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
            third: 'javaScript'
        }
    }
};
// console.log(company.web.tech.third);
console.log(company.backend?.tech.third);