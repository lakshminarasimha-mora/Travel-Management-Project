let searchBtn = document.querySelector('#search-btn');
let searchBarContainer = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

window.onscroll = () =>{
  searchBtn.classList.remove('fa-xmark');
  searchBarContainer.classList.remove('active');
  menu.classList.remove('fa-xmark');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-xmark');
  searchBarContainer.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});
 
