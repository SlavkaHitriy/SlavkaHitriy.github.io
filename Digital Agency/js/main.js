$(document).ready(function(){

    $('.scroll-down__btn').on('click', function(){
		var top = $('#footer').offset().top;
		$('html, body').animate({
			scrollTop: top
		}, 700)
    });
    

    $('.header__burger').on('click', function(){
        $('.header__menu').toggleClass('active');
    });

})