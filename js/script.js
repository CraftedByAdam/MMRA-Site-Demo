const menuBtn = document.querySelector('.moble-menue-icon');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu-open');
}); 