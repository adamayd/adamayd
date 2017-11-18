const navBar = document.querySelector('nav');

function navBG() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        console.log('adding dark nav');
        navBar.classList.add('dark-nav');
    } else {
        console.log('removing dark nav');
        navBar.classList.remove('dark-nav');
    }
}


window.addEventListener('scroll', navBG);