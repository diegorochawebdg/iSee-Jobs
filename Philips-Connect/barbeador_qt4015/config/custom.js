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
			case $COMPRAFACIL.id:
				Connect.varejoLink = "http://www.comprafacil.com.br/comprafacil/Produto.jsf?VP=59,449,0,20287,184585&VPP=SAUDE+BELEZA+BARBEADORES+APARADORES+APARADOR+DE+BARBA+PHILIPS+RECARREGAVEL+COM+LAMINAS+DE+TITANIO+QT4015+16+PRETO";
				Connect.comprarLink  = ""; //não foi possível incluir o botão comprar nesse produto;
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


