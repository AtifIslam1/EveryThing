function getInputValue(inputId){
     const amountText = document.getElementById(inputId).value;
     const amount = parseFloat(amountText);
     return amount;
}

function updateTotal(fieldId, amount){
     let previousTotal = document.getElementById(fieldId);
     const previousTotalInText = previousTotal.innerText;
     const total = parseFloat(previousTotalInText);
     const newTotal = total + amount;
     previousTotal.innerText = newTotal;
}

function updateBalance(amount, isAdd){
     const balanceTag = document.getElementById('balance-total');
     const balanceInText = balanceTag.innerText;
     const balance = parseFloat(balanceInText);
     let newBalance;
     if(isAdd == true){
          newBalance = balance + amount;
     }
     else{
          newBalance = balance - amount;
     }
     balanceTag.innerText = newBalance
}

document.getElementById('deposit-button').addEventListener('click', function(){
     const amount = getInputValue('deposit-input');
     updateTotal('deposit-total', amount);
     updateBalance(amount, true);
})
document.getElementById('withdraw-button').addEventListener('click', function(){
     const amount = getInputValue('withdraw-input');
     updateTotal('withdraw-total', amount);
     updateBalance(amount, false);
})