//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close-modal");

  // Open modal
  openBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Close via button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});