const icono = document.querySelector(".icon-index");
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu ul");
/* Eventos */

icono.addEventListener("click", () => {
  menu.classList.toggle("showMenu");
  menuList.classList.toggle("orderMenu");
  icono.classList.toggle("white");
});
