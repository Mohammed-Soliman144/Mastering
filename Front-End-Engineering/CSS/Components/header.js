const hamburgerBtn = document.getElementsByClassName('main-header__btn-hamburger')[0];

hamburgerBtn.addEventListener("click", function (e) {
    e.preventDefault()
    e.currentTarget.classList.toggle("is-open")
})

