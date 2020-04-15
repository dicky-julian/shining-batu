$(document).ready(function () {
    
        $(window).scroll();
        $(window).scroll(function () {
            if ($(window)
                    .scrollTop() > 10) {
                $('nav')
                        .addClass('shrink');
            } else {
                $('nav')
                        .removeClass('shrink');
            }
        });
    
        $('.navigation-menu')
                .onePageNav({
                    scrollSpeed: 750,
                    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
                    scrollOffset: 79, //Height of Navigation Bar
                    currentClass: 'active',
                    filter: ':not(.btn-very-small)'
                });
    
        setTimeout(function () {
            $(window).scroll();
        }, 500);
    
        //close navbar menu after clicking menu href
        $('ul.navbar-nav li a')
                .click(function (e) {
                    $(this)
                            .parents('div.navbar-collapse')
                            .removeClass('in');
                });
    
        // pull-menu close on href click event in mobile devices
        $('.pull-menu a.section-link')
                .click(function (e) {
                    if ($(window).width() <= 500)
                        $('#close-button').click();
                });
    
        var hash = window.location.hash.substr(1);
        if (hash != "") {
            var scrollAnimationTime = 1200,
                    scrollAnimation = 'easeInOutExpo';
    
            var target = '#' + hash;
            $('html, body').stop()
                    .animate({
                        'scrollTop': $(target)
                                .offset()
                                .top
                    }, scrollAnimationTime, scrollAnimation, function () {
                        window.location.hash = target;
                    });
        }
    
    
    
        var scrollAnimationTime = 1200,
                scrollAnimation = 'easeInOutExpo';
        $('a.scrollto').bind('click.smoothscroll', function (event) {
            event.preventDefault();
            var target = this.hash;
            $('html, body').stop()
                    .animate({
                        'scrollTop': $(target)
                                .offset()
                                .top
                    }, scrollAnimationTime, scrollAnimation, function () {
                        window.location.hash = target;
                    });
        });
    
        // Inner links
        $('.inner-link').smoothScroll({
            speed: 900,
            offset: -59
        });
        $('.section-link').smoothScroll({
            speed: 900,
            offset: 1
        });
    
        //end ready
    });
    
    function SetResizeContent() {
        var minheight = $(window).height();
        $(".full-screen").css('min-height', minheight);
    }
    SetResizeContent();
    
    $(window).resize(function () {
        SetResizeContent();
    });
    