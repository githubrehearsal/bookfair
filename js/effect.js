$(document).ready(function () {
    var ContentWidth = $('.book-fair-area').width();
    var Size = 2;
    $('.book-fair-area').css('height', ContentWidth * Size);
    $(window).resize(function () {
        var ContentWidth = $('.book-fair-area').width();
        var Size = 2;
        $('.book-fair-area').css('height', ContentWidth * Size);
    });
    /*$(window).scroll(function () { 
        var ScrollTop = $(window).scrollTop();
        var BooksPos = $('.books-list').offset().top;
        console.log(ScrollTop + '&' + BooksPos);
        if ( ScrollTop*1.25 >= BooksPos ) {
        } else {
        }
    });*/
    $('.books-fair-btn').click(function (e) { 
        $('.books-list-btn-inside').slideToggle();
        return false;
    });

    $('.top').click(function (event) {
        $('html,body').animate({ scrollTop: 0}, 1000);
        return false;
	});

    $('.menu-list').click(function (event) {
		//抓出每個連結的距離
        var SrollTop = $($(this).attr('href')).offset().top;
        var MenuHei = $('.menu').height();
        console.log(MenuHei);
        $('html,body').animate({ scrollTop: SrollTop - MenuHei}, 1000);
	});
});