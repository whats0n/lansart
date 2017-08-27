//rating
(function() {
	var rating = $('.js-rating');

	function ChangeRating(config) {
		this.list = config.list;
		this.item = this.list.find('.js-rating-item');
		this.input = this.list.find('.js-rating-item input');
		this.active = null;

		this._hover();
		this._change();
	};

	ChangeRating.prototype._active = function(index) {
		this.item.each(function() {
			var _this = $(this);

			if (_this.index() <= index) {
				_this.addClass('is-active');
			} else {
				_this.removeClass('is-active');
			};
		});
	};

	ChangeRating.prototype._hover = function() {
		var that = this;

		this.item.each(function(index, el) {
			$(el).hover(function() {
				that._active(index);
			}, function() {
				that.item.each(function(i, item) {
					if (i > 0) {
						if (i > that.active) {
							$(item).removeClass('is-active');
						} else {
							$(item).addClass('is-active');
						}
					} else {
						if (i >= that.active && that.active === null) {
							$(item).removeClass('is-active');
						}
					};
				});
			});
		});
	};

	ChangeRating.prototype._change = function() {
		var that = this;

		that.item.each(function(index, el) {
			$(el).change(function() {
				that._active(index);
				that.active = index;
			});
		});
	};

	rating.each(function() {
		new ChangeRating({
			list: $(this)
		});
	});

})();