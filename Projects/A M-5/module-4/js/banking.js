

function getInputValue(inputId) {
     const input = document.getElementById(inputId);
     const amountText = input.value;
     const amount = parseFloat(amountText);
     input.value = '';
     return amount;
};

function updateTotal(totalFieldId, Amount) {
     const Total = document.getElementById(totalFieldId);
     const TotalText = Total.innerText;
     const Totalcurrent = parseFloat(TotalText);
     // update deposit 
     Total.innerText = Amount + Totalcurrent;
};

function getCurrentBalance() {
     const balanceTotal = document.getElementById('balance-total');
     const balanceCurrentAmountText = balanceTotal.innerText;
     const balanceCurrentAmount = parseFloat(balanceCurrentAmountText);
     return balanceCurrentAmount;
}


function updateBalance(amount, isAdd) {
     const balanceTotal = document.getElementById('balance-total');
     const balanceCurrentAmount = getCurrentBalance();
     if (isAdd == true) {
          const totalBalance = balanceCurrentAmount + amount;
          balanceTotal.innerText = totalBalance;
     }
     else {
          const totalBalance = balanceCurrentAmount - amount;
          balanceTotal.innerText = totalBalance;
     }

}


document.getElementById('deposit-button').addEventListener('key', function () {
     // taking input
     const depositAmount = getInputValue('deposit-input');
     if (depositAmount > 0) {
          // current deposit
          updateTotal('deposit-total', depositAmount);
          //  update main balance
          updateBalance(depositAmount, true);
     }



});

document.getElementById('withdraw-button').addEventListener('click', function () {
     const currentBalance = getCurrentBalance();
     const withdrawAmount = getInputValue('withdraw-input');
     if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
          updateTotal('withdraw-total', withdrawAmount);
          updateBalance(withdrawAmount, false);
     }

});