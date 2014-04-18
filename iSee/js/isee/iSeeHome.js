/* 
	@charset "UTF-8";
	@ Title: iSee Website Funcionality
	@ Author: Gustavo Teider
	@ Date: 03/06/2013
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
*/

/**
	Class Constructor
	@param none
**/
function iSeeHome() { 
	
	
	// private variables
	
	
	// local methods
	
	
	// public methods 
	
	/**
		Initializes the application
		@param none
	**/
	this.init = function() { 
		
		
		// Load iScroll
		$.getScript( "js/jquery/jquery.easing-1.3.js")
		$.getScript( "js/iosslider/jquery.iosslider.min.js" )
				
				// When it has finished loading
				.done(function(script, textStatus) {
					
					$('.iosSlider').iosSlider({
						desktopClickDrag: true,
						snapToChildren: true,
						infiniteSlider: true,
						snapSlideCenter: true,
						navSlideSelector: '.slideSelectors .item',
						/*navPrevSelector: '.slideSelectors .prev',
						navNextSelector: '.slideSelectors .next',*/
						autoSlide: true,
						scrollbar: true,
						scrollbarContainer: '.sliderContainer .scrollbarContainer',
						scrollbarMargin: '0',
						scrollbarBorderRadius: '0',
						keyboardControls: true,
						onSlideChange: slideChange
					});
					
					function slideChange(args) {
			
						$('.slideSelectors .item').removeClass('selected');
						$('.slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
					
					}
						
					// set hand cursor to the slider
					$(".iosSlider").mouseenter(function(e) {
                        $(this).css("cursor" , "none" );
						$(".sliderCursor").css("display" , "block" );
					});
					$(".iosSlider").mousemove(function(e) {
					   var parentOffset = $(this).offset(); 
					   var relX = e.pageX - parentOffset.left + 5;
					   var relY = e.pageY - parentOffset.top + 5 ;
					   $(".sliderCursor").css("top" ,  relY + "px");
					   $(".sliderCursor").css("left" , relX + "px");
					});
					$(".iosSlider").mouseleave(function(e) {
                        $(this).css("cursor" , "" );
						$(".sliderCursor").css("display" , "none" );
					});
					$(".iosSlider").mousedown(function(e) {
                        $(".sliderCursor").css("backgroundPosition" , "right" );
					});
					$("iosSlider.").mouseup(function(e) {
                        $(".sliderCursor").css("backgroundPosition" , "" );
					});
					
						
			}).fail(function(jqxhr, settings, exception) {
					
					
			});
	
	}


}
