//regions popup
(function() {
	var regionOpen = $('.js-region-open'),
		region = $('.js-region'),
		regionName = $('.js-region-name'),
		regionBack = $('.js-region-back');

	regionOpen.click(function() {
		if (mobileWidth()) {
			var name = $(this).text();
			region.addClass('is-open');
			regionName.text(name);
			region.find('.js-scrollbar').perfectScrollbar('update');
		};
	});

	regionBack.click(function() {
		if (mobileWidth()) {
			region.removeClass('is-open');
		}
		return false;
	});

	$('.js-popup-region').on('hide.bs.modal', function () {
		region.removeClass('is-open');
	});
})();