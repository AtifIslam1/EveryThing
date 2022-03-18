function expensesTotalAndBalance() {
    //expenses calculation
    const rentCost = document.getElementById("Rent-cost")
    const rentCostInput = parseFloat(rentCost.value)
    const foodCost = document.getElementById("Food-cost")
    const foodCostInput = parseFloat(foodCost.value)
    const othersCost = document.getElementById("Others-cost")
    const othersCostInput = parseFloat(othersCost.value)
    const totalExpenses = rentCostInput + foodCostInput + othersCostInput
    //balance calculation
    const monthlyIncome = document.getElementById("Monthly-income")
    const monthlyIncomeInput = parseFloat(monthlyIncome.value)
    const balance = monthlyIncomeInput - totalExpenses
    const totalExpensesShow = document.getElementById("Total-Expenses")
    totalExpensesShow.innerText = totalExpenses
    let totalBalanceShow = document.getElementById("Balance")
    totalBalanceShow.innerText = balance
    //Error handiling
    if (totalExpenses > monthlyIncomeInput) {
        document.getElementById("notify-fail-four").style.display = "block"
        totalBalanceShow.innerText = "0"
    } else {
        document.getElementById("notify-fail-four").style.display = "none"
        return balance
    }

}
//parcentage of saving calculation
function getPercentage() {
    const monthlyIncome = document.getElementById("Monthly-income")
    const monthlyIncomeInput = parseFloat(monthlyIncome.value)
    const parcentage = document.getElementById("percentage")
    const parcentagInput = parseFloat(parcentage.value)
    const savingAmount = (parcentagInput * monthlyIncomeInput) / 100
    document.getElementById("Saving-Amount").innerText = savingAmount
    return savingAmount
}
//Error handiling codes
function val(elem) {
    if (isNaN(elem.value) || elem.value < 0) {
        document.getElementById("notify-fail-one").style.display = "block"
    } else {
        document.getElementById("notify-fail-one").style.display = "none"
    }
}

function val1(elem) {
    if (isNaN(elem.value) || elem.value < 0) {
        document.getElementById("notify-fail-two").style.display = "block"
    } else {
        document.getElementById("notify-fail-two").style.display = "none"
    }
}
//button click events
document.getElementById("calculate-btn").addEventListener("click", function (event) {

    expensesTotalAndBalance()

})

document.getElementById("savings").addEventListener("click", function (event) {
    const savings = getPercentage()
    const previousbalance = expensesTotalAndBalance()
    //Error handling
    if (savings > previousbalance) {
        document.getElementById("notify-fail-three").style.display = "block"
        document.getElementById("Remaining-Balance").innerText = "0"

    } else if (previousbalance >= savings) {
        const newRemainingBalance = previousbalance - savings
        document.getElementById("Remaining-Balance").innerText = newRemainingBalance
        document.getElementById("notify-fail-three").style.display = "none"
    }

})
