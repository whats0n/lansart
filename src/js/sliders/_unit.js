//similar

var unitSection = $('.js-unit');

function Unit(config) {
	this.section = config.section;
	this.slider = this.section.find('.js-unit-slider');

	this.prev = this.section.find('.js-unit-prev'),
	this.next = this.section.find('.js-unit-next');

	// if (!this.section.parents('.js-tab-content').length) {
		this.addSlider();
	// };
};

Unit.prototype.addSlider = function() {
	var prev = this.prev,
		next = this.next;

	this.slider.slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: prev,
		nextArrow: next,
		// useTransform: false,
		responsive: [
			{
				breakpoint: 1080,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					variableWidth: true,
					centerMode: true,
					centerPadding: '0'
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					variableWidth: true,
					centerMode: true,
					centerPadding: '0'
				}
			}
		]
	});
};

unitSection.each(function() {
	new Unit({
		section: $(this)
	});
});