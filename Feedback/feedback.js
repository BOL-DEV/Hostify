const starContainer = document.getElementById("starContainer");
const commentInput = document.getElementById("commentInput");
const submitBtn = document.getElementById("submitBtn");
const feedbackList = document.getElementById("feedbackList");

let selectedRating = 0;

// Handle rating stars
starContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    selectedRating = parseInt(e.target.getAttribute("data-value"));
    document
      .querySelectorAll(".feedback__stars span")
      .forEach((star, index) => {
        star.style.color = index < selectedRating ? "#f59e0b" : "#ccc";
      });
  }
});

// Handle submit feedback
submitBtn.addEventListener("click", () => {
  if (selectedRating === 0) {
    alert("Please select a rating before submitting!");
    return;
  }

  const feedback = {
    rating: selectedRating,
    comment: commentInput.value.trim(),
    date: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbacks.push(feedback);
  localStorage.setItem("feedbacks", JSON.stringify(feedbacks));

  alert("Feedback submitted successfully ✅");
  commentInput.value = "";
  selectedRating = 0;
  document
    .querySelectorAll(".feedback__stars span")
    .forEach((star) => (star.style.color = "#ccc"));

  renderFeedbacks();
});

// Render feedbacks
const renderFeedbacks = () => {
  const feedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
  feedbackList.innerHTML =
    feedbacks.length === 0
      ? `<p>No feedback yet. Be the first to share!</p>`
      : feedbacks
          .map(
            (f) => `
        <div class="feedback__item">
          <div class="feedback__item-rating">${"★".repeat(
            f.rating
          )}${"☆".repeat(5 - f.rating)}</div>
          <p class="feedback__item-comment">${
            f.comment || "No comment provided"
          }</p>
          <small class="feedback__item-date">${f.date}</small>
        </div>
      `
          )
          .join("");
};

document.addEventListener("DOMContentLoaded", renderFeedbacks);

// THEME TOGGLE
const feedbackThemeToggle = document.getElementById("themeToggle");

if (feedbackThemeToggle) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    feedbackThemeToggle.textContent = "🔆";
  }

  feedbackThemeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    feedbackThemeToggle.textContent = isLight ? "🔆" : "🌙";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}
