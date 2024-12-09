export function setupMenu() {
    const menuButton = document.getElementById("hamburger-menu");
    const navItems = document.querySelector(".nav-items");

    navItems.classList.add("-right-full")

    menuButton.addEventListener("click", (e) => {
        navItems.classList.toggle("right-0");
               preventDefault(e);
    });

    document.addEventListener("click", (e) => {
        if (!menuButton.contains(e.target) && !navItems.contains(e.target)) {
            navItems.classList.remove("right-0");
        }
        preventDefault(e);
    });
}