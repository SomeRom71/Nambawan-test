const $ = require('../../node_modules/jquery/dist/jquery');
window.jQuery = global.jQuery = global.$ = $;
require('../../node_modules/owl.carousel/dist/owl.carousel.min');


$(document).ready(function(){
	$('.owl-one').owlCarousel({
		items: 1,
		center: true,
		loop: true,
		autoplay: true,
		margin: 50
	});
	$('.second-carousel').owlCarousel({
		items: 1,
		center: true,
		loop: true,
		autoplay: true
	});
	$('.progress-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
		if (!e.namespace)  {
			return;
		}
		var carousel = e.relatedTarget;
		$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' / ' + carousel.items().length);
	}).owlCarousel({
		items: 1,
		center: true,
		loop: true,
		autoplay: true,
		dots: false,
		nav: true,
		navText: ['<img src="../img/prev.png">', '<img src="../img/next.png">']
	});
	$('#down').on('click', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});
