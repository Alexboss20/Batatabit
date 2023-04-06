const toggleBtn = document.querySelector('.toggleBtn');
const currency= document.querySelector('#currency');
const commission= document.querySelector('#commission');


toggleBtn.addEventListener('click',function(){
    currency.classList.toggle('curresty');
    commission.classList.toggle('commsty');
    toggleBtn.classList.toggle('chgBtn');
});

function obtenerFechaHora() {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();
    return `${fecha} ${hora}`;
}  
  // Actualiza todos los elementos con la clase "campoFecha" con la fecha y hora actual del navegador
    const elementosFecha = document.querySelectorAll('.campoFecha');
    elementosFecha.forEach(elemento => {
    elemento.textContent = `Actualizado: ${obtenerFechaHora()}`;
});