
function getNumber(inputId, placeHolder, price, isAdd){
     const input = document.getElementById(inputId);
     let quantity = input.value;

     if(isAdd == true){
          quantity = parseInt(quantity) + 1;
     }
     else if (quantity > 0){
          quantity = parseInt(quantity) - 1;
     }
     input.value = quantity;

     const total = document.getElementById(placeHolder);
     total.innerText = quantity * price;

     fullTotal();
};

function getInputValue(inputId){
     const input = document.getElementById(inputId).innerText;
     const quantity = parseInt(input);
     return quantity;
}

function fullTotal(){
     const phoneTotal = getInputValue('phone-total') ;
     const caseTotal = getInputValue('case-total');
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 4;
     const totalPrice = subTotal + tax;
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax').innerText = tax;
     document.getElementById('total').innerText = totalPrice;
}


document.getElementById('phone-plus').addEventListener('click', function(){
     const updatedNum = getNumber('phone-quantity','phone-total', 1000, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
     const updatedNum = getNumber('phone-quantity', 'phone-total', 1000, false);
})
document.getElementById('case-plus').addEventListener('click', function(){
     const updatedNum = getNumber('case-quantity', 'case-total', 60, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
     const updatedNum = getNumber('case-quantity', 'case-total', 60, false);
})