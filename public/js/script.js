const navBar = document.querySelector('nav')
const portSlides = document.querySelectorAll('.port-slide')
// const navList = document.querySelector('.nav-list')
const navLinks = document.querySelectorAll('.nav-link')
const lifeGrid = document.querySelector('.life-grid')

function navBG() {
    // console.log(document.scrollTop);
    const winHeight = (window.innerHeight / 2) - (window.innerHeight / 7)
    if (window.scrollY > winHeight) {
        navBar.classList.add('nav--dark')
    } else {
        navBar.classList.remove('nav--dark')
    }
}

function smoothNav() {
    // console.log('you clicked the nav link')
    navBar.classList.add('nav-bar-smooth')
    setTimeout(() => {
        navBar.classList.remove('nav-bar-smooth')
    }, 20)
}

function highlightNavLink() {
    navLinks.forEach(navLink => navLink.classList.toggle('nav-link-dark'))
}

function hamburgerBtn() {
    console.log('Hamburger Clicked')
}

function portTitleAppear() {
    const portTitle = this.querySelector('.port-title')
    const portButton = this.querySelector('.port-button')
    this.classList.toggle('port-slide-active')
    portTitle.classList.toggle('port-title-active')
    portButton.classList.toggle('port-button-active')
}

function addLifeGrid() {
    const gridSize = window.innerWidth > 900 ? 9 : window.innerWidth > 768 ? 6 : 3
    let addToGrid = ''
    for (let i = 0; i < gridSize; i++) {
        addToGrid = addToGrid + '<div class="life-box" style="background-image: url(https://picsum.photos/100/100/?random)">Grid Box ' + (i + 1) + '</div>'
    }
    lifeGrid.innerHTML = addToGrid
}


window.addEventListener('scroll', navBG);
window.addEventListener('resize', addLifeGrid)
portSlides.forEach(portSlide => portSlide.addEventListener('mouseenter', portTitleAppear))
portSlides.forEach(portSlide => portSlide.addEventListener('mouseleave', portTitleAppear))
// navList.addEventListener('mouseenter', highlightNavLink)
// navList.addEventListener('mouseleave', highlightNavLink)
navLinks.forEach(navLink => navLink.addEventListener('click', smoothNav))
addLifeGrid()