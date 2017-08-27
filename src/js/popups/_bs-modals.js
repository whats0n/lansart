//add bootstrap modal
window.jQuery = jQuery;

function bootstrapModalFix(element) {
	var modal = $.fn.modal.Constructor;

	modal.prototype.setScrollbar = function() {

		var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10);
		var elemPad = parseInt(($(element).css('padding-right') || 0), 10);

		this.originalBodyPad = document.body.style.paddingRight || '';

		if (this.bodyIsOverflowing) {
			this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
			$(element).css('padding-right', elemPad + this.scrollbarWidth);
		}
	};

	modal.prototype.resetScrollbar = function () {
		this.$body.css('padding-right', this.originalBodyPad);
		$(element).css('padding-right', this.originalBodyPad);
	};
}

bootstrapModalFix('.js-fixed');

//Functions related to the opening/closing popup.
var scrollUpdate = $('.js-scrollupdate');
var modalAutoClose = $('.js-modal-autoclose');


scrollUpdate.on('shown.bs.modal', function () {
	$(this).find('.js-scrollbar').perfectScrollbar('update');
	$(this).find('.js-scrollbar-y').perfectScrollbar('update');
	$(this).find('.js-scrollbar-x').perfectScrollbar('update');
});

modalAutoClose.on('shown.bs.modal', function () {
	var that = $(this);
	setTimeout(function() {
		that.modal('hide');
	}, 2000);
});