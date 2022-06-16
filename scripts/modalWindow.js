import validationForm from "./validationForm.js";

export default function modalWindow() {
    document.body.style.overflow = 'hidden';
    const modalBtn = document.querySelector('.modal-window__btn');
    const modalBg = document.querySelector('.bg-modal');
    const modalInputs = modalBg.querySelectorAll('input');

    modalBg.addEventListener('click', (e) => {
        if(!e.target.closest('.modal-window')) {
            modalBg.classList.remove('bg-modal_active');
            document.body.style.overflow = 'auto';
            modalInputs.forEach(item => {
                item.value = ''
                item.style.outline = 'none';
                item.parentElement.querySelector('.form__input-error').innerHTML = '';
            })
        }
    })
    modalBg.classList.add('bg-modal_active');
    
    modalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        validationForm(e);
    })
}