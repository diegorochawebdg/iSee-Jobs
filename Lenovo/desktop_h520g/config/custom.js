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
			
				case "walmart":

					Connect.varejoLink  = "http://www.walmart.com.br/produto/Informatica/Computadores/Lenovo/Computador-PC-Lenovo-Intel-Core-i3-3220-6GB-HD-500GB-H520g-Gravador-de-DVD-Windows-8";
					Connect.comprarLink = "http://www2.walmart.com.br/Carrinho/Add/2000012943/-1/0/";
					
				break;
				
				case "undefined":
				case 0:
					Connect.hideBuyNowButton();
					Connect.hideSocial();
					//Connect.hideSaibaMais();
					Connect.hideManual();
				break;
				
			}		
		
		} else { 
			
			
			// Checa os links
			switch( Connect.varejoID ) 
			{
				
				/*case $AMERICANAS.id:
					Connect.varejoLink = "";
					Connect.comprarLink  = "";
				break;*/
								
				case "undefined":
				case 0:
					Connect.hideBuyNowButton();
					Connect.hideSocial();
					//Connect.hideSaibaMais();
					Connect.hideManual();
				break;
			
			}
			
		
		}
		
		Connect.hideManual();
		
	}
}