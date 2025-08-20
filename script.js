const offScreenMenu = document.querySelector(".off-screen-menu");
const mobileNav = document.querySelector("#mobile-nav");
const hamMenu = document.querySelector(".ham-menu");
const closeBtn = document.querySelector(".close-btn");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.add("active");
  mobileNav.classList.add("active");
  closeBtn.style.display = "block";
  hamMenu.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  mobileNav.classList.remove("active");
  closeBtn.style.display = "none";
  hamMenu.style.display = "block";
});
