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
function iSeeUpdate() { 
	
	
	// private variables
	var isUpdateToggle = false;
	
	// private methods
	function toggleUpdateBox() { 
		
		$(".categorias-select").toggle("fast");
		isUpdateToggle = !isUpdateToggle;
		
	}
	
	
	// public methods 
	
	/**
		Initializes the application
		@param none
	**/
	this.init = function() { 
		console.log("new iSeeUpdate()");
		$("#categorias-show").click( function( event ) { 
			event.preventDefault();
			toggleUpdateBox();
		});
		
		var container = document.querySelector('#the-posts');
		var msnry = new Masonry( container, {
		  // options
		  columnWidth: 0,
		  itemSelector: '.post'
		});
	}
}
