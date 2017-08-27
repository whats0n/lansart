//accordion list
(function() {
	var accordion = $('.js-acc-section');

	function MobileAccordion(config) {
		this.accordion = config.accordion;
		this.title = $(this.accordion).find('.js-acc-title');
		this.list = $(this.accordion).find('.js-acc-list');
		this.added = false;

		this.init();
	};

	MobileAccordion.prototype._click = function() {
		this.title.click(function() {
			if (mobileWidth()) {
				if (!this.title.hasClass('is-active')) {
					this.title.addClass('is-active');
					this.list.stop(true, true).slideDown('fast');
				} else {
					this.title.removeClass('is-active');
					this.list.stop(true, true).slideUp('fast');
				};
			};
			return false;
		}.bind(this));
	};

	MobileAccordion.prototype._addAccordion = function() {
		if (mobileWidth() && this.added === false) {
			this.added = true;
		} else if(!mobileWidth() && this.added === true) {
			this.added = false;
			this.title.removeClass('is-active');
			this.list.removeAttr('style');
		};
	};

	MobileAccordion.prototype.init = function() {
		this._click();

		win.resize(function() {
			this._addAccordion();
		}.bind(this));

		this._addAccordion();
	};

	accordion.each(function() {
		new MobileAccordion({
			accordion: $(this)
		});
	});

})();