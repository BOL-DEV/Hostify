const tabs = document.querySelectorAll(".tab-button");
const bookingsCont = document.querySelector(".bookings-cont");
const feedbackCont = document.querySelector(".feedback-cont");
const orderCont = document.querySelector(".order-cont");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("tab-button--active"));
    tab.classList.add("tab-button--active");

    const tabName = tab.dataset.tab;
    console.log(tabName);

    bookingsCont.style.display = "none";
    feedbackCont.style.display = "none";
    orderCont.style.display = "none";

    if (tabName === "orders") orderCont.style.display = "block";
    else if (tabName === "bookings") bookingsCont.style.display = "block";
    else feedbackCont.style.display = "block";
  });
});
