export default function modalTabs(tab) {
    const tabForms = document.querySelectorAll('.modal-tabs__form');
    const tabs = document.querySelectorAll('.modal-tabs__tab');
    const tabId = tab.dataset['id'];
    
    tabForms.forEach(item => {
        item.classList.remove('modal-tabs__form_active')
    })
    tabs.forEach(item => {
        item.classList.remove('modal-tabs__tab_active')
    })
    tabForms.forEach(item => {
        if(item.dataset['id'] === tabId) {
            item.classList.add('modal-tabs__form_active')
            tab.classList.add('modal-tabs__tab_active')
        } 
    })
}