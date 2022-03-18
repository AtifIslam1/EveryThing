// First Function
function anaToVori(ana) {
     if (typeof ana != 'number') {
          return "Please Give a number";
     }
     // 1 ana = 0.0625 vori.
     vori = ana * 0.0625;
     return vori;
}
// my log
const anas = 16;
const giveVori = anaToVori(anas);
console.log(giveVori);

// Second Funcion
function pandaCost(shingara, shomocha, jilapi) {
     if (typeof shingara != 'number') {
          return "Please Give a number in shingara";
     } else if (shingara < 0) {
          return "Please give a positive number in shingara"
     }
     else if (typeof shomocha != 'number') {
          return "Please Give a number in shomocha";
     } else if (shomocha < 0) {
          return "Please give a positive number in shomocha"
     }
     else if (typeof jilapi != 'number') {
          return "Please Give a number in jilapi";
     } else if (jilapi < 0) {
          return "Please give a positive number in jilapi"
     }
     // all product prices
     const shingaraPrice = 7;
     const shomochaPrice = 10;
     const jilapiPrice = 15;
     // all total price of each products
     const shingaratotal = shingara * shingaraPrice;
     const shomochatotal = shomocha * shomochaPrice;
     const jilapitotal = jilapi * jilapiPrice;
     // total bill
     const totalbill = shingaratotal + shomochatotal + jilapitotal;
     return totalbill;
}
// my log
const shingaraQuantity = 13;
const shomochaQuantity = 9;
const jilapiQuantity = 16;
const bill = pandaCost(shingaraQuantity, shomochaQuantity, jilapiQuantity);
console.log(bill);

// third function
function picnicBudget(people) {
     if (typeof people != "number") {
          return 'Please Give a number';
     }
     const peopleBillInStarting100 = 5000;
     const peopleBillInStarting200 = 4000;
     const peopleBillAtlast = 3000;
     if (people <= 100) {
          const bill = people * peopleBillInStarting100;
          return bill;
     }
     else if (people <= 200) {
          const first100 = 100 * peopleBillInStarting100;
          const restpeople = people - 100;
          const peopleBillIn200 = restpeople * peopleBillInStarting200;
          const totalbill = first100 + peopleBillIn200;
          return totalbill;
     }
     else {
          const first100 = 100 * peopleBillInStarting100;
          const second100 = 100 * peopleBillInStarting200;
          const restpeople = people - 200;
          const peopleBillAtEnd = restpeople * peopleBillAtlast;
          const totalbill = first100 + second100 + peopleBillAtEnd;
          return totalbill;
     }
}
// my log
const peopleQuantity = 156;
const budget = picnicBudget(peopleQuantity);
console.log(budget);

// fourth / last function
function oddFriend(friends) {
     if (typeof friends != 'object') {
          return "please give an array."
     }
     for (let i = 0; i < friends.length; i++) {
          if (friends[i].length % 2 == 1) {
               const oddfriend = friends[i];
               return oddfriend;
          }
     }
}
// my log
const friendNames = ['shakil', 'rafi', 'asrdftgyhu', 'Al-amin', 'shanto'];
const findOddFriend = oddFriend(friendNames);
console.log(findOddFriend);