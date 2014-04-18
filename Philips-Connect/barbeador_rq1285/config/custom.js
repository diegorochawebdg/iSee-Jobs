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
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/111624473/barbeador-sensotouch-3d-seco-e-molhado-com-aparador-de-barba-rq-1285-17-philips";
					Connect.hideBuyNowButton(); //sem estoque do produto
				break;
				
				case "walmart":
					Connect.varejoLink  = "http://www.walmart.com.br/produto/Beleza-e-Saude/Barbeador-Eletrico/Philips/359018-Barbeador-Senso-Touch-3D-RQ1285-17-Philips";
					Connect.hideBuyNowButton(); //sem estoque do produto
				break;
				
			}
			
		}else{
			
			// com iFrame
			
			switch( Connect.varejoID ){
				
				case $SARAIVA.id:
					Connect.varejoLink  = "http://www.livrariasaraiva.com.br/produto/4226582";
					Connect.hideBuyNowButton();
				break;
				
				case $MAGAZINELUIZA.id:
					Connect.varejoLink  = "http://www.magazineluiza.com.br/barbeador-eletrico-recarregavel-sensotouch-3d-seco-e-molhado-philips-rq1285/p/2085000/cp/barb/";
					Connect.hideBuyNowButton();
				break;
				
				case $EFACIL.id:
					Connect.varejoLink  = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2208345";
					Connect.hideBuyNowButton();
				break;
				
				case $FASTSHOP.id:
					Connect.varejoLink  = "http://www.fastshop.com.br/BARBEADOR-PHILIPS-RQ1285-SENSO-TOUCH-3-COM-SISTEMA-GYROFLEX-3D-SELO-AQUATEC-FUNCAO-SKINGLIDE,product,WARQ1285_17,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
					Connect.comprarLink = "http://www.fastshop.com.br/ServiceAgreement.aspx?dept=0&ds=&sku_id=WARQ1285_17&src=&idGroup=0&Gar_0=1";
				break;
				
				case $COLOMBO.id:
					Connect.varejoLink  = "http://www.colombo.com.br/produto/Saude-e-Beleza/Barbeador-Senso-Touch-3D-RQ1285-Philips";
					Connect.hideBuyNowButton();
				break;
				
				case $NOVOMUNDO.id:
					Connect.varejoLink  = "http://www.novomundo.com.br/produto/19355/barbeador-philips-rq128517-senso-touch-3d-uso-molhado-e-seco-cabo-antideslizante-tres-camadas-de-corte-especiais";
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


