
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//      const element = numbers[i];
//      sum = sum + element;
// }
// console.log(sum);

function arrayTotal(number) {
     let sum = 0;
     for (let i = 0; i < number.length; i++) {
          const element = number[i];
          sum = sum + element;
     }
     return sum;
}
let numbers = [44, 23, 34, 32, 54, 5, 78];
const total = arrayTotal(numbers);
console.log(total);