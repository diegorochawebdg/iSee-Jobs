/* 
	@charset "UTF-8";
	@ Title: iSee Website Funcionality
	@ Author: Gustavo Teider
	@ Date: 22/03/2013
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
*/


/**
	Class constructor of  Main File based in OOP and jQuery.
	@param none
**/
function iSeeSite() 
{
	
	/**
		Private variables
	**/
	var debug 			= true;
	var isContactToggle = false;
	
	
	/** Private methods **/
	
	/**
		Function responsible to toggle the contact box
		@param none
	**/
	function toggleContactBox() { 
		
		$("header .content").toggleClass("contactBoxHeight");
		isContactToggle = !isContactToggle;
		
		if( isContactToggle ) { 
			
			
			var delayTimeout = setTimeout( function() { 
										clearTimeout( delayTimeout );
										$("#close_contact").css("opacity" , "1" );
			} , 455 );
		
		} else { 
			
			$("#close_contact").css("opacity" , "" );
		
		}
		
	}
	
	
	/**
		Public methods
	**/
	this.init = function() { 
	
		// set contact button funcionality
		$("#button_contato , #close_contact , .fechar").click( function( event ) { 
				
				toggleContactBox();
				var link = location.href.split("#");
				
		});
		
		
		// Init SkrollR
		var s = skrollr.init({
			beforerender: function(data) {
				console.log('beforerender');
			},
			render: function() {
				console.log('render');
			},
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
		});
	
	}
	
	
	
}