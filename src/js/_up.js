//up
var btnUp = $('.js-btn-up');

function showGoTop() {
	var winTop = win.scrollTop();
	if (!mobileWidth()) {
		if (winTop >= 1000) {
			btnUp.addClass('is-active');
		} else {
			btnUp.removeClass('is-active');
		}
	} else if (mobileWidth()) {
		if (winTop >= 600) {
			btnUp.addClass('is-active');
		} else {
			btnUp.removeClass('is-active');
		}
	}
}

function goTop() {
	htmlBody.animate({
		scrollTop: 0
	}, 1000);
}

win.scroll(function() {
	showGoTop();
});

btnUp.click(function() {
	goTop();
	return false;
});