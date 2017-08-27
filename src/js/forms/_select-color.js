// //select color
// var selectColor = $('.js-color');

// function ChangeColor(config) {
// 	var select = config.select;

// 	this.prefix = config.selectPrefix;
// 	this.selects = $('.' + this.prefix);
// 	this.select = select;
// 	this.icon = select.find('.' + this.prefix + '-icon');
// 	this.text = select.find('.' + this.prefix + '-text');
// 	this.list = select.find('.' + this.prefix + '-list');
// 	this.input = select.find('.' + this.prefix + '-input');

// 	this.input.val(this.list.find('li').first().data('value'));

// 	this._openSelect();
// 	this._selectColor();
// 	this._closeOnBody();

// };

// ChangeColor.prototype._openSelect = function() {
// 	this.text.click(function(e) {
// 		if (this.select.hasClass('is-open')) {
// 			this._closeSelects();
// 		} else {
// 			this._closeSelects();
// 			this.select.addClass('is-open');
// 		};
// 		e.stopPropagation();
// 	}.bind(this));
// };

// ChangeColor.prototype._closeSelects = function() {
// 	this.selects.removeClass('is-open');
// 	$('.my-select').removeClass('is-open');
// 	$('.my-select__list').removeClass('is-open');
// };

// ChangeColor.prototype._selectColor = function() {
// 	this.list.find('li').each(function(i, item) {
// 		$(item).click(function(e) {
// 			var currentItem = $(item).html(),
// 				currentValue = $(item).data('value');

// 			this.text.html(currentItem);
// 			this.input.val(currentValue);
// 			this._closeSelects();
// 			this.list.find('li').removeClass('is-active');
// 			$(item).addClass('is-active');

// 			e.stopPropagation();
// 		}.bind(this));
// 	}.bind(this));
// };

// ChangeColor.prototype._closeOnBody = function() {
// 	body.click(function() {
// 		this._closeSelects();
// 	}.bind(this));
// };

// selectColor.each(function() {
// 	new ChangeColor({
// 		select: $(this),
// 		selectPrefix: 'js-color'
// 	});
// });