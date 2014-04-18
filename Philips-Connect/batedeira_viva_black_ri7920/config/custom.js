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
					Connect.varejoLink  = "http://www.americanas.com.br/produto/113022290/batedeira-profissional-philips-walita-viva-multi-velocidades-4-litros-preto-e-inox?epar=buscape&opn=YYNKZB";
					Connect.hideBuyNowButton();
				break;
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/113022290/batedeira-profissional-philips-walita-viva-multi-velocidades-4-litros-preto-e-inox?epar=102414&utm_source=buscape&utm_medium=cpc&utm_campaign=bp&WT.mc_id=Buscape&WT.mc_ev=Click&opn=COMPARADORESSUB";
					Connect.hideBuyNowButton();
				break;
				
				case "shoptime":
					Connect.varejoLink  = "http://www.shoptime.com.br/produto/113022290/batedeira-profissional-philips-walita-viva-multi-velocidades-4-litros-preto-e-inox?epar=4024&opn=BUSCAPE";
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


