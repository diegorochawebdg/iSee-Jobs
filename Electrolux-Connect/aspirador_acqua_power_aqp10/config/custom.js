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
					Connect.varejoLink  = "http://www.americanas.com.br/produto/111412497/aspirador-de-agua-e-po-electrolux-aqua-power-preto-e-amarelo-1200w-3-5-litros-po-e-10-5-litros-agua?origem=ac";
					Connect.hideBuyNowButton();
				break;
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/111412497/aspirador-de-agua-e-po-electrolux-aqua-power-preto-e-amarelo-1200w-3-5-litros-po-e-10-5-litros-agua";
					Connect.hideBuyNowButton();
				break;
				
				case "shoptime":
					Connect.varejoLink  = "http://www.shoptime.com.br/produto/111412497/aspirador-de-agua-e-po-electrolux-aqua-power-preto-e-amarelo-1200w-3-5-litros-po-e-10-5-litros-agua";
					Connect.hideBuyNowButton();
				break;
				
				case "pontofrio":
					Connect.varejoLink  = "http://www.pontofrio.com.br/Eletroportateis/AspiradordePoAcessorios/AspiradordePo/Aspirador-de-Po-e-Agua-Electrolux-Acqua-Power-AQP10-1-200W-com-Capacidade-para-35-Litros-de-Po-e-105-de-Agua-Funcao-Sopro-1685988.html?IdSku=1685988";
					Connect.hideBuyNowButton();
				break;
				
				case "casasbahia":
					Connect.varejoLink  = "http://www.casasbahia.com.br/Aspirador-de-Po-e-Agua-Electrolux-Acqua-Power-AQP10-1-200W-com-Capacidade-para-35-Litros-de-Po-e-105-de-Agua-Funcao-Sopro-1685988.html";
					Connect.hideBuyNowButton();
				break;
				
				case "extra":
					Connect.varejoLink  = "http://www.extra.com.br/Eletroportateis/AspiradordePoAcessorios/AspiradordePo/Aspirador-de-Po-e-Agua-Electrolux-Acqua-Power-AQP10-1-200W-com-Capacidade-para-35-Litros-de-Po-e-105-de-Agua-Funcao-Sopro-1685988.html";
					Connect.hideBuyNowButton();
				break;
				
			}
			
		}else{
			
			// com iFrame
			
			switch( Connect.varejoID ) 
			{
				
				case $COMPRAFACIL.id:
					Connect.varejoLink  = "http://www.comprafacil.com.br/comprafacil/Produto.jsf?VP=59,247,0,248,151521&VPP=ELETROPORTATEIS+ASPIRADOR+DE+PO+ASPIRADOR+DE+PO+E+AGUA+AQUA+POWER+1200W+ELECTROLUX+PRETO+E+AMARELO";
					Connect.hideBuyNowButton();
				break;
				
				case $EFACIL.id:
					Connect.varejoLink  = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2208186";
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
	
	this.init();
}