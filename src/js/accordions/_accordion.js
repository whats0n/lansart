//accordion footer
(function() {

	function Accordion(config) {
		this.accordionBtn = $(config.accordionBtn);
		this.accordionBlock = $(config.accordionBlock);
		this.accordionFlag = false;

		this.init();
	};
	Accordion.prototype._hideAllAccordion = function() {
		this.accordionBtn.removeClass('is-active');
		this.accordionBlock.stop(true, true).slideUp('fast');
	};
	Accordion.prototype._showAccordion = function(el) {
		el.addClass('is-active');
		el.siblings('.js-accordion-block').stop(true, true).slideDown('fast');
	};
	Accordion.prototype._click = function() {
		this.accordionBtn.each(function(i, item) {
			$(item).click(function() {

				if (tabletWidth()) {
					var el = $(item);

					if (el.hasClass('is-active')) {
						this._hideAllAccordion();
					} else {
						this._hideAllAccordion();
						this._showAccordion(el);
					};
				};

				return false;
			}.bind(this));
		}.bind(this));
	};

	Accordion.prototype.addAccordion = function() {
		if (this.accordions === false && tabletWidth()) {
			this.accordions = true;
		} else if (this.accordions === true && !tabletWidth()) {
			this.accordions = false;
			this.accordionBtn.removeClass('is-active');
			this.accordionBlock.removeAttr('style');
		};
	};

	Accordion.prototype.init = function() {
		this._click();

		win.resize(function() {
			this.addAccordion();
		}.bind(this));

		this.addAccordion();
	};

	new Accordion({
		accordionBtn: '.js-accordion-title',
		accordionBlock: '.js-accordion-block'
	});

})();