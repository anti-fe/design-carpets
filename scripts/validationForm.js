export default function validationForm(e) {
    const btn = e.target;

    const nameInput = btn.parentElement.querySelector('input[type="text"]'),
        phoneInput = btn.parentElement.querySelector('input[type="tel"]');
    //RegEx
    const regExName = /^[A-Za-zА-Яа-я ,.'-]+$/,
        regExPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    //INPUT NAME
    if(nameInput.value.trim() === '') {
        setError(nameInput, 'Поле Имя обязательное!');
    } else if (!regExName.test(nameInput.value.trim())) {
        setError(nameInput, 'Введите корректное имя!');
    } else if (nameInput.value.trim().length < 3 || nameInput.value.trim().length > 16) {
        setError(nameInput, 'от 3 до 16 букв!');
    } else {setSuccess(nameInput)}
    //INPUT PHONE
    if(phoneInput.value.trim() === '') {
        setError(phoneInput, 'Поле Телефон обязательное!');
    } else if (!regExPhone.test(phoneInput.value.trim())) {
        setError(phoneInput, 'Введите корректный номер!');
    } else {setSuccess(phoneInput)}
    //Появление error
    function setError(input, message) {
        const error = input.parentElement.querySelector('.form__input-error');
        error.innerText = message;
        input.style.outline = 'none';
        input.style.outline = '1px solid #e74c3c';
    }
    //Появление success
    function setSuccess(input) {
        const error = input.parentElement.querySelector('.form__input-error');
        input.style.outline = 'none';
        input.style.outline = '1px solid green';
        error.innerHTML = '';
    }
    //Если ошибок нет
    const allErrors = btn.parentElement.querySelectorAll('.form__input-error');
    if(allErrors[0].innerHTML === '' && allErrors[1].innerHTML === '') {
        setTimeout(()=>{window.location.reload()}, 1000);
    }
} 