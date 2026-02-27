//your JS code here. If required.
const openBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

// Close on button click
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});