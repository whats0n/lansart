;(function() {
	
	var $body = $('body');
	var $viewColor = $('.js-view-color');
	var OPEN = 'is-open';
	var $modals = $('.js-view-color-modal');

	$body.on('click', function(e) {
		var $target = $(e.target);
		if ($target.closest('.js-view-color-img').length || 
			$target.closest('.js-view-color-modal').length || 
			$target.closest('.js-view-color-input').length || 
			!$modals.hasClass(OPEN)) return;
		$modals.removeClass(OPEN);
	});

	$viewColor.each(function() {

		var $container = $(this);
		var $viewColorItem = $container.find('.js-view-color-item');

		var $viewColorModal = $container.find('.js-view-color-modal');
		var $viewColorModalClose = $container.find('.js-view-color-modal-close');
		var $viewColorModalImg = $container.find('.js-view-color-modal-img');
		var $viewColorModalTitle = $container.find('.js-view-color-modal-title');
		var $viewColorModalDescription = $container.find('.js-view-color-modal-description');

		$viewColorItem.each(function() {

			var $this = $(this);
			var $viewColorImg = $this.find('.js-view-color-img');
			var $viewColorImgData = $viewColorImg.data('img');
			var $viewColorTitleData = $this.find('.js-view-color-title').html();
			var $viewColorDescriptionData = $this.find('.js-view-color-description').html();

			$viewColorImg.on('click', function(e) {
				
				$viewColorModal.addClass(OPEN);
				$viewColorModalImg.css('background-image', 'url(' + $viewColorImgData + ')');
				$viewColorModalTitle.html($viewColorTitleData);
				$viewColorModalDescription.html($viewColorDescriptionData);

			});

		});

		$viewColorModalClose.on('click', function(e) {
			e.preventDefault();
			$viewColorModal.removeClass(OPEN);
		});

	});

})();