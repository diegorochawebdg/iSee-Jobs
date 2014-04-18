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
	
		// Checa os links
		switch( Connect.varejoID ) 
		{
			
			//case $WALMART.id:
			case $FASTSHOP.id:
				Connect.varejoLink = "http://www.fastshop.com.br/DEPILADOR-SATINPERFECT-PHILIPS-HP6579_30-COM-SISTEMA-SKIN-CARE-SISTEMA-DE-OTIMIZACAO-PINCA-COM-LUZ-LED,product,WAHP6579_30,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
				Connect.comprarLink  = "http://www.fastshop.com.br/ServiceAgreement.aspx?dept=0&ds=&sku_id=WAHP6579_30&src=&idGroup=0&Gar_0=1";
			break;	
			
			case $AMERICANAS.id:
				Connect.varejoLink = "http://www.americanas.com.br/produto/111624721/depilador-seco-e-molhado-satinelle-hp6579-philips";
				Connect.comprarLink  = "http://www.americanas.com.br/produto/garantia/111624721/depilador-seco-e-molhado-satinelle-hp6579-philips?quantity=1&codProdFusion=111624721&codItemFusion=111624730&buy=Comprar+colocar+na+sacola&soldout.itemId=111624721&soldout.skus=&soldout.name=&soldout.email=";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "http://www.submarino.com.br/produto/111624721/depilador-seco-e-molhado-satinelle-hp6579-philips";
				Connect.comprarLink  = "http://www.submarino.com.br/produto/garantia/111624721/depilador-seco-e-molhado-satinelle-hp6579-philips?codProdFusion=111624721&codItemFusion=111624730&buy=Comprar";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "http://www.shoptime.com.br/produto/111624721/depilador-seco-e-molhado-satinelle-hp6579-philips";
				Connect.comprarLink  = "http://www.shoptime.com.br/produto/garantia/111624721/depilador-seco-e-molhado-satinelle-hp6579-philips?quantity=1&codProdFusion=111624721&codItemFusion=111624730&buy=Comprar";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "http://www.walmart.com.br/produto/Beleza-e-Saude/Depilador-Eletrico/Philips/359007-Depilador-HP6579-Satinelle-Philips";
				Connect.comprarLink  = "";
				//O produto estava temporariamente indisponível
			break;
			
			case $PONTOFRIO.id:
				Connect.varejoLink = "http://www.pontofrio.com.br/BelezaSaude/Depiladores/AparelhosdeDepilacao/Depilador-Philips-Satinelle-Perfect-HP-6579-30-Bivolt-1705853.html";
				Connect.comprarLink  = "http://carrinho.pontofrio.com.br/Site/Carrinho.aspx?idSku=1705853&idLojista=16";
			break;
			
			case $CASASBAHIA.id:
				Connect.varejoLink = "http://www.casasbahia.com.br/Depilador-Philips-Satinelle-Perfect-HP-6579-30-Bivolt-1705853.html";
				Connect.comprarLink  = "http://carrinho.casasbahia.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332734&idSku=1705853&idLojista=10037";
			break;
			
			case $COMPRAFACIL.id:
				Connect.varejoLink = "http://www.comprafacil.com.br/comprafacil/Produto.jsf?VP=59,449,0,453,154978&VPP=SAUDE+BELEZA+DEPILADORES+DEPILADOR+PHILIPS+SECO+E+MOLHADO+SATINELLE+HP6579+BRANCO+BIVOLT";
				Connect.comprarLink  = ""; //produto indisponível
			break;
			
			case $SARAIVA.id:
				Connect.varejoLink = "http://www.livrariasaraiva.com.br/produto/4226515/depilador-philips-hp657930-bivolt/?PAC_ID=33963";
				Connect.comprarLink  = "http://www.livrariasaraiva.com.br/cesta/cesta.dll/inclui?pro_id=4226515&PAC_ID=33963";
			break;
			
			case $MAGAZINELUIZA.id:
				Connect.varejoLink = "http://www.magazineluiza.com.br/depilador-eletrico-seco-e-molhado-satinelle-hp6579-philips-satinperfect/p/1083402/cp/depi/";
				Connect.comprarLink  = ""; //não foi possível adicionar o botão comprar
			break;
			
			case $COLOMBO.id:
				Connect.varejoLink = "http://www.colombo.com.br/produto/Saude-e-Beleza/Depilador-HP6579-Bivolt-Philips";
				Connect.comprarLink  = "";//não foi possível adicionar o botão comprar
			break;
			
			case $NOVOMUNDO.id:
				Connect.varejoLink = "http://www.novomundo.com.br/produto/19365/depilador-walita-satinelle-hp657930-wet-dry-discos-hipoalergenicos-2-ajustes-de-velocidade";
				Connect.comprarLink  = "http://www.novomundo.com.br/carrinho/adicionar-item/19365";
			break;
			
			case "undefined":
			case 0:
				Connect.hideBuyNowButton();
				Connect.hideSocial();
			break;
		
		}
		
	}
	
	this.init();
}


