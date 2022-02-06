$(document).ready(function() {
    $(".slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots: false,
        fade:true,
        easing:'ease',
        asNavFor: '.journey__slider'
    })
    $(".journey__slider").slick({
        slidesToShow:3,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        dots:true,
        easing:'ease',
        variableWidth: true
        
    });
});