//const menuBtn = document.querySelector('.moble-menue-icon');
//const navLinks = document.querySelector('.nav-links');

//menuBtn.addEventListener('click', () => {
//    navLinks.classList.toggle('mobile-menu-open');
//}); 

const menuBtn = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

console.log("Button found:", menuBtn); // If this says 'null', your JS can't find the button
console.log("Links found:", navLinks); // If this says 'null', your JS can't find the menu

menuBtn.addEventListener('click', () => {
    console.log("Button was clicked!"); // If this doesn't show up in the console when you click, the click isn't registering.
    navLinks.classList.toggle('active');
});