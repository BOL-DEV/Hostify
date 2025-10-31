const mobileToggle = document.querySelector(".mobile-toggle");
const navLinks = document.querySelector(".menu");

mobileToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const show = navLinks.classList.contains("active");

  if (show) {
    mobileToggle.textContent = "✕";
  } else {
    mobileToggle.textContent = "☰";
  }
});

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme

if (themeToggle) {
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "🔆";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    themeToggle.textContent = isLight ? "🔆" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
