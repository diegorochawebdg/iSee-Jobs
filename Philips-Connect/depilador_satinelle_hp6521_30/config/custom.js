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
			
			case $AMERICANAS.id:
				Connect.varejoLink = "http://www.americanas.com.br/produto/111624684/depilador-seco-e-molhado-satinelle-hp6521-philips?unavpage=1";
				Connect.comprarLink  = "http://www.americanas.com.br/produto/garantia/111624684/depilador-seco-e-molhado-satinelle-hp6521-philips?quantity=1&codProdFusion=111624684&codItemFusion=111624692&buy=Comprar+colocar+na+sacola&soldout.itemId=111624684&soldout.skus=&soldout.name=&soldout.email=";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "http://www.submarino.com.br/produto/111624684/depilador-seco-e-molhado-satinelle-hp6521-philips?unavpage=1";
				Connect.comprarLink  = "http://www.submarino.com.br/produto/garantia/111624684/depilador-seco-e-molhado-satinelle-hp6521-philips?codProdFusion=111624684&codItemFusion=111624692&buy=Comprar";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "http://www.shoptime.com.br/produto/111624684/depilador-seco-e-molhado-satinelle-hp6521-philips?unavpage=2";
				Connect.comprarLink  = "http://www.shoptime.com.br/produto/garantia/111624684/depilador-seco-e-molhado-satinelle-hp6521-philips?quantity=1&codProdFusion=111624684&codItemFusion=111624692&buy=Comprar";
			break;
			
			case $PONTOFRIO.id:
				Connect.varejoLink = "http://www.pontofrio.com.br/BelezaSaude/Depiladores/AparelhosdeDepilacao/Depilador-Philips-Satinelle-Soft-HP6521-30-Bivolt-1705854.html";
				Connect.comprarLink  = "http://carrinho.pontofrio.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332735&idSku=1705854&idLojista=16";
			break;
			
			case $CASASBAHIA.id:
				Connect.varejoLink = "http://www.casasbahia.com.br/Depilador-Philips-Satinelle-Soft-HP6521-30-Bivolt-1705854.html";
				Connect.comprarLink  = "http://carrinho.casasbahia.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332735&idSku=1705854&idLojista=10037";
			break;
			
			case $EXTRA.id:
				Connect.varejoLink = "http://www.extra.com.br/BelezaSaude/Depiladores/AparelhosdeDepilacao/Depilador-Philips-Satinelle-Soft-HP6521-30-Bivolt-1705854.html";
				Connect.comprarLink  = "http://carrinho.extra.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332735&idSku=1705854&idLojista=15";
			break;
			
			case $COMPRAFACIL.id:
				Connect.varejoLink = "http://www.comprafacil.com.br/comprafacil/Produto.jsf?VP=59,449,0,453,154973&VPP=SAUDE+BELEZA+DEPILADORES+DEPILADOR+PHILIPS+SECO+E+MOLHADO+SATINELLE+HP6521+BRANCA+VERDE+BIVOLT";
				Connect.hideBuyNowButton(); // Produto indisponível
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "http://www.walmart.com.br/produto/Beleza-e-Saude/Depilador-Eletrico/Philips/359005-Depilador-HP6521-Satinelle-Philips";
				Connect.comprarLink  = "http://www2.walmart.com.br/Carrinho/Add/359005/-1/0/";
			break;
			
			case $SARAIVA.id:
				Connect.varejoLink = "http://www.livrariasaraiva.com.br/produto/4226558/depilador-philips-hp652130-bivolt/";
				Connect.comprarLink  = "http://www.livrariasaraiva.com.br/cesta/cesta.dll/mostra?ID=BD4E91297DD041E0E24130349&FIL_ID=16&PAC_ID=0&tptCesta=cesta.htm&tptPagto=formapagto.htm&tptLogin=login.htm&tptEndereco=endereco.htm&tptCliente=dadoscliente.htm&tptPesqCliente=&PID=4226558";
			break;
			
			case $MAGAZINELUIZA.id:
				Connect.varejoLink = "http://www.magazineluiza.com.br/depilador-eletrico-seco-e-molhado-satinelle-hp6521-philips-satinsoft/p/1083400/cp/depi/";
				Connect.hideBuyNowButton();
			break;
			
			case $FASTSHOP.id:
				Connect.varejoLink = "http://www.fastshop.com.br/DEPILADOR-ELETRICO-PHILIPS-SATINELLE-HP6521_30-COM-SISTEMA-SKIN-CARE-WET--DRY,product,WAHP6521_30,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
				Connect.comprarLink  = "http://www.fastshop.com.br/ServiceAgreement.aspx?dept=0&ds=&sku_id=WAHP6521_30&src=&idGroup=0&Gar_0=1";
			break;
			
			case $COLOMBO.id:
				Connect.varejoLink = "http://www.colombo.com.br/produto/Saude-e-Beleza/Depilador-HP6521-30-Philips";
				Connect.hideBuyNowButton();
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


