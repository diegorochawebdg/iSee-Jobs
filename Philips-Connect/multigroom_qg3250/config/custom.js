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
	
		//console.log("ENTROU AQUI init !!! " + Connect.varejoID.toString() + " - - -  "  + $AMERICANAS.id );
	
		// Checa os links
		switch( Connect.varejoID ) 
		{
			
			//case $WALMART.id:
			case $FASTSHOP.id:
				Connect.varejoLink = "http://www.fastshop.com.br/APARADOR-DE-PELOS-COM--PONTAS-EXTRA-AFIADAS-NA-COR-PRETA---MULTI-PHILIPS---QG3250_32,product,WAQG3250_32,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
				Connect.comprarLink  = "http://www.fastshop.com.br/ServiceAgreement.aspx?dept=0&ds=&sku_id=WAQG3250_32&src=&idGroup=0&Gar_0=1";
			break;	
			
			case $AMERICANAS.id:
				
				Connect.comprarLink ="http://www.americanas.com.br/produto/garantia/7448751/aparador-de-pelos-multi-qg3250-32-philips?quantity=1&codProdFusion=7448751&codItemFusion=7448752&buy=Comprar+colocar+na+sacola&soldout.itemId=7448751&soldout.skus=&soldout.name=&soldout.email=";
				Connect.varejoLink = "http://www.americanas.com.br/produto/7448751/aparador-de-pelos-multi-qg3250-32-philips";
			break;
			
			case $SUBMARINO.id:
				//console.log("SUBMARINO ID!!!");
				Connect.comprarLink = "http://www.submarino.com.br/produto/garantia/7448751/aparador-de-pelos-philips-multi-qg3250-32?codProdFusion=7448751&codItemFusion=7448752&buy=Comprar";
				Connect.varejoLink = "http://www.submarino.com.br/produto/7448751/aparador-de-pelos-philips-multi-qg3250-32";
			break;
			
			case $SHOPTIME.id:
				
				Connect.varejoLink = "http://www.shoptime.com.br/produto/7448751/aparador-de-pelos-philips-multi-qg3250-32";
				Connect.comprarLink = "http://www.shoptime.com.br/produto/garantia/7448751/aparador-de-pelos-philips-multi-qg3250-32?quantity=1&codProdFusion=7448751&codItemFusion=7448752&buy=Comprar";
			break;
			
			case $WALMART.id:
				
				Connect.varejoLink = "http://www.walmart.com.br/produto/Beleza-e-Saude/Aparador-de-Pelo-e-Trimmer/Philips/281551-Multi-Purpose-Gr-Set-Trapezoid-QG3250-Kit-6em1-Prt?utmi_p=_categoria_beleza-e-saude_cuidados-masculinos_&utmi_pc=Resultado+Busca&utmi_cp=Cuidados+Masculinos";
				Connect.comprarLink = "http://www2.walmart.com.br/Carrinho/Add/281551/-1/0/";
				
			break;
			
			case $NOVOMUNDO.id:
				
				Connect.varejoLink = "http://www.novomundo.com.br/produto/15951/aparador-de-pelos-philips-qg325032-preto-bivolt-minibarbeador-acessorios-lavaveis-9-ajustes-de-altura";
				Connect.comprarLink = "http://www.novomundo.com.br/carrinho/adicionar-item/15951";
				
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




