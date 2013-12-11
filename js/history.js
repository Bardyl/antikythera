var slide = {
	// Params
	params: {
		container: "#slide",
		sliding: function(){}
	},
	
	init: function(options){
		this.prop = $.extend(this.params, options);
	},

	// On change...
	accessSlide: function(e, theSlide){
		// Prevent default on link click
		e.preventDefault();
		// Get json datas
		$.getJSON('json/history.json', function(datas){
			// Get the good slide content
			var slideContent = datas['fr']['Slide'][theSlide-1];
			slide.prop.sliding.call(this, slideContent);
		});
	}
}