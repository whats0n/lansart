(function() {

	var classes = {
		spinner: 'spinner',
		icons: {
			plus: 'spinner__plus',
			minus: 'spinner__minus'
		}
	};

	function Spinner(config) {
		this._input = config.field;
		this._min = this._input.data('min') || 0;
		this._max = this._input.data('max') || null;
		this._value = this._min;

		this._buildDOM(config);
		this._changeOnClick();
		this._onChange();
	}

	Spinner.prototype._buildDOM = function(config) {
		//add wrapper
		this._wrapper = this._input
			.wrap('<div class="' + classes.spinner + '"></div>')
			.parent('.' + classes.spinner);
		//add buttons
		this._plus = this._wrapper
			.append('<button class="' + classes.icons.plus + '"></button>')
			.find('.' + classes.icons.plus);
		this._minus = this._wrapper
			.append('<button class="' + classes.icons.minus + '"></button>')
			.find('.' + classes.icons.minus);
		//add icons
		if (config.icons) {
			this._plus.append(config.icons.plus);
			this._minus.append(config.icons.minus);
		}
	};

	Spinner.prototype._changeOnClick = function() {
		var that = this;
		this._plus.click(function(e) {
			e.preventDefault();
			that._changeValue('up');
		});
		this._minus.click(function(e) {
			e.preventDefault();
			that._changeValue('down');
		});
	};

	Spinner.prototype._changeValue = function(direction) {
		var currentValue = this._input.val();

		switch (direction) {
			case 'up':
				currentValue++;
				break;
			case 'down':
				currentValue--;
				break;
		}

		if (currentValue < this._min || isNaN(currentValue)) currentValue = 0;
		if (!!this._max && currentValue > this._max) currentValue = this._max;

		this._value = currentValue;
		this._input.val(this._value);
		this._input.trigger('change');
	};

	Spinner.prototype._onChange = function() {
		var that = this;

		this._input.change(function(e) {
			if (isNaN(that._input.val())) that._input.val(0);
		});
	};

	$('.js-spinner').each(function() {
		new Spinner({
			field: $(this),
			icons: {
				plus: '<svg version="1.1" x="0px" y="0px" viewBox="1 1 12 7" enable-background="new 1 1 12 7" xml:space="preserve"><path d="M2.7,7.7l5-5H6.3l5,5c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4l-5-5c-0.4-0.4-1-0.4-1.4,0l-5,5c-0.4,0.4-0.4,1,0,1.4S2.3,8.1,2.7,7.7z"/></svg>',
				minus: '<svg version="1.1" x="0px" y="0px" viewBox="1 1 12 7" enable-background="new 1 1 12 7" xml:space="preserve"><path d="M1.3,2.7l5,5c0.4,0.4,1,0.4,1.4,0l5-5c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-5,5h1.4l-5-5c-0.4-0.4-1-0.4-1.4,0S0.9,2.3,1.3,2.7z"/></svg>'
			}
		});
	});

})();