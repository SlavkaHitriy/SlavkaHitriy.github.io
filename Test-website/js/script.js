$(document).ready(function () {
    $('#menu__list > li').hover(function (event) {
        $(this).children("div").slideToggle();
        event.stopPropagation();
    });



    $('.burger__btn').hover(function (event) {
        $(this).children("nav").slideToggle();
        event.stopPropagation();
    });


    $('.groups__btn').on('click', function(){
        $('.groups__item:nth-child(n + 5)').css({display: 'block'})
    })

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            dots: false,
            items: 1,
            margin: 20
        });
      });
});