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