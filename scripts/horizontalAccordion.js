export default function horizontalAccordion(item) {
    const orderItems = document.querySelectorAll('.order__card');
    const itemText = item.querySelector('.order__card-text');
    const itemSlider = item.querySelector('.order__slider');

    itemText.style.position = "static";
    itemSlider.style.position = "relative";
    orderItems.forEach(a => {
        if(a.classList.contains('order__card_active')) {
            a.classList.remove('order__card_active');
            a.querySelector('.order__card-text').style.position = 'absolute';
            a.querySelector('.order__slider').style.position = 'absolute';
        } 
    })
    item.classList.add('order__card_active');
}