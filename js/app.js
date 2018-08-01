$(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo($(this).find(".carousel-inner"));
                }
            }
        }
    });
});
/*Main Slider*/
$(document).ready(function() {
    $('.thing').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 900,
        fade: true,



    });

});



function validateName() {

    var name = document.getElementById('contact-name').value;

    if(name.length == 0) {

        producePrompt("Вкажіть ім'я.", 'name-error' , 'red')
        return false;

    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        producePrompt("Прізвище та ім'я.",'name-error', 'red');
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

    if(phone.length != 10) {
        producePrompt('Введіть 10 цифр.', 'phone-error', 'red');
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Тільки цифри.' ,'phone-error', 'red');
        return false;
    }

    producePrompt('Дійсний', 'phone-error', 'green');
    return true;

}

function validateEmail () {

    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {

        producePrompt('Введіть email.','email-error', 'red');
        return false;

    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        producePrompt('Email недійсний.', 'email-error', 'red');
        return false;

    }

    producePrompt('Дійсний', 'email-error', 'green');
    return true;

}

function validateForm() {
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