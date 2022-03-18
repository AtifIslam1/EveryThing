const doSomething = () => {
    console.log(`I'm also Coding JavaScript`);
};

console.log('first: ami first');
console.log('second: ami second');
setTimeout(doSomething, 5000);
setTimeout(function () {
    console.log('I am using Vs Code');
}, 4000);
setTimeout(() => {
    console.log('I am using Fira Code as default theme for vs Code');
}, 3000);
console.log('third: ami third');
console.log('fourth: ami fourth');