$(document).ready(function () {
    function o(o) {
        o.matches ? $(document).ready(function () {
            $(".scrollsmooth").click(function (o) {
                o.preventDefault();
                var e = +$($(this).attr("href")).offset().top;
                $("body, html").animate({
                    scrollTop: e
                }, 800)
            })
        }) : $(document).ready(function () {
            $(".scrollsmooth").click(function (o) {
                o.preventDefault();
                var e = +$($(this).attr("href")).offset().top;
                $("body, html").animate({
                    scrollTop: e
                }, 800)
            })
            })
    }
	
	$(".nav-icon").click(function () {
        $(".nav-icon").toggleClass("open");
        $(".menu-responsive").toggleClass("active");
    });
	$(".scrollsmooth").click(function () {
        $(".nav-icon").removeClass("open");
        $(".menu-responsive").removeClass("active");
    });
	$(".toggle-btn").click(function(){
        var target = $(this).parent().children(".toggle-content");
        var target2 = $(this).parent().children(".toggle-btn");
        $(target).slideToggle();
        $(target2).toggleClass('active');
    }); 
    $(window).scroll(function () {
        250 <= $(this).scrollTop() ? $(".gototop").fadeIn(250) : $(".gototop").fadeOut(250)
      });
    $(".gototop").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1e3)
    });
        var e = window.matchMedia("(max-width: 1080px)");
        o(e), e.addListener(o)
});