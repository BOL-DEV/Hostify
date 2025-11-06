const name = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const guests = document.getElementById("guests");
const bookingForm = document.getElementById("bookingForm");

const user = JSON.parse(localStorage.getItem("loggedInUser"));

// If no user found → redirect to login page
if (!user) {
  window.location.href = "../Login/login.html";
} else {
  alert(`Welcome back, ${user.name}!`);
}

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const bookingDetails = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    date: date.value,
    time: time.value,
    guests: guests.value,
  };

  //hostify-app.vercel.app

  // Get existing bookings or initialize an empty array
  const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // Add the new booking
  existingBookings.push(bookingDetails);

  localStorage.setItem("bookings", JSON.stringify(existingBookings));

  alert("Booking successful! ✅");

  bookingForm.reset();

  console.log("submitted");
  console.log("submitted booking:", bookingDetails);
});

// THEME TOGGLE
const bookingThemeToggle = document.getElementById("themeToggle");
const container = document.querySelector(".booking-container");

if (localStorage.getItem("theme") === "light") {
  container.classList.add("light-mode");
  bookingThemeToggle.textContent = "🔆";
}

bookingThemeToggle.addEventListener("click", () => {
  container.classList.toggle("light-mode");
  const isLight = container.classList.contains("light-mode");
  bookingThemeToggle.textContent = isLight ? "🔆" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
