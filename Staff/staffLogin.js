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
const themeToggle = document.createElement("button");
themeToggle.id = "themeToggle";
themeToggle.className = "theme-btn";
themeToggle.textContent = "🌙";
themeToggle.style.position = "fixed";
themeToggle.style.top = "15px";
themeToggle.style.right = "20px";
themeToggle.style.background = "none";
themeToggle.style.border = "none";
themeToggle.style.fontSize = "1.5rem";
themeToggle.style.cursor = "pointer";
document.body.appendChild(themeToggle);

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