
function validateName() {
    var name = document.getElementById('contact-name').value;
    if(name.length == 0) {

        producePrompt("Вкажіть ім'я.", 'name-error' , 'red');
        return false;

    }

    if (name.length > 15) {

        producePrompt('макс. 15 символів','name-error', 'red');
        return false;

    }

    producePrompt('Дійсний', 'name-error', 'green');
    return true;

}

function validatePhone() {

    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        producePrompt('Введіть номер.', 'phone-error', 'red');
        return false;
    }


    if(!phone.match(/^[0-9]{12}$/)) {
        producePrompt('Тільки цифри.' ,'phone-error', 'red');
        return false;
    }

    producePrompt('Дійсний', 'phone-error', 'green');
    return true;
}

function validateEmail () {

    var email = document.getElementById('contact-email').value;
    var emailValidation = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    if(email.length == 0) {

        producePrompt('Введіть email.','email-error', 'red');
        return false;

    }

    if(!email.match(emailValidation)) {

        producePrompt('Email недійсний.', 'email-error', 'red');
        return false;

    }

    producePrompt('Дійсний', 'email-error', 'green');
    return true;

}


function validateForm(event) {
    event.preventDefault();
    console.log('form is sent', event);
    if (!validateName() || !validatePhone() || !validateEmail()) {
        jsShow('submit-error');
        producePrompt('Виправте помилки, щоб відправити.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;

    }

}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}

function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;

}