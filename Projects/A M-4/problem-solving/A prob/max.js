const business = 450;
const minister = 350;
const Army = 600;



// if (business > minister) {
//      console.log("BusinessMan er Chele gets higher value");
// } else {
//      console.log("Minister er Chele gets higher value");
// }



// if (business > minister && business > Army) {
//      console.log("BusinessMan er Chele gets higher value")
// } else if (minister > business && minister > Army) {
//      console.log("Minister er Chele gets higher value");
// } else {
//      console.log("Army er Chele gets higher value");
// }

// using Math way
var max = Math.max(business, minister, Army);
console.log("Largest is:", max);

var min = Math.min(business, minister, Army);
console.log("Smallest is:", min);

// Function

function FindTheSmallest(first, second, third) {
     var min = Math.min(first, second, third);
     return min
}

var min = FindTheSmallest(business, minister, Army);
console.log("Smallest is:", min);


function FindTheLargest(first, second, third) {
     var min = Math.max(first, second, third);
     return min
}

var max = FindTheLargest(business, minister, Army);
console.log("Largest is:", max);