// mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".section-header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
