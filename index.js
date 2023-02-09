const toggleBtn = document.querySelector('.toggleBtn');
const currency= document.querySelector('#currency');
const commission= document.querySelector('#commission');


toggleBtn.addEventListener('click',function(){
    currency.classList.toggle('curresty');
    commission.classList.toggle('commsty');
    toggleBtn.classList.toggle('chgBtn');
});