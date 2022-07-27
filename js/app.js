//Menu Responsive

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