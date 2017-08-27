//navigation
var nav = $('.js-nav'),
	navInner = $('.js-nav-inner'),
	navBtn = $('.js-nav-btn'),
	navClose = $('.js-nav-close'),
	overlay = $('.js-overlay'),
	mobHeader = $('.js-mob-header'),
	menu = $('.js-menu'),
	menuHeight = menu.outerHeight(),
	headerVisible = false;

var navigation = {
	init: function() {
		this._navActions();
		this._showHeader();
		this._showHeaderOnScroll();
	},
	_hideNav: function() {
		navBtn.removeClass('is-active');
		nav.removeClass('is-open');
		overlay.removeClass('is-active');
		body.removeClass('is-hidden');
	},
	_showNav: function() {
		navBtn.toggleClass('is-active');
		nav.toggleClass('is-open');
		overlay.toggleClass('is-active');
		body.toggleClass('is-hidden');
	},
	_navActions: function() {
		var that = this;

		navBtn.click(function() {
			that._showNav();
			return false;
		});
		navClose.click(function() {
			that._hideNav();
			return false;
		});
		overlay.click(function() {
			that._hideNav();
			return false;
		});
		nav.click(function() {
			that._hideNav();
			return false;
		});
		navInner.click(function() {
			event.stopPropagation();
		});
	},
	_showHeader: function() {
		if (menu.length) {
			var onScreen = win.scrollTop() >= menu.offset().top + menuHeight;

			if (onScreen && headerVisible === false) {
				headerVisible = true;
				mobHeader.addClass('is-active');
			} else if (!onScreen && headerVisible === true) {
				headerVisible = false;
				mobHeader.removeClass('is-active');
			}
		}
	},
	_hideHeaderOnResize: function() {
		var that = this;
		win.resize(function() {
			that._showHeader();
		});
	},
	_showHeaderOnScroll: function() {
		var that = this;
		win.scroll(function() {
			that._showHeader();
		});
	}
};

navigation.init();
var openCity = $('.js-open-city'),
	city = $('.js-city');

openCity.click(function() {
	city.trigger('click');
	navClose.trigger('click');
	return false;
});