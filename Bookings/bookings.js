const name = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const time = document.getElementById("time");
const guests = document.getElementById("guests");
const bookingForm = document.getElementById("bookingForm");

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

  console.log("submitted");
  console.log("submitted booking:", bookingDetails);
});
