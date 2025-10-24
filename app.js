const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".menu");

mobileToggle.addEventListener("click", () => {
  console.log("clicked");

  navLinks.classList.toggle("active");

  const show = navLinks.classList.contains("active");

  if (show) {
    mobileToggle.textContent = "✕";
  } else {
    mobileToggle.textContent = "☰";
  }

  console.log(navLinks);
});
