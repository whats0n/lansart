//form tab
(function() {
	function FormTab(config) {

		this.form = config.form;
		this.open = this.form.find(config.open);
		this.tab = this.form.find(config.tab);

		this.open.each(function(index, el) {
			if ($(el).prop('checked') === true) {
				var id = $(el).val();

				this._openForm(id);
			};
		}.bind(this));

		this._openOnChange();
	};

	FormTab.prototype._openForm = function(currentTab) {
		this.tab
			.filter('[data-id="' + currentTab + '"]')
			.addClass('is-active')
			.siblings()
			.removeClass('is-active');
	};

	FormTab.prototype._openOnChange = function() {
		var that = this;

		that.open.change(function() {
			if ($(this).prop('checked') === true) {
				var id = $(this).val();

				that._openForm(id);
			};
		});
	};

	var currentForm = $('.js-form-container');

	currentForm.each(function() {
		new FormTab({
			form: $(this),
			open: '.js-form-open',
			tab: '.js-form-tab'
		});
	});

})();