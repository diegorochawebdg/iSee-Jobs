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
	
		var custom_sku = getParameterByName("custom_sku");
		console.log( "custom_sku " + custom_sku );
	
		// Checa os links
		switch( Connect.varejoID ) 
		{
			
			case $WALMART.id:
				
				Connect.varejoLink = "http://www.walmart.com.br/produto/Eletroportateis/Panela-de-Pressao-Eletrica/Electrolux/373870-Panela-de-Pressao-Chef-PCC10--Electrolux";
				Connect.hideBuyNowButton();
				
			break;
			
			case $EFACIL.id:
			
				if( custom_sku == "110" ){
					Connect.varejoLink = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2209153";
					Connect.comprarLink  = "http://carrinho.efacil.com.br/ConfirmaGarantiaEstendida.aspx?CodMer=2209153";
				}else if( custom_sku == "220" ){
					Connect.varejoLink = "http://www.efacil.com.br/DetalheProduto.aspx?CodMer=2209154";
					Connect.comprarLink  = "http://carrinho.efacil.com.br/ConfirmaGarantiaEstendida.aspx?CodMer=2209154";
				}
				
			break;
			
			case "undefined":
			case 0:
				Connect.hideBuyNowButton();
				Connect.hideSocial();
				
			break;
		
		}
		
	}
}