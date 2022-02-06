$(document).ready(function() {
    $(".welcome__slider").slick({
        slidesToShow:1,
        dots:true,
        easing:'ease',
    });
    $(".welcome__slider").on(`init reInit`, function(event, slick) {
        $(".pagecounter").text(1 + ' | ' + slick.slideCount);
    })
    $(".welcome__slider").on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $(".pagecounter").text(currentSlide + 1 + ' | ' + slick.slideCount);
    })
});