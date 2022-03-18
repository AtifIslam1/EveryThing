// function Factorial(number) {
//      let fact = 1;
//      for (let i = 1; i <= number; i++) {
//           fact = fact * i;
//      }
//      return fact;
// }

// var myFactorial = Factorial(8);
// console.log('My FActortial Is: ', myFactorial);
// var herFactorial = Factorial(6);
// console.log('her Factorial is: ', herFactorial);



function getFactorial(number) {
     let factorial = 1;
     let i = number;
     while (i >= 1) {
          factorial = factorial * i;
          i--;
     }
     return factorial
}
const myFactorial = getFactorial(6);
console.log(myFactorial);