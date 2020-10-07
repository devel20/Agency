
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

// Табы****************************************************
jQuery(document).ready(function($) {
var fActive = '';
 
function filter(tabs){
 if(fActive != tabs){
 $('.tabs-content__item').filter('.'+tabs).addClass('tabs-content__item-active');
 $('.tabs-content__item').filter(':not(.'+tabs+')').removeClass('tabs-content__item-active');
 fActive = tabs;
 }
}
 
$('.tabs-nav__item_1').click(function(){ filter('tabs-content__item_1'); });
$('.tabs-nav__item_2').click(function(){ filter('tabs-content__item_2'); });
$('.tabs-nav__item_3').click(function(){ filter('tabs-content__item_3'); });
$('.tabs-nav__item_4').click(function(){ filter('tabs-content__item_4'); });
 
$('.tabs-nav__item_all').click(function(){
 $('.tabs-content__item').addClass('tabs-content__item-active');
 fActive = 'all';
});

$('.tabs-nav__item_all').click(); 
});




