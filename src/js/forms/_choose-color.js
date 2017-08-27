(function() {

	var parentClass = 'js-choose-colors';
		chooseColorsModal = $('.' + parentClass);

	function ChooseColors(parent) {

		this._parent = parent;
		this._form = this._parent.find('.' + parentClass + '-form');
		this._section = this._parent.find('.' + parentClass + '-section');

		this._modal = this._parent.find('.' + parentClass + '-modal');
		this._preview = this._parent.find('.' + parentClass + '-preview');
		this._heading = this._parent.find('.' + parentClass + '-heading');
		this._description = this._parent.find('.' + parentClass + '-description');
		this._close = this._parent.find('.' + parentClass + '-close');

		this._select = $('.' + parentClass + '-select');
		this._selectText = this._select.find('.' + parentClass + '-text');


		this._iconName = '.' + parentClass + '-icon';
		this._inputName = '.' + parentClass + '-input';

		this._itemName = '.' + parentClass + '-item';

		this._imgName = '.' + parentClass + '-img';
		this._infoName = '.' + parentClass + '-info';

		this._active = 'is-active';

		this._formSubmit();
		this._setActive();
		this._showFullInfo();
		this._closeModalOnClick();

		this._parent.on('hide.bs.modal', function() {
			this._closeModal();
		}.bind(this));
	}

	ChooseColors.prototype._formSubmit = function() {

		this._form.on('submit', function(e) {
			e.preventDefault();

			this._setActive();
		}.bind(this));

	};

	ChooseColors.prototype._setActive = function() {

		var current = this._getActive();
		var currentValue = current.value;
		var currentIcon = current.icon;

		//remove old icon
		this._select.find('i').remove();
		//set new icon
		this._selectText.before(currentIcon);
		//set current text
		this._selectText.text(currentValue);
		//close modal
		this._parent.modal('hide');

	};

	ChooseColors.prototype._getActive = function() {
		var that = this;
		var current = {
			value: [],
			icon: null
		};

		this._section.find(this._inputName).each(function() {
			var _this = $(this),
				icon = _this.siblings(that._iconName);

			if (_this.prop('checked')) {
				current.value.push($(this).data('value'));
				//find current icon
				if (icon.length) {
					//get clone and remove class
					current.icon = icon.clone().removeAttr('class');
				}
			}

		});

		if (this._section.length > 1) {
			current.value = current.value.join('/');
		} else {
			current.value = current.value.join();
		}

		return current;

	};

	ChooseColors.prototype._showModal = function(config) {
		this._modal.addClass(this._active);

		this._preview.css('background-image', 'url("' + config.img +'")');
		this._heading.text(config.heading);
		this._description.text(config.description);
	};

	ChooseColors.prototype._closeModal = function() {
		this._modal.removeClass(this._active);
	};

	ChooseColors.prototype._showFullInfo = function() {
		var that = this;
		$(this._inputName).on('change', function() {
			var _this = $(this);
			if (_this.prop('checked') == true) {
				var	parent = _this.parents(that._itemName);

				console.log(parent.find(that._imgName).data('img'));

				that._showModal({
					img: parent.find(that._imgName).data('img'),
					heading: _this.data('value'),
					description: parent.find(that._infoName).text()
				});
			}
		});
	};

	ChooseColors.prototype._closeModalOnClick = function() {
		this._close.click(function(e) {
			e.preventDefault();
			this._closeModal();
		}.bind(this));
	};

	chooseColorsModal.each(function() {
		new ChooseColors($(this));
	});

})();