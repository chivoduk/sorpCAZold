
// Toggle Mobile Nav

    (function() {
        var toggler = $('.primary-nav .nav-toggler');
        var menu = $('.primary-nav .nav-holder');
        toggler.on('click', function() {
            menu.slideToggle();
        });
    }());



    
/* Ползунок в выподающем меню на карте*/

var handlesSlider = document.getElementById('slider-handles');

noUiSlider.create(handlesSlider, {
	start: [ 1, 100 ],
	step: 1,
	range: {
		'min': [ 1 ],
		'max': [ 100 ],
	},
	format: {
	  to: function ( value ) {
		return value + '';
	  },
	  from: function ( value ) {
		return value.replace(',00', '');
	  }
	}
});

handlesSlider.noUiSlider.on('update', function( values, handle ) {
	handlesSlider.value = values[handle];
	document.getElementById('left-title-slider').innerHTML = Math.round(handlesSlider.noUiSlider.get(this.value)[0]);
	document.getElementById('right-title-slider').innerHTML = Math.round(handlesSlider.noUiSlider.get(this.value)[1]);
});

handlesSlider.addEventListener('change', function(){
	handlesSlider.noUiSlider.set(this.value);

});