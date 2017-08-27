var win = $(window),
	body = $('body'),
	htmlBody = $('html, body'),
	html = $('html');
//detect width
function tabletWidth() {
	return window.matchMedia('(max-width: 1080px)').matches;
};
function mobileWidth() {
	return window.matchMedia('(max-width: 768px)').matches;
};
//detect touch
var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

if (!supportsTouch) {
	body.addClass('no-touch');
};