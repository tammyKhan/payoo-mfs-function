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

// console.log(cashOut, pinNumber);
if(pinNumber === 1234){
 const balance = getTextFieldValueById('account-balance');
 const newBalance = balance - cashOut;

 console.log(newBalance);
  document.getElementById('account-balance').innerText = newBalance;

}else{
  alert('Failed to Cash Out')
}

})