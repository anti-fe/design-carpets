export default function accordion() {
    const accordionCont = document.querySelector('.steps__accordion');
    accordionCont.addEventListener('click', (e) => {
        const allAccordionItems = document.querySelectorAll('.steps__item');
        const itemTarget = e.target;
        if(itemTarget.closest('.steps__item-header')) {
            const accordionItem = itemTarget.closest('.steps__item');
            if(accordionItem.classList.contains('steps__item_active')) {
                accordionItem.classList.remove('steps__item_active');
                return;
            }
            // Закрытие предыдущего открытого аккордеона
            allAccordionItems.forEach(item => {
                if(item.classList.contains('steps__item_active')) {
                    item.classList.remove('steps__item_active');
                }
            })
            // Открытие аккордеона по которому был сделан клик
            accordionItem.classList.add('steps__item_active');
        }
    })
}