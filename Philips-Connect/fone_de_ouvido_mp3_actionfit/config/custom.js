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
					Connect.varejoLink  = "http://www.americanas.com.br/produto/112678300/mp3-player-gogear-philips-resistente-a-agua-4gb-carga-rapida-e-pedometro-sa4act04on-78";
					Connect.comprarLink = "http://www.americanas.com.br/produto/garantia/112678300/mp3-player-gogear-philips-resistente-a-agua-4gb-carga-rapida-e-pedometro-sa4act04on-78?quantity=1&codProdFusion=112678300&codItemFusion=112678318&buy=Comprar+colocar+na+sacola&soldout.itemId=112678300&soldout.skus=&soldout.name=&soldout.email=";
				break;
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/112678300/mp3-player-gogear-philips-resistente-a-agua-4gb-carga-rapida-e-pedometro-sa4act04on-78";
					Connect.comprarLink = "http://www.submarino.com.br/produto/garantia/112678300/mp3-player-gogear-philips-resistente-a-agua-4gb-carga-rapida-e-pedometro-sa4act04on-78?codProdFusion=112678300&codItemFusion=112678318&buy=Comprar";
				break;
				
				case "shoptime":
					Connect.varejoLink  = "http://www.shoptime.com.br/produto/112678300/mp3-player-gogear-philips-resistente-a-agua-4gb-carga-rapida-e-pedometro-sa4act04on-78";
					Connect.comprarLink = "http://www.shoptime.com.br/produto/garantia/112678300/mp3-player-gogear-philips-resistente-a-agua-4gb-carga-rapida-e-pedometro-sa4act04on-78?quantity=1&codProdFusion=112678300&codItemFusion=112678318&buy=Comprar";
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





