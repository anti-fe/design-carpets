export default function animations() {
    const title = document.querySelector('.main__title'),
        btn = document.querySelector('.main__btn'); 
    //Заголовок и кнопка на первом экране
    title.classList.remove('animBottom');
    title.classList.add('animBottomNone');
    btn.classList.remove('animBottom');
    btn.classList.add('animBottomNone');
}