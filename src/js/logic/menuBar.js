export function setupMenu() {
    const menuButton = document.getElementById("hamburger-menu");
    const navItems = document.querySelector(".nav-items");

    menuButton.addEventListener("click", () => {
        navItems.classList.toggle("-right-full");
    });

    document.addEventListener("click", (e) => {
        if (!menuButton.contains(e.currentTarget) && !navItems.contains(e.currentTarget)) {
            navItems.classList.remove("right-0");
        }
    });
}