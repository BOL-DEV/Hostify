const tabs = document.querySelectorAll(".tab-button");
const bookingsCont = document.querySelector(".bookings-cont");
const feedbackCont = document.querySelector(".feedback-cont");
const orderCont = document.querySelector(".order-cont");

// Handle tab switching
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("tab-button--active"));
    tab.classList.add("tab-button--active");

    const tabName = tab.dataset.tab;

    document.querySelectorAll(".content-view").forEach((view) => {
      view.style.display = "none";
    });

    if (tabName === "orders") {
      orderCont.style.display = "block";
      renderOrders();
    } else if (tabName === "bookings") {
      bookingsCont.style.display = "block";
      renderBookings();
    } else {
      feedbackCont.style.display = "block";
      renderFeedbacks();
    }
  });
});

// Render Bookings
const renderBookings = () => {
  const data = JSON.parse(localStorage.getItem("bookings")) || [];
  const container = bookingsCont.querySelector(".content-view_empty-state");
  const counter = document.querySelector(
    '[data-tab="bookings"] .tab-button_count'
  );
  counter.textContent = `(${data.length})`;

  if (data.length === 0) {
    container.innerHTML = "No bookings yet";
    return;
  }

  container.innerHTML = data
    .map(
      (b) => `
      <div class="data-card">
        <h4><span>Name:</span> ${b.name}</h4>
        <p><span>Email:</span> ${b.email}</p>
        <p><span>Phone NO:</span> ${b.phone}</p>
        <p><span>Date:</span> ${b.date}</p>
        <p><span>Time:</span> ${b.time}</p>
        <p><span>Guest NO:</span> ${b.guests}</p>
      </div>
    `
    )
    .join("");
};

// Render Orders
const renderOrders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const container = orderCont.querySelector(".content-view_empty-state");
  const counter = document.querySelector(
    '[data-tab="orders"] .tab-button_count'
  );

  counter.textContent = `(${orders.length})`;

  const data = orders.map((order) => {
    const date = new Date(order.timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const itemNames = order.items
      .map((item) => `${item.name} (x${item.quantity})`)
      .join(", ");
    return {
      name: order.customer,
      item: itemNames,
      total: order.total.toLocaleString(),
      date: formattedDate,
    };
  });

  console.log(data);

  if (data.length === 0) {
    container.innerHTML = "No orders yet";
    return;
  }

  container.innerHTML = data
    .map(
      (o) => `
      <div class="data-card">
        <h4>${o.name}</h4>
        <p><span>Items:</span> ${o.item}</p>
        <p><span>Total:</span> ₦${o.total}</p>
        <small>${o.date}</small>
      </div>
    `
    )
    .join("");
};

// Render Feedbacks
const renderFeedbacks = () => {
  const data = JSON.parse(localStorage.getItem("feedbacks")) || [];
  const container = feedbackCont.querySelector(".content-view_empty-state");
  const counter = document.querySelector(
    '[data-tab="feedback"] .tab-button_count'
  );
  counter.textContent = `(${data.length})`;

  if (data.length === 0) {
    container.innerHTML = "No feedback yet";
    return;
  }

  container.innerHTML = data
    .map(
      (f) => `
      <div class="data-card">
        <div class="data-card-rating">${"★".repeat(f.rating)}${"☆".repeat(
        5 - f.rating
      )}</div>
        <p class="data-card-comment">${f.comment || "No comment provided"}</p>
        <small class="data-card-date">${f.date}</small>
      </div>
    `
    )
    .join("");
};

// Initialize
document.addEventListener("DOMContentLoaded", renderBookings());
