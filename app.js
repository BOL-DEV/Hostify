const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".menu");

mobileToggle.addEventListener("click", () => {
  console.log("clicked");

  navLinks.classList.toggle("active");
  console.log(navLinks);
});
