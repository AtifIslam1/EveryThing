// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
     const depositInput = document.getElementById('deposit-input');

     // deposite amount taken from user
     const newDepositAmountText = depositInput.value;
     const newDepositAmount = parseFloat(newDepositAmountText);

     // update Deposit Total
     const depositTotal = document.getElementById('deposit-total');
     const previousDepositAmountText = depositTotal.innerText;
     const previousDepositAmount = parseFloat(previousDepositAmountText);

     const newDepositTotal = previousDepositAmount + newDepositAmount;


     depositTotal.innerText = newDepositTotal;

     // update Account Balance
     const balanceTotal = document.getElementById('balance-total');
     balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     const newBalanceTotal = newDepositAmount + previousBalanceTotal;
     balanceTotal.innerText = newBalanceTotal;

     // clear the deposit input field
     depositInput.value = '';


});

// handle withdraw with eventHandler

document.getElementById('withdraw-button').addEventListener('click', function () {
     const withdrawInput = document.getElementById('withdraw-input');
     const withdrawAmountText = withdrawInput.value;
     const newWithdrawAmount = parseFloat(withdrawAmountText);

     // set withdraw total
     const withdrawTotal = document.getElementById('withdraw-total');
     const previousWithdrawText = withdrawTotal.innerText;
     const previousWithdraw = parseFloat(previousWithdrawText);

     // total
     const newWithdrawTotal = newWithdrawAmount + previousWithdraw;
     withdrawTotal.innerText = newWithdrawTotal;


     // update balance
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalText);
     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
     balanceTotal.innerText = newBalanceTotal;

     // clear Withdraw Field
     withdrawInput.value = '';
});



console.log(name);

