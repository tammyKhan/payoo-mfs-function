// step-1: set event handler
// step-2: prevent default browser (prevent reloading browser)
// step-3: get the Amount and pin
// step-4: validate pin
// step-5: get the available balance
// step-6: parsefloat() and sum add money value with available balance inner text
// step-7: update the balance in the UI/DOM

document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();

  const addMoney = getInputFieldValueById('input-add-money');
  const pinNumber = getInputFieldValueById('input-pin-number');

  if(isNaN(addMoney)){
    alert('Failed to add money');
    return;
  }

if(pinNumber === 1234){
  

  const balance = getTextFieldValueById('account-balance');
  const newBalance = balance + addMoney;

  console.log(newBalance);
  document.getElementById('account-balance').innerText = newBalance;

  // add to transaction history
  const p = document.createElement('p');
  p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`
  console.log(p);

  document.getElementById('transaction-container').appendChild(p);

}else{
  alert('Failed to add the money')
}

})