// step-1: set event handler
// step-2: prevent default browser (prevent reloading browser)
// step-3: get the phone number and pin
// step-4: validate phone and pin
// step-5: allow user to use website

document.getElementById('button-login').addEventListener('click', function(event){
  event.preventDefault();

const phoneNumber =  document.getElementById('phone-number').value;
const pinNumber =  document.getElementById('pin-number').value;
console.log(phoneNumber, pinNumber);

if(phoneNumber === '5' && pinNumber === '1234'){
  console.log('you are logged in');
  window.location.href = '/home.html';
}else{
  alert('Wrong phone number or pin')
}

})