import '../css/style.css'

    const menuButton = document.getElementById("hamburger-menu");
    const navItems = document.querySelector(".nav-items");

menuButton.addEventListener("click", () => {
    navItems.classList.toggle("-right-full");
})

menuButton.addEventListener("click", (e) => {
    if (!menuButton.contains(e.target) && !navItems.contains(e.target)) {
        navItems.classList.remove("right-0")
        e.preventDefault()
  }
})