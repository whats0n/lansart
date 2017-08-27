//menu items
var menuLink = $('.js-menu-link'),
	menu = $('.js-menu');

menuLink.hoverIntent(function() {
	overlay.addClass('is-active');
}, function() {});
menu.mouseleave(function() {
	overlay.removeClass('is-active');
});