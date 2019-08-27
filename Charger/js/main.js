$(document).ready(function(){

	var slider = $('.offer__slider');


	slider.on('initialized.owl.carousel', function(e){
		$('.first-number').text('0' + (e.item.index + 1))
		$('.second-number').text('0' + e.item.count)
	})


	slider.owlCarousel({
		items: 1,
		dots: false,
		loop: false,
		margin: -1,
		mouseDrag: false,
		smartSpeed: 1000
	});

	$('#prevBtn').click(function(){
		slider.trigger('prev.owl.carousel');
	})

	$('#nextBtn').click(function(){
		slider.trigger('next.owl.carousel');
	})

	slider.on('changed.owl.carousel', function(e){
		$('.first-number').text('0' + (e.item.index + 1))
		$('.second-number').text('0' + e.item.count)
		if(e.item.index + 1 === 1)
			$('.line').animate({width: "100px"}, {duration: 500})
		if(e.item.index + 1 === 2)
			$('.line').animate({width: "80px"}, {duration: 500})
		if(e.item.index + 1 === 3)
			$('.line').animate({width: "60px"}, {duration: 500})
		if(e.item.index + 1 === 4)
			$('.line').animate({width: "40px"}, {duration: 500})
		if(e.item.index + 1 === 5)
			$('.line').animate({width: "20px"}, {duration: 500})
	})


	$('.tuning').mouseover(function(){
		$('.tuning .hover-block').animate({opacity: 1}, {duration: 300});
	})
	$('.restoration').mouseover(function(){
		$('.restoration .hover-block').animate({opacity: 1}, {duration: 300});
	})
	$('.repairs').mouseover(function(){
		$('.repairs .hover-block').animate({opacity: 1}, {duration: 300});
	})
	$('.tuning').mouseleave(function(){
		$('.tuning .hover-block').animate({opacity: 0});
	})
	$('.restoration').mouseleave(function(){
		$('.restoration .hover-block').animate({opacity: 0});
	})
	$('.repairs').mouseleave(function(){
		$('.repairs .hover-block').animate({opacity: 0});
	})



	var gallery = $('.projects__gallery-slider');

	gallery.owlCarousel({
		items: 3,
		dots: false,
		mouseDrag: true,
		loop: true,
		smartSpeed: 1000
	})



	var reviews = $('.reviews__slider');

	reviews.owlCarousel({
		items: 1,
		dots: false,
		loop: true,
		margin: 100,
		smartSpeed: 500
	})

	$('#reviews__prev').click(function(){
		reviews.trigger('prev.owl.carousel');
	})

	$('#reviews__next').click(function(){
		reviews.trigger('next.owl.carousel');
	})



	$('.about-btn').on('click', function(e){
		e.preventDefault();
		var top = $('#about').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})

	$('.services-btn').on('click', function(e){
		e.preventDefault();
		var top = $('#services').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})

	$('.projects-btn').on('click', function(e){
		e.preventDefault();
		var top = $('#projects').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})

	$('.scroll-down').on('click', function(e){
		e.preventDefault();
		var top = $('#footer').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})


	$('.footer__about-btn').on('click', function(e){
		e.preventDefault();
		var top = $('#about').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})

	$('.footer__services-btn').on('click', function(e){
		e.preventDefault();
		var top = $('#services').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})

	$('.footer__projects-btn').on('click', function(e){
		e.preventDefault();
		var top = $('#projects').offset().top -110;
		$('html, body').animate({
			scrollTop: top
		}, 700)
	})
});