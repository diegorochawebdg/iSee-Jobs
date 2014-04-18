/* 
	@charset "UTF-8";
	@ Title: CSS Default Stylesheet file
	@ Author: Gustavo Teider
	@ Date: 13/02/2013
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
	@ Arquivo de personalização da página especial
*/

function ConnectCustom() { 
	
	// init custom Class
	this.init = function() { 
	
		// Checa os links
		switch( Connect.varejoID ) 
		{
			
			//case $WALMART.id:
			case $FASTSHOP.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;	
			
			case $AMERICANAS.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case "undefined":
			case 0:
				Connect.hideBuyNowButton();
				Connect.hideSocial();
			break;
		
		}
		
	}
	
	this.init();
}


