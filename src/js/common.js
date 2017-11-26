$(document).ready(function() {
	//=include _media.js

	//HEADER
	//=include header/_nav.js

	//=include header/_menu.js

	//=include header/_search.js
	//END HEADER

	//SLIDERS
	//=include sliders/_slider.js

	//=include sliders/_boxes.js

	//=include sliders/_items.js

	//=include sliders/_catalog.js

	//=include sliders/_gallery.js

	//=include sliders/_brands.js

	//=include sliders/_news.js

	//=include sliders/_blog.js

	//=include sliders/_unit.js
	//END SLIDERS

	//POPUPS
	//=include popups/_bs-modals.js

	//=include popups/_region.js

	//=include popups/_popups.js
	//END POPUPS

	//ACCORDIONS
	//=include accordions/_accordion.js

	//=include accordions/_list-accordion.js

	//=include accordions/_card-features.js
	//END ACCORDIONS

	//=include _scrollbar.js

	//=include _up.js

	//=include _scrollto.js

	//=include _tooltip.js

	//TABS

	//=include tabs/_tabs.js

	//END TABS

	//=include _cut-text.js

	//FORMS
	//=include forms/_select.js

	//=include forms/_choose-color.js
	//=include forms/_view-color.js
	//=include forms/_choose-set.js

	//=include forms/_range-slider.js

	//=include forms/_filters.js

	//=include forms/_rating.js

	//=include forms/_datepicker.js

	//=include forms/_form-tab.js

	//=include forms/_spinner.js
	//END FORMS

	$('[data-disable]').on('change', function() {
		var $this = $(this);
		var checked = $this.prop('checked');
		var target = $this.data('disable');
		var button = $('[data-target="' + target + '"]');
		if (checked) button.attr('disabled', false);
		if (!checked) button.attr('disabled', true);
	});

	$('[data-showonchange]').on('change', function() {
		var $this = $(this);
		var checked = $this.prop('checked');
		var target = $this.data('showonchange');
		var container = $('[data-container="' + target + '"]');
		if (checked) container.css('display', 'block');
		if (!checked) container.css('display', 'none');
	});

	$('[data-mask]').each(function() {
		var $this = $(this);
		var placeholder = $this.attr('placeholder');
		var dataPlaceholder = $this.attr('data-placeholder');
		var format = $this.data('mask');
		$this.mask(format); 
	});

	//form callback
	$('.js-form-submit').each(function() {
		var $this = $(this);
		var $openPopup = $this.data('submit');
		var $custom = $this.closest('.js-popup');
		var $bootstrap = $this.closest('.modal');
		var $link = $('.js-popup-open[data-popup="' + $custom.data('id') + '"]');
		if ($bootstrap.length) $bootstrap.on('hidden.bs.modal', function () {
			$($openPopup).modal('show');
		});

		$this.on('submit', function(e) {
			e.preventDefault();
			if ($custom.length) {
				$custom
					.add($link)
					.removeClass('is-active');
				$($openPopup).modal('show');
			} else if ($bootstrap.length) {
				$bootstrap.modal('hide');
			}
		});
	});
});