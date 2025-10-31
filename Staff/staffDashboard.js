document.addEventListener("DOMContentLoaded", () => {
  // Tabs
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

      if (tabName === "orders") orderCont.style.display = "block";
      else if (tabName === "bookings") bookingsCont.style.display = "block";
      else feedbackCont.style.display = "block";
    });
  });

  // Render functions
  const renderBookings = () => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    const container = bookingsCont.querySelector(".content-view_empty-state");
    const counter = document.querySelector(
      '[data-tab="bookings"] .tab-button_count'
    );
    counter.textContent = `(${data.length})`;

    container.innerHTML = data.length
      ? data
          .map(
            (b) => `
        <div class="data-card">
          <h4><span>Name:</span> ${b.name}</h4>
          <p><span>Email:</span> ${b.email}</p>
          <p><span>Phone NO:</span> ${b.phone}</p>
          <p><span>Date:</span> ${b.date}</p>
          <p><span>Time:</span> ${b.time}</p>
          <p><span>Guest NO:</span> ${b.guests}</p>
        </div>`
          )
          .join("")
      : "No bookings yet";
  };

  const renderOrders = () => {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const container = orderCont.querySelector(".content-view_empty-state");
    const counter = document.querySelector(
      '[data-tab="orders"] .tab-button_count'
    );
    counter.textContent = `(${orders.length})`;

    if (orders.length === 0) {
      container.innerHTML = "No orders yet";
      return;
    }

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
        id: order.orderId,
        item: itemNames,
        total: order.total.toLocaleString(),
        date: formattedDate,
      };
    });

    container.innerHTML = data
      .map(
        (o) => `
        <div class="data-card">
          <h4>${o.id}</h4>
          <p><span>Items:</span> ${o.item}</p>
          <p><span>Total:</span> ₦${o.total}</p>
          <small>${o.date}</small>
        </div>`
      )
      .join("");
  };

  const renderFeedbacks = () => {
    const data = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const container = feedbackCont.querySelector(".content-view_empty-state");
    const counter = document.querySelector(
      '[data-tab="feedback"] .tab-button_count'
    );
    counter.textContent = `(${data.length})`;

    container.innerHTML = data.length
      ? data
          .map(
            (f) => `
          <div class="data-card">
            <div class="data-card-rating">${"★".repeat(f.rating)}${"☆".repeat(
              5 - f.rating
            )}</div>
            <p class="data-card-comment">${
              f.comment || "No comment provided"
            }</p>
            <small class="data-card-date">${f.timestamp}</small>
          </div>`
          )
          .join("")
      : "No feedback yet";
  };

  // Initialize renders
  renderOrders();
  renderBookings();
  renderFeedbacks();

  // THEME TOGGLE
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      const isLight = body.classList.contains("light-mode");
      themeToggle.textContent = isLight ? "🔆" : "🌙";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });

    if (localStorage.getItem("theme") === "light") {
      body.classList.add("light-mode");
      themeToggle.textContent = "🔆";
    }
  }

  // MOBILE MENU
  const mobileToggle = document.getElementById("mobileToggle");
  const dashboardMenu = document.querySelector(".menu");

  if (mobileToggle && dashboardMenu) {
    mobileToggle.addEventListener("click", () => {
      dashboardMenu.classList.toggle("active");
      mobileToggle.textContent = dashboardMenu.classList.contains("active")
        ? "✕"
        : "☰";
    });
  }
});
