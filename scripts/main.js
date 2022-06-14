import slider from './slider.js';
import animations from './animations.js';
import accordion from './accordion.js';

const burgerMenuBtn = document.querySelector('.burger-menu__close-btn'),
    burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const allInputs = document.querySelectorAll('input');

//Открытие бургер меню
burgerMenuBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('burger-menu_active')
})
//Уменьшение header при скроле
window.addEventListener('scroll', (e)=>{
    window.scrollY >= 100 ? header.classList.add('header_active') : header.classList.remove('header_active');
})
//Focus input
allInputs.forEach(item => {
    item.addEventListener('focus', () => {
        item.classList.add('form__input_focus');
    })
    item.addEventListener('blur', () => {
        item.classList.remove('form__input_focus');
    })
})

animations();
accordion();