const passwordValue = document.querySelector("#password");
const submitBtn = document.querySelector(".login-form_button");

// console.log(passwordValue);

let password = passwordValue.value;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  password = passwordValue.value;

  if (password === "staff123") {
    window.location.href = "staffDashboard.html";
  } else {
    alert("Invalid credentials. Please use the demo credentials.");
  }
});

// === LIGHT MODE TOGGLE ===
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "🔆";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "🔆" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
