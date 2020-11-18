const toggleBtn = document.querySelector(".header_toggleBtn");
const menu = document.querySelector(".header_menu");
const icons = document.querySelector(".header_links");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
