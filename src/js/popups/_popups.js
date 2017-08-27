//popups
(function() {
	var popupOpen = $('.js-popup-open'),
		popupBlock = $('.js-popup');

	popupOpen.click(function() {
		var that = $(this),
			id = that.data('popup');

		if (!that.hasClass('is-active')) {
			popupBlock.removeClass('is-active');
			popupOpen.removeClass('is-active');
			that.addClass('is-active');
			$('.js-popup[data-id="' + id + '"]').addClass('is-active');
		} else {
			popupBlock.removeClass('is-active');
			popupOpen.removeClass('is-active');
		}

		return false;
	});

	body.click(function(e) {
		if (!$(e.target).closest('.js-popup').length) {
			popupBlock.removeClass('is-active');
			popupOpen.removeClass('is-active');
		}
	});

})();