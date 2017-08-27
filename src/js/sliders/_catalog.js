//catalog and favorite sliders
(function() {

	var catalogSlider = $('.js-catalog-slider'),
		favoriteSlider = $('.js-favorite-slider'),
		catalogAdded = false,
		favoriteAdded = false;

	function addCatalogSlider() {
		if (tabletWidth() && catalogAdded === false) {
			catalogAdded = true;

			catalogSlider.each(function() {
				var that = $(this);

				if (!that.hasClass('slick-initialized')) {
					that.slick({
						variableWidth: true,
						arrows: false,
						slidesToShow: 4
					});
				};
			});
		} else if (!tabletWidth() && catalogAdded === true) {
			catalogAdded = false;

			catalogSlider.each(function() {
				var that = $(this);
				if (that.hasClass('slick-initialized')) {
					that.slick('unslick');
				};
			});
		}
	}

	function addFavoriteSlider() {

		var sliderOn = tabletWidth() && !mobileWidth() && favoriteAdded === false && !favoriteSlider.hasClass('slick-initialized'),
			sliderMobileOff = mobileWidth() && favoriteAdded === true && favoriteSlider.hasClass('slick-initialized'),
			sliderOff = sliderMobileOff || !tabletWidth() && favoriteAdded === true && favoriteSlider.hasClass('slick-initialized');

		if (sliderOn) {
			favoriteAdded = true;

			favoriteSlider.slick({
				variableWidth: true,
				arrows: false,
				slidesToShow: 4,
				centerMode: true,
				centerPadding: false
			});
		} else if (sliderOff) {
			favoriteAdded = false;

			favoriteSlider.slick('unslick');
		}
	}

	win.resize(function() {
		addCatalogSlider();
		addFavoriteSlider();
	});

	addCatalogSlider();
	addFavoriteSlider();

})();

