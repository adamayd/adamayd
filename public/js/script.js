const navBar = document.querySelector('nav')
const portSlides = document.querySelectorAll('.port-slide')
const navLinks = document.querySelectorAll('.nav-link')

function navBG() {
    // console.log(document.scrollTop);
    if (window.scrollY > 330) {
        navBar.classList.add('nav--dark')
    } else {
        navBar.classList.remove('nav--dark')
    }
}

function portTitleAppear() {
    // console.log(this)
    const portTitle = this.querySelector('.port-title')
    const portButton = this.querySelector('.port-button')
    this.classList.toggle('port-slide-active')
    portTitle.classList.toggle('port-title-active')
    portButton.classList.toggle('port-button-active')
}

function addLifeGrid() {
    
}


window.addEventListener('scroll', navBG);
portSlides.forEach(portSlide => portSlide.addEventListener('mouseenter', portTitleAppear))
portSlides.forEach(portSlide => portSlide.addEventListener('mouseleave', portTitleAppear))