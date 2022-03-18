// variables

var time = '10:15pm';
var bookprice = 150;
var iswhitecolor = false;

// Array

var partners = ['Adnan', 'Tahsan', 'Farhan', 'Nafi'];
// var elementCount = partners.length;
// var TahsanIndex = partners.indexOf('Tahsan');
partners.push('Atif');
partners.pop();
console.log(partners);

// conditionals

if (bookprice < 120) {
     console.log('I will Buy this book');
}
else {
     console.log('Kichu Discount then plz');
}

// Loop
var i = 0;
while (i <= 17) {
     i++;
}
for (var i = 0; i <= 17; i++) {
     console.log(i);
}

// function

function isMoonUp(time) {
     if (time >= 19 && time <= 5) {
          return true;
     }
     else {
          return false;
     }
     return true;
}
var moonstatus = isMoonUp(21);

// let const

// value can be changed
var price = 27;
price = 29;
price = 31;

// value cannot be changed
var name = 'Xiyang';
