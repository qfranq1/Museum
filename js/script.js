$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.welcome__text').toggleClass('active__text')
        $('.welcome__button').toggleClass('active__text')
        $('.welcome__body').toggleClass('active__body')
    });
    $( '.menu a' ).on("click", function(){
        $('.header__burger,.header__menu').toggleClass('active');
        $('.welcome__text').toggleClass('active__text')
        $('.welcome__body').toggleClass('active__body');
        $('body').toggleClass('lock');
      });
});

