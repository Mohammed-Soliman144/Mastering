const hamburgerBtn = document.getElementById('hamburgerBtn');

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
const stickyBtn = document.querySelector("header.sticky .header__wrapper > .header__toggle-btn")

stickyBtn.addEventListener("click", (e) => {
    const isToggled = e.currentTarget.classList.toggle("is-open");
    e.currentTarget.setAttribute("aria-expanded", String(isToggled));
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Escape" && stickyBtn.classList.contains("is-open")) {
        stickyBtn.classList.remove("is-open")
        stickyBtn.setAttribute("aria-expanded", "false");
    }
})


