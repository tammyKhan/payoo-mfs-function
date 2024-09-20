// step-1: set event handler
// step-2: prevent default browser (prevent reloading browser)
// step-3: get the Amount and pin
// step-4: validate pin
// step-5: get the available balance
// step-6: parsefloat() and subtract add money value to available balance inner text
// step-7: update the balance in the UI/DOM

document.getElementById('btn-cash-out').addEventListener('click', function(event){
  event.preventDefault();

const cashOut = getInputFieldValueById('cash-out-money');
const pinNumber = getInputFieldValueById('cash-out-pin');

if(isNaN(cashOut)){
  alert('Failed to Cash Out');
  return;
}

if(pinNumber === 1234){
 const balance = getTextFieldValueById('account-balance');

if(cashOut > balance){
  alert('You do not have enough money ');
  return;
}

 const newBalance = balance - cashOut;

 console.log(newBalance);
  document.getElementById('account-balance').innerText = newBalance;

  // add to transaction history
  const div = document.createElement('div');
  div.classList.add('bg-yellow-300');
 div.innerHTML = `
      <h4 class="text-2xl font-bold">Cash Out</h4>
      <p>${cashOut} withdraw. New Balance ${newBalance}</p>
 `
  console.log(div);

  document.getElementById('transaction-container').appendChild(div);

}else{
  alert('Failed to Cash Out')
}

})