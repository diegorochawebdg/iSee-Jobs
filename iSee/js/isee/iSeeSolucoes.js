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
function iSeeSolucoes() { 
	
	// private variables
	
	// private methods
	
	
	// public methods 
	
	/**
		Initializes the application
		@param none
	**/
	this.init = function() { 
		console.log("new iSeeSolucoes()");
		$("#solution-boxer a, #solution-boxes img, #solution-boxes").click(function(e) {
			e.preventDefault();
		});
	}
	
}
