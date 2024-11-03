export default function setupMenu() {
    const navItems = document.querySelector(".nav-items");
    const menuButton = document.querySelector("#hamburger-menu");

    menuButton.addEventListener("click", () => {
         navItems.classList.toggle("-right-full");
    })

    document.addEventListener("click", (e) =>  {
        if (!menuButton.contains(e.target) && !navItems.contains(e.target)) {
            navItems.classList.remove("right-0");
        }
        e.preventDefault()
    });
}
