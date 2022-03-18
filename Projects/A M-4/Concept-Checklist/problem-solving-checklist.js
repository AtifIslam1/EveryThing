// 1. Conversion
function inchToFeet(inches) {
     feet = inches * 0.0833333;
     return feet;
}

var input = 12;
var givemefeet = inchToFeet(input)
// console.log(givemefeet);

// 2. Conversion
function centimeterToMeter(centimeter) {
     meter = centimeter * 0.01;
     return meter;
}
var centiGiven = 68900;
var giveMeMeter = centimeterToMeter(centiGiven);
// console.log(giveMeMeter);

// 3. Calculation

// Calculate how many pages are required for publiishing these many books

const book1 = 100
const book2 = 200
const book3 = 300

function neededPages(b1Quantity, b2Quantity, b3Quantity) {
     const b1needs = b1Quantity * book1;
     const b2needs = b2Quantity * book2;
     const b3needs = b3Quantity * book3;
     const totalNeeded = b1needs + b2needs + b3needs;
     return totalNeeded;
}

var b1made = 7;
var b2made = 13;
var b3made = 5;
var pagesRequired = neededPages(b1made, b2made, b3made);
// console.log(pagesRequired);

// 4. find the most letters in friends array 

let bestOne = '';
function Friends(allfrnds) {
     for (let i = 0; i < allfrnds.length; i++) {
          if (allfrnds[i] > bestOne) {
               bestOne = allfrnds[i]
          }
     } return bestOne;
}

var myfrnds = ['Atif', 'Tahsan', 'Sakib',];
var bestfrnd = Friends(myfrnds);
console.log(bestfrnd);



// 5. Loop will stop when it finds a negetive value ---- Done!

// function onlypositive(allnumbers) {
//      let positive = [];
//      for (i = 0; i < allnumbers.length; i++) {
//           if (allnumbers[i] >= 0) {
//                positive.push(allnumbers[i]);
//           }
//           else {
//                break
//           }
//      } return positive
// }


// const nums = [23, 45, 76, 87, -87, -8, 24, 55];
// var positivenums = onlypositive(nums);
// console.log(positivenums);