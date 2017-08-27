//boxes slider
(function () {
	var boxes = $('.js-boxes');

	boxes.slick({
		prevArrow: '.js-boxes-prev',
		nextArrow: '.js-boxes-next',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					variableWidth: true,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					slidesToShow: 3,
					centerMode: true,
					centerPadding: '0'
				}
			}
		]
	});
})();