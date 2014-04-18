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
				Connect.varejoLink = "http://www.americanas.com.br/produto/112269522/cooktop-eletrico-consul-4-bocas-cd060-acendimento-inteligente-preto";
				Connect.comprarLink  = "http://www.americanas.com.br/produto/garantia/112269522/cooktop-eletrico-consul-4-bocas-cd060-acendimento-inteligente-preto?quantity=1&codProdFusion=112269522&codItemFusion=112269531&buy=Comprar+colocar+na+sacola&soldout.itemId=112269522&soldout.skus=&soldout.name=&soldout.email=";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "http://www.submarino.com.br/produto/112269522/cooktop-eletrico-consul-4-bocas-cd060-acendimento-inteligente-preto";
				Connect.comprarLink  = "http://www.submarino.com.br/produto/garantia/112269522/cooktop-eletrico-consul-4-bocas-cd060-acendimento-inteligente-preto?codProdFusion=112269522&codItemFusion=112269531&buy=Comprar";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "http://www.shoptime.com.br/produto/112269522/cooktop-eletrico-consul-4-bocas-cd060-acendimento-inteligente-preto";
				Connect.comprarLink  = "http://www.shoptime.com.br/produto/garantia/112269522/cooktop-eletrico-consul-4-bocas-cd060-acendimento-inteligente-preto?quantity=1&codProdFusion=112269522&codItemFusion=112269531&buy=Comprar";
			break;
			
			case $RICARDOELETRO.id:
				Connect.varejoLink = "http://www.ricardoeletro.com.br/Produto/Cooktop-4-Bocas-Consul-Preto-Bivolt-CD060/256-733-751-267580";
				Connect.comprarLink  = ""; //produto indisponível no momento
			break;
			
			case $INSINUANTE.id:
				Connect.varejoLink = "http://www.insinuante.com.br/Produto/Cooktop-4-Bocas-Consul-Preto-Bivolt-CD060/256-733-751-267580";
				Connect.comprarLink  = ""; //produto indisponível no momento
			break;
			
			case $ELETROSHOPPING.id:
				Connect.varejoLink = "http://www.eletroshopping.com.br/Produto/Cooktop-4-Bocas-Consul-Preto-Bivolt-CD060/256-733-751-267580";
				Connect.comprarLink  = ""; //produto indisponível no momento
			break;
			
			case $CITYLAR.id:
				Connect.varejoLink = "http://www.citylar.com.br/Produto/Cooktop-4-Bocas-Consul-Preto-Bivolt-CD060/256-733-751-267580";
				Connect.comprarLink  = ""; //produto indisponível no momento
			break;
			
			case $COMPRACERTA.id:
				Connect.varejoLink = "http://loja.compracerta.com.br/produtos/detalhes.aspx?pc=4611&cc=0&sc=0&fc=0&vc=0&cache=s&parc=10100509";
				Connect.comprarLink  = "";
			break;
			
			/*case $CONSUL.id:
				Connect.varejoLink = "http://loja.consul.com.br/produtos/detalhes.aspx?pc=4610&cc=0&sc=0&fc=0&vc=0&cache=s";
				Connect.comprarLink  = "";
			break;*/
			
			case $EXTRA.id:
				Connect.varejoLink = "http://www.extra.com.br/eletrodomesticos/FogoeseCooktops/Cooktops/Cooktop-a-gas-4-Bocas-Consul-Facilite-CD060AE-com-Acendimento-Super-Automatico-Bivolt-Preto-1765783.html";
				Connect.comprarLink  = ""; //produto indisponível no momento
			break;
			
			case $CASASBAHIA.id:
				Connect.varejoLink = "http://www.casasbahia.com.br/Cooktop-a-gas-4-Bocas-Consul-Facilite-CD060AE-com-Acendimento-Super-Automatico-Bivolt-Preto-1765783.html";
				Connect.comprarLink  = ""; //produto indisponível no momento
			break;
			
			case $PONTOFRIO.id:
				Connect.varejoLink = "http://www.pontofrio.com.br/eletrodomesticos/FogoeseCooktops/Cooktops/Cooktop-a-gas-4-Bocas-Consul-Facilite-CD060AE-com-Acendimento-Super-Automatico-Bivolt-Preto-1765783.html";
				Connect.comprarLink  = "";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "http://www.walmart.com.br/produto/Eletrodomesticos/Cooktop-4-Bocas/Consul/372448-Cooktop-Consul-4-bocas-Preto-127V-220V";
				Connect.comprarLink  = "http://www2.walmart.com.br/Carrinho/Add/372448/-1/0/";
			break;
			
			case $FASTSHOP.id:
				Connect.varejoLink = "http://www.fastshop.com.br/COOKTOP-4-BOCAS-CONSUL-60HZ-PRETO-COM-FUNCAO-CONTROLE-FACIL-BIVOLT---CD060AE,product,COCD060AEUNA,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
				Connect.comprarLink  = "http://www.fastshop.com.br/ServiceAgreement.aspx?dept=0&ds=&sku_id=COCD060AEUNA&src=&idGroup=0&Gar_0=1";
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


