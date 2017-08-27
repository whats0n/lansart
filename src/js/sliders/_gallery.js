//gallery
(function() {

	var galleryBlock = $('.js-gallery');

	function Gallery(config) {

		var gallery = config.gallery;

		this.slider = gallery.find(config.slider);
		this.slide = gallery.find(config.slide);
		this.preview = gallery.find(config.preview);
		this.prev = gallery.find(config.prev);
		this.next = gallery.find(config.next);


		this.modal = $(config.modal);
		this.modalSlider = this.modal.find(config.modalSlider);
		this.modalPrev = this.modal.find(config.prev);
		this.modalNext = this.modal.find(config.next);

		this._buildSlider();
	};

	Gallery.prototype._buildSlider = function() {
		var that = this,
			clones = this.slide.clone().removeAttr('data-toggle data-target data-id');


		if (that.modal.length) {
			that.modalSlider.html(clones);


			that.modal.on('shown.bs.modal', function () {
				setTimeout(function() {
					that.modalSlider.slick({
						prevArrow: that.modalPrev,
						nextArrow: that.modalNext,
						initialSlide: that.initial,
						fade: true
					});
				}, 0);
			});
			that.modal.on('hidden.bs.modal', function () {
				that.modalSlider.slick('unslick');
			});
		};

		that.slide.click(function() {
			that.initial = $(this).data('id');
		});

		that.slider.slick({
			fade: true,
			arrows: false,
			asNavFor: that.preview
		});

		that.preview.slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: that.prev,
			nextArrow: that.next,
			asNavFor: that.slider,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 1080,
					settings: {
						vertical: true,
						verticalSwiping: true
					}
				}
			]
		});
	};

	galleryBlock.each(function() {
		new Gallery({
			gallery: $(this),
			slider: '.js-gallery-slider',
			slide: '.js-gallery-slide',
			preview: '.js-gallery-preview',
			prev: '.js-gallery-prev',
			next: '.js-gallery-next',
			modalSlider: '.js-gallery-modal-slider',
			modal: '.js-card-gallery'
		});
	});

})();