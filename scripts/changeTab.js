export default function changeTab(btn) {
    const btnId = btn.dataset['id'];
    const allTabs = document.querySelectorAll('.modal-tabs__tab'),
        allTabsForm = document.querySelectorAll('.modal-tabs__form');
    allTabsForm.forEach(item => {
        item.classList.remove('modal-tabs__form_active')
    })
    allTabs.forEach(item => {
        item.classList.remove('modal-tabs__tab_active')
    })
    switch (btnId) {
        case '1':
            allTabs[1].classList.add('modal-tabs__tab_active');
            allTabsForm[1].classList.add('modal-tabs__form_active');
            break;
        case '2':
            allTabs[2].classList.add('modal-tabs__tab_active');
            allTabsForm[2].classList.add('modal-tabs__form_active');
            break;
    } 
}