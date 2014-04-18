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
			var custom_sku = Connect.getCustomSKU();
			
			switch( varejo ) { 
			
				case "pontofrio": 
					
					Connect.varejoLink  = "http://www.pontofrio.com.br/eletrodomesticos/LavaLoucas/Lava-Loucas-Brastemp-BLF12-com-6-Programas-e-12-Servicos-Branca-2088002.html?IdSku=2088002";
					Connect.hideBuyNowButton();
					
				break;
				
				case "casasbahia": 
					
					Connect.varejoLink  = "http://www.casasbahia.com.br/Lava-Loucas-Brastemp-BLF12-com-6-Programas-e-12-Servicos-Branca-2088002.html?IdSku=2088002";
					Connect.hideBuyNowButton();
					
				break;
				
				case "extra": 
					
					Connect.varejoLink  = "http://www.extra.com.br/eletrodomesticos/LavaLoucas/Lava-Loucas-Brastemp-BLF12-com-6-Programas-e-12-Servicos-Inox-2088003.html?IdSku=2088003";
					Connect.hideBuyNowButton();
					
				break;
				
			}
			
		}else{
			
			// com iFrame
			var custom_sku = getParameterByName("custom_sku");
			
			switch( Connect.varejoID ) 
			{
				
				case $FASTSHOP.id:
				
					Connect.varejoLink  = "http://www.fastshop.com.br/LAVA-LOUCAS-ATIVE-BRASTEMP-12-SEVICOS-6-PROGRAMAS-E-1250W-INOX---BLF12AR,product,BRBLF12AR,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
					Connect.hideBuyNowButton();
				
				break;
				
				case $COLOMBO.id:
				
					Connect.varejoLink  = "";
					Connect.hideBuyNowButton();
				
				break;
				
				case $BRASTEMP.id:
				
					Connect.varejoLink  = "http://loja.brastemp.com.br/produto/detalhes.aspx?pc=5075&cc=0&sc=0&fc=0&vc=0&nm=lava-lou%u00e7as+brastemp+ative!+inox+-+12+servi%u00e7os&cache=s";
					Connect.hideBuyNowButton();
				
				break;
				
				case $COMPRACERTA.id:
				
					Connect.hideSocial();
					Connect.hideBuyNowButton();
				
				break;
				
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
	
	//this.init();
}


