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
			
				/*case "americanas":
					
				break;*/
				
			}
			
		}else{
			
			// com iFrame
			
			switch( Connect.varejoID ) 
			{
				
				/*case $COMPRAFACIL.id:
					
				break;*/
				
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