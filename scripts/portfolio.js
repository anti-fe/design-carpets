export default function portfolio(item) {
    const allItems = document.querySelectorAll('.main__list-item');
    const itemId = item.dataset["id"];
    const allItemsContent = document.querySelectorAll('.main__card');
    allItems.forEach(el => {
        el.classList.remove('main__list-item_active');
    });
    item.classList.add('main__list-item_active');
    allItemsContent.forEach(el => {
        el.classList.remove('main__card_active');
        if(el.dataset["id"] === itemId) {
            el.classList.add('main__card_active');
        }
    })
}