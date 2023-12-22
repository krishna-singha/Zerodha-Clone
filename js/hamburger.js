const hamLogo = document.querySelector("#hamburger-icons");
const navMenu = document.querySelector("#navbar");

hamLogo.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})