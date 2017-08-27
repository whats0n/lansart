//brands
(function() {
	var brands = $('.js-brands-slider'),
		brandsPrev = $('.js-brands-prev'),
		brandsNext = $('.js-brands-next');

	brands.slick({
		variableWidth: true,
		arrows: true,
		slidesToShow: 5,
		prevArrow: brandsPrev,
		nextArrow: brandsNext,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					arrows: false
				}
			}
		]
	});
})();