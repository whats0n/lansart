//blog slider
(function() {
	var blogSlider = $('.js-blog-slider');

	function addBlogSlider() {
		var initialized = blogSlider.hasClass('slick-initialized');

		if (!tabletWidth() && initialized) {
			blogSlider.slick('unslick');
		} else if (tabletWidth() && !initialized) {
			blogSlider.slick({
				slidesToShow: 2,
				variableWidth: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							centerMode: true,
							centerPadding: '0',
							slidesToShow: 1
						}
					}
				]
			});
		};
	};

	win.resize(function() {
		addBlogSlider();
	});

	addBlogSlider();
})();
