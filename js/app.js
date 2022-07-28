//Encabezado Responsive

const btnMenuOpen = document.getElementById("btnMenuOpen");
const btnMenuClose = document.getElementById("btnMenuClose");
const menuResponsive = document.getElementById("menu-bar");
const enlaces = document.getElementById("enlaces");

      //Evento Abrir Menu

btnMenuOpen.addEventListener("click", () => {
    menuResponsive.classList.add("active");
});

btnMenuClose.addEventListener("click", () => {
    menuResponsive.classList.remove("active");
});

      //Cerrar Menu con elementos de enlace

enlaces.addEventListener("click", () => {
    menuResponsive.style.transitionDelay = ".2s";
    menuResponsive.classList.remove("active");
});


//Slider de productos

const contenedor = document.querySelector('.slider');
const btnIzquierda = document.getElementById("btnIzquierda");
const btnDerecha = document.getElementById("btnDerecha");

     //Evento Boton Derecho

btnDerecha.addEventListener("click", () => {
    contenedor.scrollLeft += contenedor.offsetWidth;
});
     //Evento Boton Izquierdo

btnIzquierda.addEventListener("click", () => {
    contenedor.scrollLeft -= contenedor.offsetWidth;
});