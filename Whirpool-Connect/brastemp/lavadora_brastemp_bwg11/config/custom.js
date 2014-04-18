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
		
		Connect.hideSocial();
		
		// Checa os links
		switch( Connect.varejoID ) 
		{
			
			//case $WALMART.id:
			case $FASTSHOP.id:
				Connect.hideBuyNowButton();
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;	
			
			case $AMERICANAS.id:
				Connect.hideBuyNowButton();
				Connect.comprarLink ="";
				Connect.varejoLink = "";
			break;
			
			case $SUBMARINO.id:
				Connect.hideBuyNowButton();
				Connect.comprarLink ="";
				Connect.varejoLink = "";
			break;
			
			case $SHOPTIME.id:
				Connect.hideBuyNowButton();
				Connect.comprarLink ="";
				Connect.varejoLink = "";
			break;
			
			case $WALMART.id:
				
				Connect.comprarLink ="";
				Connect.varejoLink = "";
				Connect.hideBuyNowButton();
		
			break;
			
			case $EFACIL.id:
				Connect.comprarLink ="http://carrinho.efacil.com.br/ConfirmaGarantiaEstendida.aspx?CodMer=2208507";
				Connect.varejoLink = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2208507";
				
				if(getParameterByName("v") == "110") 
				{
					// codigo para o link da lavadora 110 volts
					Connect.comprarLink ="http://carrinho.efacil.com.br/ConfirmaGarantiaEstendida.aspx?CodMer=2208506";
					Connect.varejoLink = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2208506";
				}
				
			break;
			
			case $COMPRACERTA.id:
			case $COLOMBO.id:
				
				Connect.hideBuyNowButton();
				
			break;
			
			case "undefined":
			case 0:
				Connect.hideBuyNowButton();
				Connect.hideSocial();
				
				// carrega css relacionado a brastemp
				loadCSS( "http://www.isee.com.br/connect/src/css/special-content-brastemp.css" );
			break;
		
		}
		
	}
	
	this.init();
}