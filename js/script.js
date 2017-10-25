
function darkNav(ev) {
    // document.querySelector('nav a').style.color = '#888';
    navLinks.forEach(navLink => navLink.style.color = '#888888');
    ev.path[0].style.color = '#ffffff';
}

function lightNav(ev) {
    navLinks.forEach(navLink => navLink.style.color = '#ffffff');
}

const navs = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('nav a');
navs.forEach(nav => nav.addEventListener('mouseover', darkNav));
navs.forEach(nav => nav.addEventListener('mouseleave', lightNav));
