const input=document.querySelector('#input');
const button=document.querySelector('#mostrar-valor');
const valorP=document.querySelector('#valor');

button.addEventListener('click', ()=>{
    valorP.textContent=input.value;

});