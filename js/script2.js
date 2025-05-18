
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    el.classList.add("animated");
  });
});
