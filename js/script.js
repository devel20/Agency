
// burger JQ **************************************************
jQuery(document).ready(function($) {
  $('.header__burger').click(function() {
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
  });
let link = $('a[href]');
    $(link).click(function(){
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

// плавный переход к якорю ***********************************
$(document).ready(function(){
$(".header__menu").on("click","a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
event.preventDefault();
//забираем идентификатор бока с атрибута href
var id = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;
//анимируем переход на расстояние - top за 1000 мс
$('body,html').animate({scrollTop: top - 50}, 1000);
});
});

// якорь вверх ***********************************************
jQuery(document).ready(function($) {
$(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').css({opcity: 1}).fadeIn('slow');
        } else { $('.scroll-top').stop(true, false).fadeOut('fast'); }
    });
    $('.scroll-top').click(function() {
        $('html, body').stop().animate({scrollTop : 0}, 300);
    });
});

// ******************************************************

