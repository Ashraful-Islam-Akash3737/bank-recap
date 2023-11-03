document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    withdrawField.value = '';
    // console.log(newDepositAmount);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString  = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;


    const balanceElement = document.getElementById('balance-total');
    const previoueBalanceTotalString = balanceElement.innerText;
    const previoueBalanceTotal = parseFloat(previoueBalanceTotalString);


    const newBalanceTotal = previoueBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;


})