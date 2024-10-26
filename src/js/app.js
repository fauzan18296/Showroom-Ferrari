import '../css/style.css'


// /src/js/app.js
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("hamburger-menu");
    const navItems = document.querySelector(".nav-items");

    menuButton.addEventListener("click", () => {
        // Toggle classes for showing/hiding the nav items
        navItems.classList.toggle("right-0"); // Move to visible position
        navItems.classList.toggle("-right-full"); // Move off-screen
    });
});
