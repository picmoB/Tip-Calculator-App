/* FOR HAMBURGER MENU */

let hamburgerLinks = document.querySelector(".hamburger-menu-links");

function showAndHide(x) {
    x.classList.toggle("change");
    hamburgerLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
}
