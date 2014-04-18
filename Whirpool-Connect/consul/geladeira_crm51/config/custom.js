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
			
			case $RICARDOELETRO.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $INSINUANTE.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $ELETROSHOPPING.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $CITYLAR.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $COMPRACERTA.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $EXTRA.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $CASASBAHIA.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $PONTOFRIO.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $FASTSHOP.id:
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


