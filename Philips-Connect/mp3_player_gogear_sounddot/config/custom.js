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
			
			switch( varejo ){ 
				
				case "americanas":
					Connect.varejoLink  = "http://www.americanas.com.br/produto/112149969/mp3-player-gogear-2gb-usb-2.0-com-indicador-de-bateria-e-carga-rapida-sa4dot02wn-78-philips";
				break;
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/112149969/mp3-player-gogear-2gb-usb-2.0-com-indicador-de-bateria-e-carga-rapida-sa4dot02wn-78-philips";
				break;
				
				case "shoptime":
					Connect.varejoLink  = "http://www.shoptime.com.br/produto/112149969/mp3-player-gogear-2gb-usb-2.0-com-indicador-de-bateria-e-carga-rapida-sa4dot02wn-78-philips";
				break;
				
				case "pontofrio":
					Connect.varejoLink  = "http://www.pontofrio.com.br/Eletronicos/MP3MP4players/Players/MP3-Player-Philips-GoGEAR-SoundDot-SA4DOT02WN-2GB-1876070.html";
				break;
				
				case "casasbahia":
					Connect.varejoLink  = "http://www.casasbahia.com.br/MP3-Player-Philips-GoGEAR-SoundDot-SA4DOT02WN-2GB-1876070.html?IdSku=1876070";
				break;
				
				case "extra":
					Connect.varejoLink  = "http://www.extra.com.br/Eletronicos/MP3MP4players/Players/MP3-Player-Philips-GoGEAR-SoundDot-SA4DOT02WN-2GB-1876070.html?IdSku=1876070";
				break;
				
			}
			
		}else{
			
			// com iFrame
			
			switch( Connect.varejoID ){
				
				case $FASTSHOP.id:
					Connect.varejoLink  = "http://www.fastshop.com.br/loja/mp3-player-2gb-gogear-indicadores-led";
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
		
		Connect.hideBuyNowButton();
		
	}
	
	//this.init();
}


