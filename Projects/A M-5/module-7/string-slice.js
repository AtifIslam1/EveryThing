const anthem = 'Amar sonar Bangla Ami Tomai Valobashi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');

// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
// console.log(anotherAnotherPart);

const first = 'Amader';
const second = 'Dhaka';
const third = 'City';

const fullString = first.concat(second).concat(third);
// console.log(fullString);



const Given = ['Al-Amin', 'Islam', 'Atif'];
const allTogeather = Given.join(' ');
console.log(allTogeather);