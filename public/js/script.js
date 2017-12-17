const navBar = document.querySelector('nav')
const portSlides = document.querySelectorAll('.port-slide')
const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-link')

function navBG() {
    // console.log(document.scrollTop);
    const winHeight = (window.innerHeight / 2) - (window.innerHeight / 7)
    if (window.scrollY > winHeight) {
        navBar.classList.add('nav--dark')
    } else {
        navBar.classList.remove('nav--dark')
    }
}

function highlightNavLink() {
    navLinks.forEach(navLink => navLink.classList.toggle('nav-link-dark'))
}

function portTitleAppear() {
    const portTitle = this.querySelector('.port-title')
    const portButton = this.querySelector('.port-button')
    this.classList.toggle('port-slide-active')
    portTitle.classList.toggle('port-title-active')
    portButton.classList.toggle('port-button-active')
}

function addLifeGrid() {
    const gridSize = window.innerWidth > 900 ? 10 : window.innerWidth > 768 ? 6 : 3
}


window.addEventListener('scroll', navBG);
window.addEventListener('resize', addLifeGrid)
portSlides.forEach(portSlide => portSlide.addEventListener('mouseenter', portTitleAppear))
portSlides.forEach(portSlide => portSlide.addEventListener('mouseleave', portTitleAppear))
navList.addEventListener('mouseenter', highlightNavLink)
navList.addEventListener('mouseleave', highlightNavLink)