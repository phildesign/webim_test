$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass('header_fixed');
        }
        else {
            $('.header').removeClass('header_fixed');
        }
    });

    $('.mobile-nav').click(function () {
        $('.header__content').slideToggle('slow', function () {
        });
    });

});
