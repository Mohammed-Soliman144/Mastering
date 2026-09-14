const hamburgerBtn = document.getElementById('hamburger-btn');

hamburgerBtn.addEventListener("click", function (e) {
    // not need to use e.preventDefault which button type=buttton not submit which means not trigger page reload
    // e.preventDefault()
    // Toggle if toggled class return true if not return false
    const isOpen =  e.currentTarget.classList.toggle("is-open")
    e.currentTarget.setAttribute("aria-expanded", String(isOpen))
})

// When user press escape close mobile-menu
document.addEventListener("keydown", function (e) {
    if(e.key === 'Escape' && hamburgerBtn.classList.contains("is-open")) {
        hamburgerBtn.classList.remove("is-open")
        hamburgerBtn.setAttribute("aria-expanded", "false")
        hamburgerBtn.focus()
    }
})


/* STICKY HEADER */
const stickyBtn = document.querySelector("header.second .header__wrapper > .header__toggle-btn")
const navLinks = document.querySelectorAll("header.second .header__nav  ul li a")
const headerSticky = document.querySelector("header.second")

stickyBtn.addEventListener("click", (e) => {
    const isToggled = e.currentTarget.classList.toggle("is-open");
    e.currentTarget.setAttribute("aria-expanded", String(isToggled));
})

document.addEventListener("keydown", (e) => {
     if (stickyBtn.classList.contains("is-open") && e.key === "Escape") {
        stickyBtn.classList.remove("is-open")
        stickyBtn.setAttribute("aria-expanded", "false")
        stickyBtn.focus()
    }
})

document.addEventListener("click", (e) => {
    if(!headerSticky.contains(e.target) && stickyBtn.classList.contains("is-open")) {
        stickyBtn.classList.remove("is-open")
        stickyBtn.setAttribute("aria-expanded", "false")
        stickyBtn.focus()
    }
})


window.addEventListener("scroll", () => {
    if(window.scrollY >= 80) {
        headerSticky.classList.add("sticky")
    } else {
        headerSticky.classList.remove("sticky")
    } 
})


