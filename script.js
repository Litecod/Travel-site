const nav = document.querySelector(".nav");
const navBar = document.querySelector(".navbar");
const togleBtn = document.querySelector(".togle");


togleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    navBar.classList.toggle("active");
})