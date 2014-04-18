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
			var custom_sku = Connect.getCustomSKU();
			
			switch( varejo ) { 
			
				case "americanas":
					
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.americanas.com.br/produto/112831378/forma-brastemp-jump-redonda";
						Connect.comprarLink = "http://carrinho.americanas.com.br/checkout/?quantity=1&codProdFusion=112831378&codItemFusion=112831386&buy=Comprar+colocar+na+sacola&soldout.itemId=112831378&soldout.skus=&soldout.name=&soldout.email=";
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.americanas.com.br/produto/112831351/forma-brastemp-jump-retangular";
						Connect.comprarLink = "http://carrinho.americanas.com.br/checkout/?quantity=1&codProdFusion=112831351&codItemFusion=112831360&buy=Comprar+colocar+na+sacola&soldout.itemId=112831351&soldout.skus=&soldout.name=&soldout.email=";
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.varejoLink  = "http://www.americanas.com.br/produto/112831335/forma-muffin-brastemp-jump";
						Connect.comprarLink = "http://carrinho.americanas.com.br/checkout/?quantity=1&codProdFusion=112831335&codItemFusion=112831343&buy=Comprar+colocar+na+sacola&soldout.itemId=112831335&soldout.skus=&soldout.name=&soldout.email=";
						
					}
					
					
				break;
				
				case "submarino":
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.submarino.com.br/produto/112831378/forma-brastemp-jump-redonda";
						Connect.comprarLink = "http://carrinho.submarino.com.br/checkout/?codProdFusion=112831378&codItemFusion=112831386&buy=Comprar";
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.submarino.com.br/produto/112831351/forma-brastemp-jump-retangular";
						Connect.comprarLink = "http://carrinho.submarino.com.br/checkout/?codProdFusion=112831351&codItemFusion=112831360&buy=Comprar";
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.varejoLink  = "http://www.submarino.com.br/produto/112831335/forma-muffin-brastemp-jump";
						Connect.comprarLink = "http://carrinho.submarino.com.br/checkout/?codProdFusion=112831335&codItemFusion=112831343&buy=Comprar";
					
					}
				
				break;
				
				case "shoptime":
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.shoptime.com.br/produto/112831378/forma-brastemp-jump-redonda";
						Connect.comprarLink = "http://carrinho.shoptime.com.br/checkout/?quantity=1&codProdFusion=112831378&codItemFusion=112831386&buy=Comprar";
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.shoptime.com.br/produto/112831351/forma-brastemp-jump-retangular";
						Connect.comprarLink = "http://carrinho.shoptime.com.br/checkout/?quantity=1&codProdFusion=112831351&codItemFusion=112831360&buy=Comprar";
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.varejoLink  = "http://www.shoptime.com.br/produto/112831335/forma-muffin-brastemp-jump";
						Connect.comprarLink = "http://carrinho.shoptime.com.br/checkout/?quantity=1&codProdFusion=112831335&codItemFusion=112831343&buy=Comprar";
					
					}
				
				break;	
				
				case "magazineluiza":
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.magazineluiza.com.br/forma-para-bolo-redonda-antiaderente-de-silicone-brastemp-gourmand-jump/p/0880110/ud/assa/";
						Connect.hideBuyNowButton(); // Sem estoque
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.magazineluiza.com.br/forma-para-pao-retangular-antiaderente-brastemp-gourmand-jump/p/0880107/ud/assa/";
						Connect.hideBuyNowButton(); // Sem estoque
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.varejoLink  = "http://www.magazineluiza.com.br/forma-para-cupcake-retangular-antiaderente-de-silicone-brastemp-gourmand-jump/p/0880106/ud/assa/";
						Connect.hideBuyNowButton(); // Sem estoque
					
					}
				
				break;		
				
			}
			
		
		
		} else { 
		
			// com iFrame
			var custom_sku = getParameterByName("custom_sku");
			
			
			// Checa os links
			switch( Connect.varejoID ) 
			{
				
				/*case $AMERICANAS.id:
					Connect.varejoLink = "";
					Connect.comprarLink  = "";
				break;*/
				
				case $RICARDOELETRO.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.ricardoeletro.com.br/Produto/Forma-Jump-Redonda/805-834-836-287634";
						Connect.hideBuyNowButton();
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.ricardoeletro.com.br/Produto/Forma-Jump-Retangular-Brastemp/805-834-836-287636";
						Connect.hideBuyNowButton();
						
					}
				
				break;
				
				case $INSINUANTE.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.insinuante.com.br/Produto/Forma-Jump-Redonda/805-834-836-287634";
						Connect.hideBuyNowButton();
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.insinuante.com.br/Produto/Forma-Jump-Retangular-Brastemp/805-834-836-287636";
						Connect.hideBuyNowButton();
						
					}
				
				break;
				
				case $ELETROSHOPPING.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.eletroshopping.com.br/Produto/Forma-Jump-Redonda/805-834-836-287634";
						Connect.hideBuyNowButton();
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.eletroshopping.com.br/Produto/Forma-Jump-Retangular-Brastemp/805-834-836-287636";
						Connect.hideBuyNowButton();
						
					}
				
				break;
				
				case $CITYLAR.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.citylar.com.br/Produto/Forma-Jump-Redonda/805-834-836-287634";
						Connect.hideBuyNowButton();
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.citylar.com.br/Produto/Forma-Jump-Retangular-Brastemp/805-834-836-287636";
						Connect.hideBuyNowButton();
						
					}
				
				break;
				
				case $COMPRACERTA.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.hideSocial();
						Connect.hideBuyNowButton();
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.hideSocial();
						Connect.hideBuyNowButton();
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.hideSocial();
						Connect.hideBuyNowButton();
					
					}
				
				break;
				
				case $MAGAZINELUIZA.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://www.magazineluiza.com.br/forma-para-bolo-redonda-antiaderente-de-silicone-brastemp-gourmand-jump/p/0880110/ud/assa/";
						Connect.hideBuyNowButton(); // Sem estoque
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://www.magazineluiza.com.br/forma-para-pao-retangular-antiaderente-brastemp-gourmand-jump/p/0880107/ud/assa/";
						Connect.hideBuyNowButton(); // Sem estoque
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.varejoLink  = "http://www.magazineluiza.com.br/forma-para-cupcake-retangular-antiaderente-de-silicone-brastemp-gourmand-jump/p/0880106/ud/assa/";
						Connect.hideBuyNowButton(); // Sem estoque
					
					}
				
				break;
				
				case $BRASTEMP.id:
				
					if( custom_sku == "redonda" ) { 
					
						Connect.varejoLink  = "http://loja.brastemp.com.br/produto/detalhes_purificador.aspx?pc=4983&cc=3&sc=0&fc=0&vc=0&nm=forma+jump+-+redonda&cache=s";
						Connect.hideBuyNowButton();
					
					} else if( custom_sku == "retangular" ) { 
						
						Connect.varejoLink  = "http://loja.brastemp.com.br/produto/detalhes_purificador.aspx?pc=4981&cc=3&sc=0&fc=0&vc=0&nm=forma+jump+-+retangular&cache=s";
						Connect.hideBuyNowButton();
						
					} else if( custom_sku == "muffin" ) { 
						
						Connect.varejoLink  = "http://loja.brastemp.com.br/produto/detalhes_purificador.aspx?pc=4979&cc=3&sc=0&fc=0&vc=0&nm=forma+jump+-+muffin&cache=s";
						Connect.hideBuyNowButton();
					
					}
				
				break;
								
				case "undefined":
				case 0:
					Connect.hideBuyNowButton();
					Connect.hideSocial();
					//Connect.hideSaibaMais();
					Connect.hideManual();
				break;
			
			}
			
		
		}
		
		Connect.hideManual();
		
	}
	
	this.init();
}


