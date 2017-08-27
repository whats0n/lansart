//select

function Select(config) {
	var select = config.item,
		optionValue = [],
		optionText = [],
		selectOption = select.find('option'),
		selectPlaceholder = config.placeholder || '',
		selectBlock = null,
		selectText = null,
		selectList = null;

	var build = {
		init: function() {
			this._createHtml();
			this._openSelect();
			this._setCurrentOption();
			this._closeSelectOnBody();
		},
		_getOption: function() {
			selectOption.each(function() {
				var that = $(this);

				optionValue.push(that.val());
				optionText.push(that.text());
			});
		},
		_createHtml: function() {

			this._getOption();

			select.wrap('<div class="my-select"></div>'); //create wrapper

			selectBlock = select.parents('.my-select');

			selectBlock.append('<div class="my-select__text"></div>'); //create text block in the wrapper
			selectBlock.append('<ul class="my-select__list"></ul>'); //create list in the wrapper
			selectBlock.append('<i></i>'); //create icon in the wrapper

			selectList = select.siblings('.my-select__list');
			selectText = select.siblings('.my-select__text');

			//add a placeholder if it exists
			if (selectPlaceholder.length != 0) {
				select.siblings('.my-select__text').addClass('is-placeholder').text(selectPlaceholder);
			} else {
				select.siblings('.my-select__text').text(optionText[0]);
			};

			//create list items
			for (var i = 0; i < optionValue.length; i++) {
				selectList.append('<li data-value="' + optionValue[i] + '">' + optionText[i] + '</li>');
			};

			if (selectPlaceholder.length == 0) {
				selectList.find('li').eq(0).addClass('is-active');
			};
		},
		_closeAllSelects: function() {
			$('.my-select').removeClass('is-open');
			$('.my-select__list').removeClass('is-open');
			$('.js-color').removeClass('is-open');
		},
		_closeSelect: function() {
			select.parents('.my-select').removeClass('is-open');
			select.siblings('.my-select__list').removeClass('is-open');
		},
		_openSelect: function() {
			var that = this;

			selectText.click(function(event) {
				if (selectBlock.hasClass('is-open')) {
					that._closeSelect();
				} else {
					that._closeAllSelects();
					selectBlock.addClass('is-open');
					selectList.addClass('is-open');
				};
				event.stopPropagation();
			});
		},
		_setCurrentOption: function() {
			var that = this;

			selectList.find('li').click(function(event) {
				var currText = $(this).text(),
					currValue = $(this).data('value').toString();

				selectList.find('li').removeClass('is-active');
				$(this).addClass('is-active');

				that._closeAllSelects();
				select.find('option').each(function() {
					if ($(this).val() === currValue) {
						$(this).prop('selected', true);
					} else {
						$(this).prop('selected', false);
					};
				});
				select.trigger('change');
				event.stopPropagation();
			});

			select.change(function() {
				var currText= $(this).find('option:selected').text(),
					currValue = $(this).find('option:selected').val();

				selectText.text(currText).removeClass('is-placeholder');

				selectList.find('li').removeClass('is-active');
				selectList.find('li[data-value="' + currValue + '"]').addClass('is-active');
			});
		},
		_closeSelectOnBody: function() {
			var that = this;

			body.click(function() {
				that._closeAllSelects();
			});
		}
	};
	build.init();
};

$('.js-select').each(function() {
	new Select({
		item: $(this),
		placeholder: $(this).attr('placeholder')
	});
});

//dropdown like a select
function Dropdown(options) {
	var config = options || {},
		dropdown = config.item,
		dropdownText = dropdown.find('.js-dropdown-text'),
		dropdownList = dropdown.find('.js-dropdown-list'),
		dropdownItem = dropdown.find('.js-dropdown-list li'),
		that = this;

	this._openDD = function() {
		dropdownText.click(function() {
			if (dropdown.hasClass('is-active')) {
				that._closeDD();
			} else {
				that._closeDD();
				dropdown.addClass('is-active');
			};
			return false;
		});
	},
	this._closeDD = function() {
		$('.js-dropdown').removeClass('is-active');
	},
	this._closeOnBody = function() {
		body.click(function() {
			that._closeDD();
		});
	},
	this._changeValue = function() {
		dropdownItem.click(function() {
			dropdownItem.removeClass('is-active');
			$(this).addClass('is-active');
			dropdown.removeClass('is-active');
			dropdownText.text($(this).text());
			return false;
		});
	},
	this.init = function() {
		that._openDD();
		that._closeOnBody();
		that._changeValue();
	}

	this.init();

};

$('.js-dropdown').each(function() {
	new Dropdown({
		item: $(this)
	});
});