//news slider
(function() {
	var newsSlider = $('.js-news-slider'),
		newsPrev = $('.js-news-prev'),
		newsNext = $('.js-news-next');

	newsSlider.slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: newsPrev,
		nextArrow: newsNext,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					variableWidth: true,
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					variableWidth: true,
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0',
					slidesToShow: 2
				}
			}
		]
	});
})();