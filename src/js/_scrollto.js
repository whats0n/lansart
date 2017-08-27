(function() {

	var scrollTo = $('.js-scrollto'),
		scrollSection = $('.js-scroll-section');

	scrollTo.click(function() {
		var position = scrollSection.filter('[data-scroll="' + $(this).data('to') + '"]').offset().top - $('.js-mob-header').outerHeight();

		htmlBody.animate({
			scrollTop: position
		}, 700);
		
		return false;
	});

})();