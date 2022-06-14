import slider from './slider.js';
import animations from './animations.js';
import accordion from './accordion.js';
import footer from './footer.js';

const burgerMenuBtn = document.querySelector('.burger-menu__close-btn'),
    burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const allInputs = document.querySelectorAll('input');
const footerCont = document.querySelector('.footer');
const footerColls = document.querySelectorAll('.footer__col');

//Открытие бургер меню
burgerMenuBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('burger-menu_active')
})
//Уменьшение header при скроле
window.addEventListener('scroll', (e)=>{
    window.scrollY >= 200 ? header.classList.add('header_active') : header.classList.remove('header_active');
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
// Footer accordion
footerCont.addEventListener('click', (e) => {
    if(e.target.closest('.footer__header')) {
        footer(e, footerColls);
    }
})