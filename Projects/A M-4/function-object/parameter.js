function bringShingara(taka) {
     console.log('Singarar jonno dise', taka);
     console.log('mama shingara den');
     var singaraPrice = 10;
     var singaraQuantity = taka / singaraPrice;
     return singaraQuantity;
}
var money = 90;
var singara = bringShingara(money);
console.log('ai nen singara', singara, 'ta');