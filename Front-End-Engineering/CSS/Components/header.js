const hamburgerBtn = document.getElementById('hamburgerBtn');

hamburgerBtn.addEventListener("click", function (e) {
    e.preventDefault()
    // Toggle if toggled class return true if not return false
    const isOpen =  e.currentTarget.classList.toggle("is-open")
    e.currentTarget.setAttribute("aria-expanded", String(isOpen))
})