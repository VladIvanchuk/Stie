//Шапка

$(window).scroll(function() {
  if ($(this).scrollTop() > 1){
  $('header').addClass("sticky");
  }
  else{
  $('header').removeClass("sticky");
}
});

//Слайдер 

$(document).ready(function(){

	$('.slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 1500,
  		pauseOnFocus:false,
  		pauseOnHover:false,
	});
});

$(document).ready(function(){

	$('.slider__news').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots:true,
		autoplay: true,
  		autoplaySpeed: 3000,
	});
});


//ПЛАВНИЙ СКРОЛ
$(document).ready(function () {

	$('.nav [href^="#"]').click(function () {
			var target = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 600);
			return false;
		});

	var btn = $('#btnup');

//НА ВЕРХ	

	$(window).scroll(function() {
	  if ($(window).scrollTop() > 700) {
	    btn.addClass('show');
	  } else {
	    btn.removeClass('show');
	  }
	});

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});



$(window).on('load', function () {
    $preloader = $('.mask'),
    $loader = $preloader.find('mask');
    $loader.fadeOut();
    $preloader.delay(1300).fadeOut('slow');
    });

new WOW().init();
});