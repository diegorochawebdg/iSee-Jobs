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
					Connect.varejoLink  = "http://www.americanas.com.br/produto/111586391/barbeador-eletrico-hq-6927-16-bivolt-preto-philips";
					Connect.comprarLink = "http://www.americanas.com.br/produto/garantia/111586391/barbeador-eletrico-hq-6927-16-bivolt-preto-philips?quantity=1&codProdFusion=111586391&codItemFusion=111586403&buy=Comprar+colocar+na+sacola&soldout.itemId=111586391&soldout.skus=&soldout.name=&soldout.email=";
				break;
				
				case "submarino":
					Connect.varejoLink  = "http://www.submarino.com.br/produto/111586391/barbeador-eletrico-hq-6927-16-bivolt-preto-philips";
					Connect.comprarLink = "http://www.submarino.com.br/produto/garantia/111586391/barbeador-eletrico-hq-6927-16-bivolt-preto-philips?codProdFusion=111586391&codItemFusion=111586403&buy=Comprar";
				break;
				
				case "shoptime":
					Connect.varejoLink  = "http://www.shoptime.com.br/produto/111586391/barbeador-eletrico-hq-6927-16-bivolt-preto-philips";
					Connect.comprarLink = "http://www.shoptime.com.br/produto/garantia/111586391/barbeador-eletrico-hq-6927-16-bivolt-preto-philips?quantity=1&codProdFusion=111586391&codItemFusion=111586403&buy=Comprar";
				break;
				
				case "pontofrio":
					Connect.varejoLink  = "http://www.pontofrio.com.br/BelezaSaude/Barbeadores/barbeadoreseletricos/Barbeador-Philips-HQ6927-16-com-Sistema-Reflex-Action-Bivolt-1705855.html";
					Connect.comprarLink = "http://carrinho.pontofrio.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332736&idSku=1705855&idLojista=16";
				break;
				
				case "casasbahia":
					Connect.varejoLink  = "http://www.casasbahia.com.br/Barbeador-Philips-HQ6927-16-com-Sistema-Reflex-Action-Bivolt-1705855.html";
					Connect.comprarLink = "http://carrinho.casasbahia.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332736&idSku=1705855&idLojista=10037";
				break;
				
				case "extra":
					Connect.varejoLink  = "http://www.extra.com.br/BelezaSaude/Barbeadores/barbeadoreseletricos/Barbeador-Philips-HQ6927-16-com-Sistema-Reflex-Action-Bivolt-1705855.html";
					Connect.comprarLink = "http://carrinho.extra.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332736&idSku=1705855&idLojista=15";
				break;
				
				case "walmart":
					Connect.varejoLink  = "http://www.walmart.com.br/produto/Beleza-e-Saude/Barbeador-Eletrico/Philips/359014-Barbeador-HQ6927-Philips";
					Connect.comprarLink = "http://www2.walmart.com.br/Carrinho/Add/359014/-1/0/";
				break;
				
			}
			
		}else{
			
			// com iFrame
			
			switch( Connect.varejoID ) 
			{
				
				case $SARAIVA.id:
					Connect.varejoLink  = "http://www.livrariasaraiva.com.br/produto/4226653/barbeador-philips-hq692716-bivolt/";
					Connect.hideBuyNowButton();
				break;
				
				case $MAGAZINELUIZA.id:
					Connect.varejoLink  = "http://www.magazineluiza.com.br/barbeador-eletrico-recarregavel-hq6927-16-philips/p/1082901/cp/barb/";
					Connect.comprarLink = "http://www.magazineluiza.com.br/produto/garantia-plus/?product=108290100&tying=";
				break;
				
				case $EFACIL.id:
					Connect.varejoLink  = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2208305";
					Connect.comprarLink = "http://carrinho.efacil.com.br/ConfirmaGarantiaEstendida.aspx?CodMer=2208305";
				break;
				
				case $COLOMBO.id:
					Connect.varejoLink  = "http://www.colombo.com.br/produto/Saude-e-Beleza/Barbeador-HQ6927-16-Philips";
					Connect.hideBuyNowButton();
				break;
				
				case $CASAEVIDEO.id:
					Connect.varejoLink  = "http://www.casaevideo.com.br/busca/Barbeadores-e-Aparadores-/165035-3736/Barbeador-Eletrico-3-Cabecas-Philips-HQ6927-Bivolt.html?WT.ac=2784&WT.mv_ev=click";
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


