import setBurgerMenu from './burgerMenu.js';
import scrollHeader from './scrollHeader.js';

const burgerMenuBtn = document.querySelector('.burger-menu__close-btn'),
    burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');

burgerMenuBtn.addEventListener('click', ()=>{
    setBurgerMenu(burgerMenu);
})
window.addEventListener('scroll', (e)=>{
    window.scrollY >= 100 ? header.classList.add('header_active') : header.classList.remove('header_active');
})