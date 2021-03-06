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
		slidesToShow: 4,
		slidesToScroll: 1,
		dots:true,
		autoplay: true,
  		autoplaySpeed: 3000,
  		responsive: [
  		{
  			breakpoint: 1700,
  			settings: {
        	slidesToShow: 3,
      		}
  		},
  		{
  			breakpoint: 1000,
  			settings: {
        	slidesToShow: 2,
      		}
  		},
  		{
  			breakpoint: 500,
  			settings: {
        	slidesToShow: 1,
      		}
  		}

  		]
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
	});


$('.tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});