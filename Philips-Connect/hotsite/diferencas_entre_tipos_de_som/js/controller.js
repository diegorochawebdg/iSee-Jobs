
	/**
	
		Controle das funções
	
	**/
	
	
	/**
		Analytics
	**/
	
	var nameFolder = "hotsite/diferencas_entre_tipos_de_som/";
	var _gaq = _gaq || [];
	var pageTracker = _gat._getTracker('UA-37482913-1');
	
	
$(function(){
	
	
	/**
		Hostname->analytics
	**/
	
	_path = window.location.href.split( '/' );
	protocol = _path[0];
	host = _path[2];
	url = protocol + '//' + host + "/";
	
	nameFolder = url + nameFolder;
	pageTracker._trackPageview( nameFolder + "index.html" );
	
	
	/**
		Preloader das imagens
	**/
	
	$("body").queryLoader2({
		
		backgroundColor: "#000",
		barColor: "#FFF",	
		barHeight: 10,
		percentage: true,
		completeAnimation: "grow",
		minimumTime: 100		
		
	});
	
	
	/**
		Controle navegação
	**/
	
	var divHome = "#home";
	var _menu = [	
					{ botao: "mini-system", pagina: "page1", classe: "mini", analytics: "mini-system" },
					{ botao: "micro-system", pagina: "page2", classe: "micro", analytics: "micro-system" },
					{ botao: "home-theater", pagina: "page3", classe: "home", analytics: "home-theater" },
					{ botao: "dock-station", pagina: "page4", classe: "dock", analytics: "dock-station" },
					{ botao: "radio-portatil", pagina: "page5", classe: "radio", analytics: "radio-portatil" }
				];
	var posicao = 0;
	
	$.each(_menu, function( index, value ){
		
		
		/**
			home->menu
		**/
		
		$( "#" + value.botao )
		.hover(
			function(e){
				
				$( "#menu .efeito"  ).removeClass("default").addClass(value.classe);
				$( "#menu .pessoas"  ).removeClass("default").addClass(value.classe);
				$( "#menu .brilho"  ).removeClass("default").addClass(value.classe);
				
			}, 
			function(e){
				
				$( "#menu .efeito"  ).removeClass(value.classe).addClass("default");
				$( "#menu .pessoas"  ).removeClass(value.classe).addClass("default");
				$( "#menu .brilho"  ).removeClass(value.classe).addClass("default");
				
			}
		)
		.on("click", function(e){
			
			$( divHome ).fadeOut();
			$( "#" + value.pagina ).delay(400).fadeIn();
			
			posicao = index;
			
			//Analytics
			pageTracker._trackPageview( nameFolder + value.analytics );
			pageTracker._trackEvent( "menu" , "click" , value.analytics );
						
		});
		
		
		/**
			pages->nav
		**/
		
		$("#" + value.pagina + " .nav .btn-fechar").on("click", function(e){
			
			$( "#" + value.pagina ).fadeOut();
			$( divHome ).delay(400).fadeIn();
			
			//Analytics
			pageTracker._trackEvent( "botao" , "click" , value.analytics + "-fechar" );
			
		});
		
		$("#" + value.pagina + " .nav .btn-prev").on("click", function(e){
			
			$( "#" + _menu[ posicao ].pagina ).fadeOut();
			
			//Analytics
			pageTracker._trackEvent( "botao" , "click" , _menu[ posicao ].analytics + "-anterior" );
			
			if( ( posicao - 1 ) >= 0 ) posicao--;
			else posicao = _menu.length - 1;
			
			$( "#" + _menu[ posicao ].pagina ).delay(400).fadeIn();
			
		});
		
		$("#" + value.pagina + " .nav .btn-next").on("click", function(e){
			
			$( "#" + _menu[ posicao ].pagina ).fadeOut();
			
			//Analytics
			pageTracker._trackEvent( "botao" , "click" , _menu[ posicao ].analytics + "-proximo" );
			
			if( ( posicao + 1 ) < _menu.length ) posicao++;
			else posicao = 0;
			
			$( "#" + _menu[ posicao ].pagina ).delay(400).fadeIn();
			
		});
		
		
		/**
			pages->botão-clique-aqui
		**/
		
		$( "#" + value.pagina + " .clique-aqui" ).on("click", function(e){
			
			//Analytics
			pageTracker._trackPageview( nameFolder + value.analytics + "-comprar" );
			
		});
		
	});
	
	
});