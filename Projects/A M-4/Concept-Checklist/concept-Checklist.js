// 1. Write 3 variables(string, number, boolean)------ Done!

var number = 60;
var string = "Atif";
var boolean = true;

// console.log(typeof number);
// console.log(typeof string);
// console.log(typeof boolean);


// =======================================================

// 2. 2 variables using (let, const)-------- Done!

let multiplication = 7;
const name = "Atif";

// =======================================================

// 3. simple Math operations() (+, -, *, /) ------ Done!

var num1 = 50;
var num2 = 20;

var sum = num1 + num2;
var substract = num1 - num2;
var multiply = num1 * num2;
var division = num1 / num2;

// console.log(sum);
// console.log(substract);
// console.log(multiply);
// console.log(division);



// =======================================================


// 4. compare 2 variables() ------ Done!

var num1 = 50;
var num2 = 20;

// if (num1 < num2) {
//      console.log("num1 is smaller");
// }
// else if (num1 > num2) {
//      console.log("num1 is bigger");
// }
// else if (num1 == num2) {
//      console.log("both of them are equal");
// }
// else if(num1 != num2){
//      console.log("They are not");
// }


// =======================================================

// 5. Two Conditions--  case-1: Fulfill both conditions -- case-2: Fulfill atleast one condition ---- Done!

const house = false;
const job = true;
const handsome = true;

// if (house && job == true) {
//      console.log("U are Well growned as a Man");
// }
// else if (job || handsome && house == true) {
//      console.log("u'll grow");
// }
// else {
//      console.log("U are ok but not enough..");
// }



// =======================================================


// 6. if-else, make the grading system-------- Done!

const marks = 32;

// if (marks >= 80) {
//      console.log("your grade: A+");
// }

// else if (marks >= 70) {
//      console.log("your grade: A");
// }
// else if (marks >= 60) {
//      console.log("your grade: A-");
// }
// else if (marks >= 50) {
//      console.log("your grade: B");
// }
// else if (marks >= 40) {
//      console.log("your grade: C");
// }
// else if (marks >= 33) {
//      console.log("your grade: D");
// }
// else {
//      console.log("your grade: F");
// }



// =======================================================

// 7.  Display all odd numbers from 7 to 19------ Done!

// for (i = 7; i <= 19; i++) {
//      if (i % 2 == 0) {
//           console.log(i);
//      }
// }

// =======================================================

// 8. declare an array. --- Done///// find the numbers of element in array. --- Done /////   //   update or replace 3rd positioned element. ---- Done!~ add or remove elements. ---- Done!~  check weather a specific value exists in array. ---- Done!~ 

var Names = ['Adnan', 'Tahsan', 'Nafi', 'Farhan', 'Mahadi', 'Sakib', 'Arif', 'Fahim'];

var index = Names.indexOf('Nafi')
if (index != -1) {
     Names[index] = 'Atif';
}
// Names.pop();
// Names.push('Rahat');
// console.log(Names);
// console.log(Names.indexOf('Nafi'));

// =======================================================


// 9. use any for loop to display every elements of an array. ----- Done!

const phones = ['samsung', 'iPhone', 'HTC', 'Xiomi', 'Redmi', 'Vivo'];
for (i = 0; i < phones.length; i++) {
     // console.log(phones[i]);
}

// =======================================================

// 10. you have an array of variant numbers. Now display only numbers that are bigger than 80. ---- Done!

const Numbers = [20, 40, 60, 34, 65, 79, 200, 150, 120, 82, 42, 78, 92, 84];

for (i = 0; i < Numbers.length; i++) {
     if (Numbers[i] > 80) {
          // console.log(Numbers[i]);
     }
}

// =======================================================

// 11. write a function where you take 3 numbers and return the multiplication of three numbers ----- Done!


function GetProduct(n1, n2, n3) {
     const product = n1 * n2 * n3;
     return product;
}
var value1 = 4;
var value2 = 1;
var value3 = 5;
// var getValue = GetProduct(value1, value2, value3);
// console.log(getValue);





// 12. declare an object and change any property of that object


var mobile = {
     color: 'Rose Pink',
     price: 32000,
     screenSize: 4,
     storage: '16gb'
}

mobile.color = 'Ocean Blue';
mobile.price = 16000;
mobile.screenSize = 6;
mobile.storage = '32gb';
console.log(mobile.color);
console.log(mobile.price);
console.log(mobile.screenSize);
console.log(mobile.storage);
console.log(mobile);



