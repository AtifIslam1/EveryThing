var bottleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// Array

var items = ['bottle', 'mug', 'paper', 'pen'];
items.indexOf('paper');
items.push('envelope');
items.push('watch');
items.pop();

if (items.length >= 4) {
     console.log("Yo have to many stuff on your desk");
}
else if (items.length == 4) {
     console.log("You only have one hali items");
}
else {
     console.log("Wow You have a clean Desk");
}