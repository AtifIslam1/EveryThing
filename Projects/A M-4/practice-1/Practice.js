
// Done 

// 1. CelsiusToFarenhit 
// 2. FarenhitToCelsius 
// 3. Grade Calculation 
// 4. Simple Interest


// 1....done nicely

function CelsiusToFahrenheit(celsius) {
     var fahrenheit = (celsius * 9 / 5) + 32;
     return fahrenheit;
}

var OurCelsius = 2000;
var myFahrenheitIs = CelsiusToFahrenheit(OurCelsius);
console.log('Fahrenheit is =', myFahrenheitIs);




// 2.... done nicely
function FahrenheitToCelsius(fahrenheit) {
     var celsius = (fahrenheit - 32) * 5 / 9;
     return celsius;
}

var fahrenheithere = 3632;
var thenCelsius = FahrenheitToCelsius(fahrenheithere);
console.log('Celsius is = ', thenCelsius);


// 3.... After a Little hardWork, Done :)

function Grading(marks) {
     if (marks >= 80) {
          console.log("YOur Grade:", "A+");
     }
     else if (marks >= 70) {
          console.log("YOur Grade:", "A");
     }
     else if (marks >= 60) {
          console.log("YOur Grade:", "A-");
     }
     else if (marks >= 50) {
          console.log("YOur Grade:", "B");
     }
     else if (marks >= 40) {
          console.log("YOur Grade:", "C");
     }
     else if (marks >= 33) {
          console.log("YOur Grade:", "D");
     }
     else {
          console.log("YOur Grade:", "F");
     }
}

const ExamMarks = 92;
var GradeGiven = Grading(ExamMarks);


// 4.... Simple Interest....Done!

function Interesting(principal, year, rate) {
     let interestvalue = principal * year * (rate / 100);
     console.log('Interest value: ', interestvalue);
     let interest = principal + interestvalue;
     return interest;
}

var MyRate = 40;
var MyYear = 3;
var MyMoney = 200;
var GiveMeInterest = Interesting(MyMoney, MyYear, MyRate);
console.log('Money I will Get after', MyYear, 'years: ', GiveMeInterest);
