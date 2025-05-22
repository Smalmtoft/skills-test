const hamburger = document.querySelector('.navigation-hamburger');
const navLinks = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});