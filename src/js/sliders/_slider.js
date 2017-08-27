//main slider
(function(){

	var addSlider = {
		slider: $('.js-slider'),
		mainSlider: $('.js-main-slider'),
		mainAdded: false,
		sliderNumber: $('.js-slider-number'),
		slide: $('.js-slide'),
		buttonHeight: $('.js-slider-dots button').outerHeight(),
		_showActive: function(num) {
			var that = this;

			that.slide.removeClass('is-active');
			that.slide.eq(num).addClass('is-active is-animation');
			setTimeout(function() {
				that.slide.eq(num).removeClass('is-animation');
			}, 350);
		},
		_sliderInit: function() {
			var that = this;

			that.slider.on('init', function(event, slick, currentSlide, nextSlide) {
				that.sliderNumber.text('01');
				that._showActive(0);
			});

			that.slider.slick({
				fade: true,
				dots: true,
				appendDots: $('.js-slider-dots'),
				prevArrow: '.js-slider-prev',
				nextArrow: '.js-slider-next',
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							arrows: false,
							asNavFor: that.mainSlider
						}
					}
				]
			});

			$('.js-slider-dots button').html('<span></span>');
		},
		_moveNumber: function(currNum) {
			this.buttonHeight = $('.js-slider-dots button').outerHeight();
			var currTop = this.buttonHeight*currNum - this.buttonHeight;

			this.sliderNumber.css('top', currTop);
		},
		_beforeChange: function() {
			var that = this;
			this.slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
				var currNum = nextSlide + 1;

				if (nextSlide < 10) {
					that.sliderNumber.text('0' + currNum);
				} else {
					that.sliderNumber.text(currNum);
				};

				that._moveNumber(currNum);
				that._showActive(nextSlide);
			});
		},
		_addMainSlider: function() {
			var that = this;
			if (tabletWidth() && that.mainAdded === false) {
				that.mainAdded = true;
				that.mainSlider.slick({
					arrows: false,
					fade: true,
					asNavFor: that.slider
				});
			} else if (!tabletWidth() && that.mainAdded === true) {
				that.mainAdded = false;
				that.mainSlider.slick('unslick');
			};
		},
		init: function() {
			this._sliderInit();
			this._beforeChange();

			win.resize(function() {
				var currNumber = $('.js-slider-dots li.slick-active').index();
				this._moveNumber(currNumber + 1);
				this._addMainSlider();
			}.bind(this));

			this._addMainSlider();
		}
	};

	addSlider.init();
})();