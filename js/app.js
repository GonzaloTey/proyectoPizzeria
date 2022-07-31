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

//Formulario - Validacion

const formulario = document.getElementById("formulario");

    //Eventos del Formulario

const validar = (e) => {
    let inputNombre = document.getElementById("nombre");
    let inputEmail = document.getElementById("email");
    let comentarios = document.getElementById("comentarios");
    let alertSuccess = document.getElementById("alertSuccess");
    let alertError = document.getElementById("alertError");

    if (inputNombre.value == 0 || inputEmail.value == 0 || comentarios.value == 0) {
        e.preventDefault();
        alertError.classList.replace("hide", "show");
        setTimeout(() => {
            alertError.classList.replace("show", "hide");
        }, 2000);
    } else {
        e.preventDefault();
        alertSuccess.classList.replace("hide", "show");
        setTimeout(() => {
            alertSuccess.classList.replace("show", "hide");
        }, 2000);

        inputNombre.value = "";
        inputEmail.value = "";
        comentarios.value = "";
    }
};

formulario.addEventListener("submit", validar);