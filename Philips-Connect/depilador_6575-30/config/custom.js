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
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;	
			
			case $AMERICANAS.id:
				Connect.varejoLink = "http://www.americanas.com.br/produto/111624705/depilador-seco-e-molhado-satinelle-hp6575-philips";
				Connect.comprarLink  = "http://www.americanas.com.br/produto/garantia/111624705/depilador-seco-e-molhado-satinelle-hp6575-philips?quantity=1&codProdFusion=111624705&codItemFusion=111624713&buy=Comprar+colocar+na+sacola&soldout.itemId=111624705&soldout.skus=&soldout.name=&soldout.email=";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "http://www.submarino.com.br/produto/111624705/depilador-seco-e-molhado-satinelle-hp6575-philips";
				Connect.comprarLink  = "http://www.submarino.com.br/produto/garantia/111624705/depilador-seco-e-molhado-satinelle-hp6575-philips?codProdFusion=111624705&codItemFusion=111624713&buy=Comprar";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "http://www.shoptime.com.br/produto/111624705/depilador-seco-e-molhado-satinelle-hp6575-philips";
				Connect.comprarLink  = "http://www.shoptime.com.br/produto/garantia/111624705/depilador-seco-e-molhado-satinelle-hp6575-philips?quantity=1&codProdFusion=111624705&codItemFusion=111624713&buy=Comprar";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "http://www.walmart.com.br/produto/Beleza-e-Saude/Depilador-Eletrico/Philips/359006-Depilador-HP6575-Satinelle-Philips";
				Connect.comprarLink  = "http://www2.walmart.com.br/Carrinho/Add/359006/-1/0/";
			break;
			
			case $PONTOFRIO.id:
				Connect.varejoLink = "http://www.pontofrio.com.br/BelezaSaude/Depiladores/AparelhosdeDepilacao/Depilador-Philips-Satinelle-HP6575-30-Bivolt-1705852.html";
				Connect.comprarLink  = "http://carrinho.pontofrio.com.br/Site/Carrinho.aspx?idSku=1705852&idLojista=16";
			break;
			
			case $CASASBAHIA.id:
				Connect.varejoLink = "http://www.casasbahia.com.br/Depilador-Philips-Satinelle-HP6575-30-Bivolt-1705852.html";
				Connect.comprarLink  = "http://carrinho.casasbahia.com.br/Site/ProdutoServicosDisponiveis.aspx?idProduto=332733&idSku=1705852&idLojista=10037";
			break;
			
			case $EXTRA.id:
				Connect.varejoLink = "http://www.extra.com.br/BelezaSaude/Depiladores/AparelhosdeDepilacao/Depilador-Philips-Satinelle-HP6575-30-Bivolt-1705852.html";
				Connect.comprarLink  = "http://carrinho.extra.com.br/Site/Carrinho.aspx?idSku=1705852&idLojista=15";
			break;
			
			case $SARAIVA.id:
				Connect.varejoLink = "http://www.livrariasaraiva.com.br/produto/4226473/depilador-philips-hp657530-bivolt/";
				Connect.comprarLink  = "http://www.livrariasaraiva.com.br/cesta/cesta.dll/inclui?pro_id=4226473";
			break;
			
			case $MAGAZINELUIZA.id:
				Connect.varejoLink = "http://www.magazineluiza.com.br/depilador-eletrico-seco-e-molhado-satinelle-hp6575-philips-satinperfect/p/1083401/cp/depi/";
				Connect.comprarLink  = "";
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


