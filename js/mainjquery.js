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