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
				Connect.varejoLink = "http://www.americanas.com.br/produto/112269506/forno-de-embutir-eletrico-consul-co060arrna-60cm-inox ";
				Connect.comprarLink  = "http://www.americanas.com.br/produto/garantia/112269506/forno-de-embutir-eletrico-consul-co060arrna-60cm-inox?quantity=1&codProdFusion=112269506&codItemFusion=112269514&buy=Comprar+colocar+na+sacola&soldout.itemId=112269506&soldout.skus=&soldout.name=&soldout.email=";
			break;
			
			case $SUBMARINO.id:
				Connect.varejoLink = "http://www.submarino.com.br/produto/112269506/forno-de-embutir-eletrico-consul-co060arrna-60cm-inox";
				Connect.comprarLink  = "http://www.submarino.com.br/produto/garantia/112269506/forno-de-embutir-eletrico-consul-co060arrna-60cm-inox?codProdFusion=112269506&codItemFusion=112269514&buy=Comprar";
			break;
			
			case $SHOPTIME.id:
				Connect.varejoLink = "http://www.shoptime.com.br/produto/112269506/forno-de-embutir-eletrico-consul-co060arrna-60cm-inox";
				Connect.comprarLink  = "http://www.shoptime.com.br/produto/garantia/112269506/forno-de-embutir-eletrico-consul-co060arrna-60cm-inox?quantity=1&codProdFusion=112269506&codItemFusion=112269514&buy=Comprar";
			break;
			
			case $RICARDOELETRO.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $INSINUANTE.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $ELETROSHOPPING.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $CITYLAR.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $COMPRACERTA.id:
				Connect.varejoLink = "http://loja.compracerta.com.br/produtos/detalhes.aspx?pc=4615&cc=0&sc=0&fc=0&vc=0&cache=s&parc=10100509";
				Connect.comprarLink  = "";
			break;
			
			case $EXTRA.id:
				Connect.varejoLink = "http://www.extra.com.br/eletrodomesticos/FornodeEmbutir/Forno-de-Embutir-Consul-Eletrico-Facilite-CO060-com-Timer-Controle-Facil-e-Grill-Inox-60-Litros-1765785.html";
				Connect.comprarLink  = "";
			break;
			
			case $CASASBAHIA.id:
				Connect.varejoLink = "http://www.casasbahia.com.br/Forno-de-Embutir-Consul-Eletrico-Facilite-CO060-com-Timer-Controle-Facil-e-Grill-Inox-60-Litros-1765785.html";
				Connect.comprarLink  = "";
			break;
			
			case $PONTOFRIO.id:
				Connect.varejoLink = "http://www.pontofrio.com.br/eletrodomesticos/FornodeEmbutir/Forno-de-Embutir-Consul-Eletrico-Facilite-CO060-com-Timer-Controle-Facil-e-Grill-Inox-60-Litros-1765785.html";
				Connect.comprarLink  = "";
			break;
			
			case $WALMART.id:
				Connect.varejoLink = "";
				Connect.comprarLink  = "";
			break;
			
			case $FASTSHOP.id:
				Connect.varejoLink = "http://www.fastshop.com.br/FORNO-ELETRICO-DE-EMBUTIR-CONSUL-FACILITE-60L-INOX-COM-GRILL-E-TIMER---CO060ARRNA,product,CO060ARRNA,.aspx?idHotSite=0&idPartner=0&idPartnerGroup=0";
				Connect.comprarLink  = "http://www.fastshop.com.br/ServiceAgreement.aspx?dept=0&ds=&sku_id=CO060ARRNA&src=&idGroup=0&Gar_0=1";
			break;
			
			case $COMPRAFACIL.id:
				Connect.varejoLink = "http://www.comprafacil.com.br/comprafacil/Produto.jsf?VP=59,131,172805,172806,173635&VPP=ELETRODOMESTICOS+FORNOS+FORNOS+DE+EMBUTIR+FORNO+ELETRICO+DE+EMBUTIR+CONSUL+60+LITROS+INOX+BOTOES+CONTROLE+FACIL+TIMER+CO060+220V";
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


