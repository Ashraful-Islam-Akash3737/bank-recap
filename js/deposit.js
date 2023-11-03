document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    depositField.value = '';
    // console.log(newDepositAmount);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString  = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    const nextDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = nextDepositTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previoueBalanceTotalString = balanceTotalElement.innerText;
    const previoueBalanceTotalAmount = parseFloat(previoueBalanceTotalString);


    const nextBalanceTotal = previoueBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = nextBalanceTotal;


})