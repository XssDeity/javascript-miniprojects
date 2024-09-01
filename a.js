const icono=document.querySelector("#icono");
const boton= document.querySelector("#alternar")
const check= 'fa-check-circle';
const uncheck= 'fa-circle';


boton.addEventListener('click',()=>{
    icono.classList.toggle(check);
    icono.classList.toggle(uncheck);
} )