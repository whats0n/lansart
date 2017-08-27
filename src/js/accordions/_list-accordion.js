//accordion list
(function() {
	var listBtn = $('.js-list-btn');

	listBtn.click(function() {
		var that = $(this),
			list = that.siblings('.js-list');

		if ($(this).hasClass('is-active')) {
			that.removeClass('is-active');
			list.stop(true, true).slideUp('fast');
		} else {
			that.addClass('is-active');
			list.stop(true, true).slideDown('fast');
		};
		return false;
	});
})();