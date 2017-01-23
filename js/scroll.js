$(document).ready(function() {

    $('a[href^="#s-"]').click(function(){
        //Сохраняем значение атрибута href в переменной:
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 500);
        return false;
    });

});
