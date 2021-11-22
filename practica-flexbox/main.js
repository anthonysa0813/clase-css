const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".header  nav");
const menuList = document.querySelector(".header nav ul");

<<<<<<< HEAD
icono.addEventListener("click", () => {
  console.log("me clickeaste");
  menu.classList.toggle("showMenu");
  menuList.classList.toggle("orderMenu");
  icono.classList.toggle("white");
=======
console.log(menu);
menu.addEventListener("click", () => {
  menuContainer.classList.toggle("showMenu");
  menuList.classList.toggle("orderList");
  menu.classList.toggle("white");
  menuContainer.classList.toggle("animate__bounce");
>>>>>>> prueba
});
