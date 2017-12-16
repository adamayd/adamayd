const navBar = document.querySelector('nav')
const portSlides = document.querySelectorAll('.port-slide')

function navBG() {
    // console.log(document.scrollTop);
    if (window.scrollY > 100) {
        navBar.classList.add('dark-nav')
    } else {
        navBar.classList.remove('dark-nav')
    }
}

function portTitleAppear () {
    // console.log(this)
    const portTitle = this.querySelector('.port-title')
    const portButton = this.querySelector('.port-button')
    this.classList.toggle('port-slide-active')
    portTitle.classList.toggle('port-title-active')
    portButton.classList.toggle('port-button-active')
}


window.addEventListener('scroll', navBG);
portSlides.forEach(portSlide => portSlide.addEventListener('mouseenter', portTitleAppear))
portSlides.forEach(portSlide => portSlide.addEventListener('mouseleave', portTitleAppear))
