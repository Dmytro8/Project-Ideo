$(function() {
    $('nav, .industries, .noisy,.services, .contact').noisy({
        intensity: 0.9,
        size: 200,
        opacity: 0.15,
        color: '#000000'
    });
    $('.input-search').hide();
    $('.fa-search').click(function () {
        $('.input-search').toggle("slide", { direction: "right" }, 500);
    });
    $('div#simple-menu-left').hide();
    $('.arrow-open').click(function () {
        $('div#menu-left').switchClass('closed-menu','open-menu','slow');
        $('div#simple-menu-left').show(300);
    });
    $('.arrow-close').click(function () {
        $('div#menu-left').switchClass('open-menu','closed-menu','slow');
        $('div#simple-menu-left').hide("slow");
    });
    $('.container').css("margin-left", 'auto');
    // if (window.matchMedia('(max-width: 1400px)').matches) {
    //     $('.arrow-open').click(function () {
    //         $('div#menu-left').switchClass('closed-menu','open-menu','slow');
    //         $('div#simple-menu-left').show(300);
    //         $('.container').animate({"margin-left": "230px"},30);
    //     });
    //     $('.arrow-close').click(function () {
    //         $('div#menu-left').switchClass('open-menu','closed-menu','slow');
    //         $('div#simple-menu-left').hide("slow");
    //         //$('.container').css("margin-left", 'auto');
    //         $('.container').animate({"margin-left": "auto"},30);
    //     });
    // }
    $("#about-carousel").owlCarousel({
        loop:false,
        autoWidth:true,
        items:1,
        nav: true
    });
    $("#news-carousel").owlCarousel({
        loop:true,
        nav:true,
        responsiveClass:true,
        responsive: {
            320: {
                items: 1,
                margin: 20
            },
            600: {
                items: 4,
                margin: 10
            },
            1000: {
                items:4,
                margin:10
            },
            1500: {
                items:4,
                autoWidth: true,
                margin: 20
            }
        }
    });
    $("#footer-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsiveClass:true,
        responsive: {
            320: {
                items: 1,
                autoWidth: false
            },
            600: {
                items:5,
                margin: 1
                //autoWidth:true
            },
            1000: {
                items:5,
                autoWidth:true
            },
            1500: {
                items:5
            }
        }
    });
    $("#contact-carousel").owlCarousel({
        margin:10,
        responsive: {
            320: {
                loop: true,
                items: 1,
                nav: true,
                mouseDrag: true,
                touchDrag: true
            },
            600: {
                items: 3,
                nav: false,
                mouseDrag: false,
                touchDrag: false
            },
            1000: {
                items:3,
                nav: false,
                mouseDrag: false,
                touchDrag: false
            },
            1500: {
                items:3,
                nav: false,
                mouseDrag: false,
                touchDrag: false
            }
        }
    });
    $("a#linkToUp").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 600,
            easing: "easeOutQuad"
        });
        return false;
    });
    //--------------------
    $('.owl-dots').wrap('<div class="container"></div>');
    //----------------------------
    //jQuery.scrollSpeed(200, 800, 'easeOutCubic');
    $(window).scroll(function() {
        if($(window).scrollTop() > 85){
            $('div#simple-menu-img img.for-tablet').css('display','none');
        }
    });
    $(window).resize(function() {
        if(document.documentElement.clientWidth < 600) {
            $('div.products-item br').remove();
        }
        if(document.documentElement.clientWidth > 600) {
        }
    });
    if (window.matchMedia('(max-width: 600px)').matches) {
        $('div.products-item br').remove();
        $('#newsletter-input').attr('placeholder','Newsletter?');
        $('nav, .industries, .noisy,.services, .contact').noisy({
            intensity: 0
        });
    }
    else{
        $('#newsletter-input').attr('placeholder', '');
    }
});
