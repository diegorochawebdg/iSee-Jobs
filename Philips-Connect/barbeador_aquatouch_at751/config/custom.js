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
	
		if( Connect.getHostedURL() != "" ) {
			
			// sem iFrame
			var varejo     = Connect.getPublisher(); 
			
			switch( varejo ) { 
			
				case "americanas":
					Connect.varejoLink  = "http://www.americanas.com.br/produto/7494876/barbeador-aquatouch-at751-philips";
					Connect.hideBuyNowButton();
				break;
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/7494876/barbeador-aquatouch-at751-philips";
					Connect.hideBuyNowButton();
				break;
				
				case "shoptime":
					Connect.varejoLink  = "http://www.shoptime.com.br/produto/7494876/barbeador-aquatouch-at751-philips";
					Connect.hideBuyNowButton();
				break;
				
			}
			
		}else{
			
			// com iFrame
			
			switch( Connect.varejoID ) 
			{
				
				case "undefined":
				case 0:
					Connect.hideBuyNowButton();
					Connect.hideSocial();
					//Connect.hideSaibaMais();
					//Connect.hideManual();
				break;
				
			}
			
		}
		
	}
	
	this.init();
}


