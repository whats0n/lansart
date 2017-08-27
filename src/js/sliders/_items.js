//items
(function() {
	var items = $('.js-items'),
		itemAdd = $('.js-item-add');

	var addItem = $('.js-add-item');

	addItem.click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-active');;
	});

	itemAdd.click(function() {
		$(this).parents('.js-item').toggleClass('is-active');
		return false;
	});

	function Items(options) {
		var config = options || {},
			section = config.section || $('.js-items'),
			hiddenBlock = section.find('.js-items-block');

		this.slider = section.find('.js-items-slider');
		this.slides = [];
		this.slide = section.find('.js-items-slide');
		this.hiddenItem = section.find('.js-items-hidden');

		this.slide.each(function(i, item) {
			if (!$(item).hasClass('slick-cloned')) {
				this.slides.push($(item));
			};
		}.bind(this));

		this.init();
	};

	Items.prototype._hideItems = function() {

		this.hiddenItem.each(function() {
			var that = $(this);

			if (!that.hasClass('is-hidden')) {
				that.appendTo('.js-items-block').addClass('is-hidden');
			};
		});

	};

	Items.prototype._showItems = function() {

		this.hiddenItem.each(function(i, item) {
			var that = $(item),
				currentNumber = $(item).data('after');

			this.slides[currentNumber].after(that);
			that.removeClass('is-hidden');
		}.bind(this));

	};

	Items.prototype._addSlider = function() {
		var initialized = this.slider.hasClass('slick-initialized');

		if (!tabletWidth() && initialized) {
			this.slider.slick('unslick');
			this._showItems();
		} else if (tabletWidth() && !initialized) {
			this._hideItems();
			this.slider.slick({
				infinity: true,
				slidesToShow: 4,
				variableWidth: true,
				arrows: false,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							initialSlide: 3,
							centerMode: true,
							centerPadding: '0'
						}
					}
				]

			});
		};
	};

	Items.prototype.init = function() {
		win.resize(function() {
			this._addSlider();
		}.bind(this));

		this._addSlider();
	};

	items.each(function() {
		new Items({
			section: $(this)
		});
	});

})();