let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Changes bars to 'X' icon
    navbar.classList.toggle('active'); // Shows/hides the menu
};

// Close menu when scrolling
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};