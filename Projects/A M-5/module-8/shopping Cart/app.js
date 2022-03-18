function updateNumber(numberId, total, price, isAdd) {
     const input = document.getElementById(numberId);
     let number = input.value;
     if (isAdd == true) {
          number = parseInt(number) + 1;
     }
     else if (number > 0) {
          number = parseInt(number) - 1;
     }
     input.value = number;

     // update total
     const Total = document.getElementById(total);
     Total.innerText = number * price;

     // calculate Total
     calculateTotal();
}


function getInputValue(inputId) {
     const input = document.getElementById(inputId).value;
     const number = parseFloat(input);
     return number;
}

function calculateTotal() {
     const phoneTotal = getInputValue('phone-number') * 1219;
     const caseTotal = getInputValue('case-number') * 59;
     const subTotal = phoneTotal + caseTotal;
     const tax = subTotal / 10;
     const totalPrice = subTotal + tax;
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-amount').innerText = tax;
     document.getElementById('total-price').innerText = totalPrice;
}

// handle Increase / decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
     const phoneInput = updateNumber('phone-number', 'phone-total', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
     const phoneInput = updateNumber('phone-number', 'phone-total', 1219, false);
})
document.getElementById('case-plus').addEventListener('click', function () {
     const phoneInput = updateNumber('case-number', 'case-total', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
     const phoneInput = updateNumber('case-number', 'case-total', 59, false);
});


