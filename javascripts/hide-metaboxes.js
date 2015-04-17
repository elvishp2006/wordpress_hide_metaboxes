Module( "Hide.Metaboxes", function(Metaboxes) {

	Metaboxes.fn.initialize = function(select, show, metaboxes) {
		this.select    = select;
		this.selected  = this.select.find( 'option:selected' );
		this.metaboxes = metaboxes;
		this.show      = show;
		this.init();
	};

	Metaboxes.fn.init = function() {
		this.addEventListener();
		this.hide( this.selected.val() );
	};

	Metaboxes.fn.addEventListener = function() {
		this.select.on( 'change', this._onChange.bind( this ) );
	};

	Metaboxes.fn.hide = function(value) {
		if ( value != this.show ) {
			jQuery.each( this.metaboxes, function( index, value ) {
				jQuery( value ).css( 'display', 'none' );
			});
		} else {
			jQuery.each( this.metaboxes, function( index, value ) {
				jQuery( value ).css( 'display', 'block' );
			});
		}
	}

	Metaboxes.fn._onChange = function(event) {
		var value = jQuery( event.currentTarget ).val();
		this.hide( value );
	};
} );