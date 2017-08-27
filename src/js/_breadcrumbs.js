// (function() {

// 	var breadcrumbs = $('.js-breadcrumbs');

// 	if (breadcrumbs.length) {
// 		var cutBC = {
// 			bc: breadcrumbs,
// 			summaryWidth: 0,
// 			init: function() {
// 				this.getWidth();
// 			},
// 			getWidth: function() {
// 				var that = this,
// 					items = that.bc.find('li');

// 				[].forEach.call(items, function(item, i, arr) {
// 					that.summaryWidth += $(item).outerWidth();
// 				});

// 				console.log(that.summaryWidth);
// 			}
// 		};

// 		cutBC.init();

// 	}

// })();