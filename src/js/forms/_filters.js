//filters
var filtersOpen = $('.js-filters-open'),
	filters = $('.js-filters'),
	filtersScroll = false;

filtersOpen.click(function() {
	var that = $(this);
	if (that.hasClass('is-active')) {
		that.removeClass('is-active');
		body.removeClass('filters-open');
	} else {
		that.addClass('is-active');
		body.addClass('filters-open');
	};
	return false;
});

overlay.click(function() {
	if (mobileWidth()) {
		body.removeClass('filters-open');
		filtersOpen.removeClass('is-active');
	};
});

function filtersPopup() {
	if (mobileWidth() && filtersScroll === false) {
		filtersScroll = true;
		filters.perfectScrollbar();
	} else if (!mobileWidth() && filtersScroll === true) {
		filtersScroll = false;
		filters.perfectScrollbar('destroy');
	};
};

win.resize(function() {
	filtersPopup();
});

filtersPopup();