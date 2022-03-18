const names = [
     'we are Java!',
     'intense JavaScript',
     'Learn javascript in 5 minutes',
     'When a language Was needed',
     'most used language JavaScript'
];

let output = [];
const searching = 'javascript';
for (const name of names){
     if(name.toLowerCase().includes(searching.toLowerCase())){
          output.push(name);
     }
}
// console.log(output);

const numbers = [3, 2, 9, 6, 4, 8, 3, 6, 7, 8, 96, 97, 93, 92];
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);