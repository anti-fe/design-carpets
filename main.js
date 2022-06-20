import animations from './scripts/animations.js';
import accordion from './scripts/accordion.js';
import footer from './scripts/footer.js';
import validationForm from './scripts/validationForm.js';
import modalWindow from './scripts/modalWindow.js';
import horizontalAccordion from './scripts/horizontalAccordion.js';
import portfolio from './scripts/portfolio.js';

const burgerMenuBtn = document.querySelector('.burger-menu__close-btn'),
    burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');

const allInputs = document.querySelectorAll('input');

const footerCont = document.querySelector('.footer');
const footerColls = document.querySelectorAll('.footer__col');
const formBtn = document.querySelector('.form__btn');

const logo = document.querySelector('.header__logo');

const servicesCont = document.querySelector('.main__cards-list');
const orderCont = document.querySelector('.order__cards');
const namesList = document.querySelector('.main__list');

let localHost;

//Узнаем localHost или нет
if (["localhost", "127.0.0.1", ""].includes(window.location.hostname)) {
    localHost = true;
} else {localHost = false}

//Переход на главную страницу 
if(localHost == false) {
    logo.addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.pathname = '/design-carpets/';
    })
} else if(localHost == true) {
    logo.addEventListener('click', (e)=>{
        e.preventDefault();
        window.location.pathname = '/';
    })
}

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

//Работает только на главной странице
if(window.location.pathname == '/' ||
window.location.pathname == '/index.html' ||
window.location.pathname == '/design-carpets/' || 
window.location.pathname == '/design-carpets/index.html') {
    //Анимация главного экрана 
    animations();
    //Steps accordion
    accordion();
    //Горизонтальный аккордион 
    orderCont.addEventListener('click',(e) => {
        const item = e.target.closest('.order__card');
        if(item && !item.classList.contains('order__card_active')) {
            horizontalAccordion(item);
        }
    })
}
//Работает только на странице Портфолио
if(window.location.pathname == '/design-carpets/pages/portfolio.html' || 
window.location.pathname == '/pages/portfolio.html') {
    namesList.addEventListener('click',(e) => {
        const item = e.target.closest('.main__list-item');
        if(item && !item.classList.contains('main__list-item_active')) {
            portfolio(item);
        }
    })
}

// Footer accordion
footerCont.addEventListener('click', (e) => {
    if(e.target.closest('.footer__header')) {
        footer(e, footerColls);
    }
})
//Валидация формы
formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    validationForm(e)
})
//Модальное окно
if(window.location.pathname == '/pages/services.html' ||
window.location.pathname == '/design-carpets/pages/services.html')
servicesCont.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('main__card-btn')) {
        modalWindow();
    }
})
