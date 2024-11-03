export default function setupMenu() {
    const navItems = document.querySelector(".nav-items");
    const menuButton = document.querySelector("#hamburger-menu");

    menuButton.onclick = () => {
         navItems.classList.toggle("-right-full");
    }

    document.addEventListener("click", function(e)  {
        if (!menuButton.contains(e.target) && !navItems.contains(e.target)) {
            navItems.classList.remove("right-0");
        }
        e.preventDefault()
    });
}
