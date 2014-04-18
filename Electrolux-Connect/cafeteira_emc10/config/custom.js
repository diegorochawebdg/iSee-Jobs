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
			
			case $AMERICANAS.id:
				Connect.varejoLink = "http://www.americanas.com.br/produto/112809752/cafeteira-espresso-electrolux-chef-15-bar";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "http://www.submarino.com.br/produto/112809752/cafeteira-espresso-electrolux-chef-15-bar";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "http://www.shoptime.com.br/produto/112809752/cafeteira-espresso-electrolux-chef-15-bar";
			break;
			
			case $COMPRAFACIL.id:
				Connect.varejoLink = "http://www.comprafacil.com.br/comprafacil/Produto.jsf?VP=59,247,83228,190067,180764&VPP=ELETROPORTATEIS+CAFETEIRAS+CAFETEIRAS+EXPRESSO+CAFETEIRA+EXPRESSO+ELECTROLUX+CHEF+EMC10+ACO+ESCOVADO";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "http://www.walmart.com.br/produto/Eletroportateis/Cafeteira/Electrolux/377354-Cafeteira-Elet-2-1L-Aco-Es-220V-Electrolux---EMC10";
				
			break;
			
			case "undefined":
			case 0:
				Connect.hideBuyNowButton();
				Connect.hideSocial();
				
			break;
		
		}
		Connect.hideBuyNowButton();
		
	}
	
	this.init();
}