let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

// Handle Search Bar Toggle
searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
};

// Handle Mobile Menu Toggle
menu.onclick = () => {
    menu.classList.toggle('fa-times'); // Changes bars to 'X'
    navbar.classList.toggle('active'); // Slides menu down
};

// Clean up: Close everything when the user scrolls
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};