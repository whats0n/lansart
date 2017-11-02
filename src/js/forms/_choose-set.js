(function() {

	var $items = $('[data-choose-set]');

	$items.on('change', function() {
		var $this = $(this);
		var set = $this.data('choose-set');
		var $other = $items
			.not(this)
			.filter('[data-choose-set="' + set + '"]');

		$items.prop('checked', false);
		$this
			.add($other)
			.prop('checked', true);
	});

})();