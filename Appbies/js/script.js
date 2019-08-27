$(document).ready(function(){
    const slider = $(".owl-carousel");
    slider.owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            992:{
                items:3
            }
        }
    })

    $('.left-arrow').click(function(){
        slider.trigger('prev.owl.carousel')
    })

    $('.right-arrow').click(function(){
        slider.trigger('next.owl.carousel')
    })

    function Scroll(target, duration){
        var target1 = document.querySelector(target);
        var targetPos;
        if(target === '#features'){
            targetPos = target1.getBoundingClientRect().top + 145;
        }
        if(target === '#about'){
            targetPos = target1.getBoundingClientRect().top + 225;
        }
        if(target === '#screenshot'){
            targetPos = target1.getBoundingClientRect().top + 174;
        }
        if(target === '#team'){
            targetPos = target1.getBoundingClientRect().top + 245;
        }
        if(target === '#updates'){
            targetPos = target1.getBoundingClientRect().top + 345;
        }
        if(target === '#contact'){
            targetPos = target1.getBoundingClientRect().top + 200;
        }
        var startPos = window.pageYOffset;
        var distance = targetPos - startPos;
        var startTime = null;

        function animationScroll(currentTime){
            if(startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPos, distance, duration);
            window.scrollTo(0, run);
            if(timeElapsed < duration) requestAnimationFrame(animationScroll);
        }
        function ease(t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t + b;
            t -= 2;
            return c/2*(t*t*t + 2) + b;
        };


        requestAnimationFrame(animationScroll);
    }

    var featuresBtn = document.querySelector(".features-btn");

    featuresBtn.addEventListener('click', function(){
        Scroll('#features', 1000);
    })

    var screenshotBtn = document.querySelector(".screenshot-btn");

    screenshotBtn.addEventListener('click', function(){
        Scroll('#screenshot', 1000);
    })

    var aboutBtn = document.querySelector(".about-btn");

    aboutBtn.addEventListener('click', function(){
        Scroll('#about', 1000);
    })

    var teamBtn = document.querySelector(".team-btn");

    teamBtn.addEventListener('click', function(){
        Scroll('#team', 1000);
    })

    var updatesBtn = document.querySelector(".updates-btn");

    updatesBtn.addEventListener('click', function(){
        Scroll('#updates', 1000);
    })

    var contactBtn = document.querySelector(".contact-btn");

    contactBtn.addEventListener('click', function(){
        Scroll('#contact', 1000);
    })



    $('.menu-btn').on('click', function(e){
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu').css({"display" : "inline-block"});
    })
})
