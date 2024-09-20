// step-1: set event handler
// step-2: prevent default browser (prevent reloading browser)
// step-3: get the Amount and pin
// step-4: validate pin
// step-5: get the available balance
// step-6: parsefloat() and sum add money value with available balance inner text
// step-7: update the balance in the UI/DOM

document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();

  const addMoney = document.getElementById('input-add-money').value;
  const pinNumber = document.getElementById('input-pin-number').value;
  console.log(addMoney, pinNumber);

  if(pinNumber === '1234'){
    const balance = document.getElementById('account-balance').innerText;
    
    const balanceNumber = parseFloat(balance);
    const addMoneyNumber = parseFloat(addMoney);

    const newBalance = balanceNumber + addMoneyNumber;

    console.log(newBalance);

    document.getElementById('account-balance').innerText = newBalance;

  }else{
    alert('Failed to add money')
  }
})