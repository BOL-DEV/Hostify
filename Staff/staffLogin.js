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
