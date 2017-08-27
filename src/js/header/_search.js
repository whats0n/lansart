//search
var searchBtn = $('.js-search-open'),
	autoComplete = $('.js-autocomplete'),
	search = $('.js-search');

searchBtn.click(function() {
	$(this).parent('.js-search').toggleClass('is-active');
	return false;
});

body.click(function() {
	search.removeClass('is-active');
});

search.click(function(e) {
	e.stopPropagation();
});

autoComplete.each(function() {
	var that = $(this);

	that.easyAutocomplete({
		data: [
			"Диван Ватсон",
			"Угловой диван сеул",
			"Диван Астон",
			"Угловой диван визит",
			"Модуль дивана Sevanna левая",
			"Прямой модуль дивана Sevana",
			"Угловой модуль дивана Sevana",
			"Элемент дивана Ибица",
			"Диван Жако"
		],

		list: {
			maxNumberOfElements: 9,
			match: {
				enabled: true
			},
			onShowListEvent: function() {
				dropdown.css('display', 'block');
			},
			onHideListEvent: function() {
				dropdown.css('display', 'none');
			}
		}
	});

	var dropdown = that.siblings('.easy-autocomplete-container'),
		dropdownUl = dropdown.find('ul'),
		thatParent = that.parents('.js-search'),
		autoCompleteLink = thatParent.find('.js-autocomplete-link');

	dropdown.append(autoCompleteLink);

	that.focusin(function() {
		thatParent.addClass('is-focus');
	}).blur(function() {
		thatParent.removeClass('is-focus');
	});;
});