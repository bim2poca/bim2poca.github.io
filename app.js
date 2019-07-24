$(function () {
    $(window).scroll(function (e) { 
        e.preventDefault(); 
        if (window.pageYOffset >90) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        console.log($('header').offset().top) ;


        var vtw = window.pageYOffset;
        var vt2 = $('.khoi2').offset().top;
        var vt3 = $('.khoi3').offset().top;
        var vt4 = $('.khoi4').offset().top;

        if (vtw >= vt4) {
            $('.item').removeClass('active2');
            $('.item3').addClass('active2');
            
        } else if (vtw >= vt3) {
            $('.item').removeClass('active2');
            $('.item2').addClass('active2');
       
        } else if (vtw >= vt2) {
            $('.item').removeClass('active2');
            $('.item1').addClass('active2');
       
        } else {
            $('.item').removeClass('active2');
        }

    });

    $('.logo1').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active2');
        $('html').animate({
            scrollTop: $('.khoi1').offset().top},600);
    });
    $('.item1').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active2');
        $(this).addClass('active2');
        $('html').animate({
            scrollTop: $('.khoi2').offset().top},600);
    });
    $('.item2').click(function (e) { 
        e.preventDefault();
        $('.item').removeClass('active2'); 
        $(this).addClass('active2');
        $('html').animate({
            scrollTop: $('.khoi3').offset().top},600);
    });
    $('.item3').click(function (e) { 
        e.preventDefault(); 
        $('.item').removeClass('active2');
        $(this).addClass('active2');
        $('html').animate({
            scrollTop: $('.khoi4').offset().top},600);
    });

    
});