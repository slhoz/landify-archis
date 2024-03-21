const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

const darkBtn = document.getElementById("dark-button");
const icon = document.getElementsByClassName("fa-moon");
darkBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#ffff00";
});
