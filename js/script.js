const navIcon = document.querySelector(".navIcon");
const toggleBtn2 = document.querySelector(".toggleBtn2");

navIcon.addEventListener("click", () => {
  let navToggle = document.querySelector(".navToggle");
  navToggle.classList.add("translate0");
});
toggleBtn2.addEventListener("click", () => {
  let navToggle = document.querySelector(".navToggle");
  navToggle.classList.remove("translate0");
});

console.log(object);
