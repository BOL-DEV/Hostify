const loginForm = document.getElementById("loginForm");
const errorMsg = document.querySelector(".error");

const users = [
  { email: "bol@example.com", password: "123456", name: "BOL" },
  { email: "test@example.com", password: "password", name: "Test User" },
];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    errorMsg.textContent = "";
    localStorage.setItem("loggedInUser", JSON.stringify(user)); // 🔥 save user
    alert(`Welcome, ${user.name}!`);
    window.location.href = "../Bookings/bookings.html"; // redirect after login
  } else {
    errorMsg.textContent = "Invalid email or password.";
  }
});
