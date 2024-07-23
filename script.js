const container = document.querySelector(".container");
const input = document.querySelector(".search");
const button = document.getElementById("Btn");
const searchIcon = document.querySelector(".fa-search");
const closeIcon = document.querySelector(".fa-times");
button.addEventListener("click", () => {
  container.classList.toggle("active");
  button.classList.toggle("active");
  if (container.classList.contains("active")) {
    searchIcon.style.opacity = 0;
    closeIcon.style.opacity = 1;
  } else {
    searchIcon.style.opacity = 1;
    closeIcon.style.opacity = 0;
  }
  input.focus();
});
