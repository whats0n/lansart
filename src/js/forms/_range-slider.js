//range slider
var range = $('.js-range');

function rangeSlider(config) {
	var item = config.item;
	var rangeInput = item.find('.js-range-input');
	var rangeFrom = item.find('.js-range-from');
	var rangeTo = item.find('.js-range-to');

	var startValue = +rangeFrom.val();
	var startEnd = +rangeTo.val();
	var values = [startValue, startEnd];

	var min = rangeInput.data('min');
	var max = rangeInput.data('max');

	rangeInput.slider({
		range: true,
		tooltip: 'hide',
		value: values,
		min: min,
		max: max
	});

	// rangeInput.on('slide', function(el) {
	// 	var valueFrom = el.value[0],
	// 		valueTo = el.value[1];

	// 	rangeFrom.val(valueFrom);
	// 	rangeTo.val(valueTo);
	// });

	rangeInput.on('change', function(e) {
		rangeFrom.val(e.value.newValue[0]);
		rangeTo.val(e.value.newValue[1]);
	});

	function inputChanges(newVal, num) {
		var currVal = Number(newVal);

		values[num] = currVal;

		console.log(values);
		rangeInput.slider('setAttribute', 'value', values);
		rangeInput.slider('refresh');
	}

	rangeFrom.keyup(function() {
		var currVal = $(this).val();

		inputChanges(currVal, 0);
	});

	rangeTo.keyup(function() {
		var currVal = $(this).val();

		inputChanges(currVal, 1);
	});
}

range.each(function() {
	new rangeSlider({
		item: $(this)
	});
});
