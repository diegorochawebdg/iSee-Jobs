/*
 * Tooltip script 
 * powered by jQuery (http://www.jquery.com)
 * 
 * written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */
this.tooltip = function( tooltipData ){	
	
	var data = tooltipData;
	
	/* CONFIG */		
		xOffset = 10;
		yOffset = 20;		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result		
	
	/* END CONFIG */		
	$("a.tooltip").hover(function(e){	
		this.t = data[ Number( this.title ) ];
		this.title = $(this).attr("title");									  
		$("body").append("<div id='tooltip'>"+ this.title +"</div>");
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");		
    },
	function(){
		this.title = this.title;		
		$("#tooltip").remove();
    });	
	$("a.tooltip").mousemove(function(e){
		$("#tooltip")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};