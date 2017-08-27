//tabs
(function() {
	var tabSection = $('.js-tabs');

	function Tab(config) {
		this.section = $(config.section);
		this.tabLink = this.section.find('.js-tab-link');
		this.tabContent = this.section.find('.js-tab-content');
		this.tabSelect = this.section.find('.js-tab-select');
		this.tabUnit = this.tabContent.find('.js-unit');
		this.shadowLink = $('.js-tab-link-shadow');

		this.init();
	}

	Tab.prototype._showOnLoad = function() {
		this.tabLink.eq(0).addClass('is-active');
		this.tabContent.eq(0).addClass('is-active');
		this.unitFirst = this.tabContent.eq(0).find('.js-unit');

		if (this.unitFirst.length && !this.unitFirst.hasClass('slick-initialized')) {
			this.tabContent.eq(0).find('.js-unit').each(function() {
				new Unit({
					section: $(this)
				});
			});
		}
	};

	Tab.prototype._showOnClick = function() {
		var that = this;

		that.tabLink.click(function() {
			var currTab = $(this).data('href');

			that.tabSelect.find('option').prop('selected', false);
			that.tabSelect.find('option[value="' + currTab + '"]').prop('selected', true);

			that.tabSelect.trigger('change');
			return false;

		});

		that.shadowLink.click(function() {
			var currName = $(this).data('href'),
				position = that.section.offset().top - $('.js-mob-header').outerHeight();

			that.tabLink.filter('[data-href="' + currName + '"]').trigger('click');
			htmlBody.animate({
				scrollTop: position
			}, 700);

			return false;
		});
	};

	Tab.prototype._showOnSelect = function() {
		this.tabSelect.each(function(i, item) {
			$(item).change(function() {
				var currVal = $(item).val();

				this.tabLink.removeClass('is-active');
				this.section.find('.js-tab-link[data-href="' + currVal + '"]').addClass('is-active');

				this.tabContent.removeClass('is-active');
				this.section.find('.js-tab-content[data-tab="' + currVal + '"]').addClass('is-active');

			}.bind(this));
		}.bind(this));
	};

	Tab.prototype.init = function() {
		this._showOnLoad();
		this._showOnClick();
		this._showOnSelect();
	};

	tabSection.each(function() {
		new Tab({
			section: $(this)
		});
	});
})();