const menu = document.querySelector(".menu");
const menuContainer = document.querySelector(".header  nav");
const menuList = document.querySelector(".header nav ul");

console.log(menu);
menu.addEventListener("click", () => {
  menuContainer.classList.toggle("showMenu");
  menuList.classList.toggle("orderList");
  menu.classList.toggle("white");
  menuContainer.classList.toggle("animate__bounce");
});
