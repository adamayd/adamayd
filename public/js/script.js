const navBar = document.querySelector('nav');

function navBG() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        navBar.classList.add('dark-nav');
    } else {
        navBar.classList.remove('dark-nav');
    }
}


window.addEventListener('scroll', navBG);