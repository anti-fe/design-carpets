export default function footer(e, footerColls) {
    const itemTarget = e.target;
    const itemParent = itemTarget.closest('.footer__col');
    
    if(itemParent.classList.contains('footer__col_active')) {
        itemParent.classList.remove('footer__col_active');
        return;
    }
    // Закрытие все секций футора
    footerColls.forEach(item => {
        if(item.classList.contains('footer__col_active')) {
            item.classList.remove('footer__col_active');
        }
    })
    itemParent.classList.add('footer__col_active')    

}