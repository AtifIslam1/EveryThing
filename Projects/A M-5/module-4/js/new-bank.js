
function getAmount(inputId) {
     const input = document.getElementById(inputId);
     const amountText = input.value;
     const amount = parseFloat(amountText);
     input.value = '';
     return amount;
}

function getTotal(totalId, amount) {
     const current = document.getElementById(totalId);
     const currentText = current.innerText;
     const currentTotal = parseFloat(currentText);

     const Total = amount + currentTotal;
     current.innerText = Total;
};

function calculateBalance(amount, isAdd) {
     const balanceTotal = document.getElementById('balance-total');
     const balanceText = balanceTotal.innerText;
     const balanceCurrent = parseFloat(balanceText);
     if (isAdd == true) {
          balanceTotal.innerText = balanceCurrent + amount;
     }
     else {
          balanceTotal.innerText = balanceCurrent - amount;
     }
}



document.getElementById('deposit-button').addEventListener('click', function () {

     const depositAmount = getAmount('deposit-input')

     getTotal('deposit-total', depositAmount)

     calculateBalance(depositAmount, true);

});

document.getElementById('withdraw-button').addEventListener('click', function () {
     const withdrawAmount = getAmount('withdraw-input');
     getTotal('withdraw-total', withdrawAmount);
     calculateBalance(withdrawAmount, false)
})