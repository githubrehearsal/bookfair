$(document).ready(function () {
    var BookFairNmae = $('.books-list-btn-show span').html();
    $('.book-fair-title').html(BookFairNmae);
    /*展開全部書展*/
    $('.books-fair-btn-more').click(function (e) {
        $('.books-fair-all').stop().slideToggle(1000);
        $(this).toggleClass('books-fair-all-active');
        return false;
    });

    /*書展頁籤功能*/
    $('.books-list-btn-show').click(function (e) {
        $('.book-fair-list').fadeOut(0);
        $($(this).attr('href')).fadeIn(0);
        return false;
    });
    $('.books-fair-btn li a').not('.books-fair-btn-more').click(function (e) {
        var BookFairNmae = $(this).children('span').html();
        $('.books-fair-btn li a').removeClass('books-fair-btn-active');
        $('.books-fair-all li a').removeClass('books-fair-list-active');
        $(this).addClass('books-fair-btn-active');
        $('.book-fair-title').html(BookFairNmae);
    });
    $('.books-fair-all li a').click(function (e) {
        var BookFairNmae = $(this).children('span').html();
        $('.books-fair-btn li a').removeClass('books-fair-btn-active');
        $('.books-fair-all li a').removeClass('books-fair-list-active');
        $(this).addClass('books-fair-list-active');
        $('.book-fair-title').html(BookFairNmae);
    });

    /*移動至頂端*/
    $('.top').click(function (event) {
        $('html,body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    /*各區塊頁面連結*/
    $('.menu-list').click(function (event) {
        var SrollTop = $($(this).attr('href')).offset().top;
        var MenuHei = $('.menu').height();
        $('html,body').animate({ scrollTop: SrollTop - MenuHei }, 1000);
    });
});