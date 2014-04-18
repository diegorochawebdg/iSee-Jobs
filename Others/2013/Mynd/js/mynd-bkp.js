// JavaScript Document
$(document).ready(function(e) {
		
		
	/**
		Função responsável pelo redimensionamento da página
	**/	
	$(window).resize( resizeWindow );
	function resizeWindow() 
	{
		var altura      = $(window).height();
		var largura     = $(window).width();
		
		if( altura > 672 )
		{
			
			var posicaoMenu = (altura * .5) - ($(".menu div").height() * .5);
			$(".menu div").css("top" , posicaoMenu + "px" );
			
			var posicaoHome  = (altura * .5) - ($(".content").height() * .5);
			$(".content").css("top" , posicaoHome + "px" );
			
			var posicaoRodape = (altura ) - ($(".rodape").height() + 20);
			$(".rodape").css("top" , posicaoRodape + "px" );
			
			// clearTimeout(resizeTimer);
			// resizeTimer = setTimeout(doSomething, 100);
			
		}
		
		if(largura > 960 )
		{
			var posicaoHomeX = (largura * .5) - 680;
			// posicaoHomeX += 280;
			$(".content").css("left" , posicaoHomeX + "px" );
			// alert(posicaoHomeX);
		}
			
		
	}	
		
			
	/** 
		Eventos nos botões do Menu 
		@param section -> Seção para qual a página deve ir 
	**/
	var backgroundPositionXRetract = "-550%";
	var currentMenuObject = $("#btn_home");
	function gotoSection( section ) 
	{
		
		// items do menu
		var itemsMenu = [ "btn_home" , "btn_sobre" , "btn_tecnologia" , "btn_modalidades", "btn_atletas" , "btn_personalizados", "btn_contato" ];
		
		// loop da array
		for(var i = 0; i < itemsMenu.length; i++ )
		{ 
			var currentItem = $("#" + itemsMenu[i] );
			// remove classes dos botões do menu
			if($(currentMenuObject).attr("id") != currentItem.attr("id")) 
			{
				
				// alert("menu_" + itemsMenu[i] + "_active");
				currentItem.removeClass("menu_" + itemsMenu[i] + "_active");
				currentItem.parent().removeClass("active");
				
				
			} else { 
			
				currentItem.parent().removeClass("active");
				
			}
			
		}
		
		var screenHeight =  $(window).height();
		var moveToY 	 = 0;
		var speedActive  = 300; // milisegundos
		
		// animate out
		$(currentMenuObject).animate( { "background-position-x" : backgroundPositionXRetract } , speedActive*2, function() { 
			
		});
		
		backgroundPositionXRetract = "-550%";
		
		switch( section ) 
		{ 
			case "home":
				$("#btn_home").addClass("menu_btn_home_active");
				$("#btn_home").parent().addClass("active");
				$("#btn_home").css("background-position-x" , "-550%");
				$("#btn_home").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_home");
				
			break;
			
			case "home":
				$("#btn_home").addClass("menu_btn_home_active");
				$("#btn_home").parent().addClass("active");
				$("#btn_home").css("background-position-x" , "-550%");
				$("#btn_home").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_home");
				
			break;
			
			case "tecnologia": 
				moveToY = (screenHeight * 1);
				
				$("#btn_tecnologia").addClass("menu_btn_tecnologia_active");
				$("#btn_tecnologia").parent().addClass("active");
				$("#btn_tecnologia").css("background-position-x" , "-550%");
				$("#btn_tecnologia").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_tecnologia");
				
			break;
			
			case "categorias":
				moveToY = (screenHeight * 2);
				$("#btn_categorias").addClass("menu_btn_categorias_active");
				$("#btn_categorias").parent().addClass("active");
				$("#btn_categorias").css("background-position-x" , "-550%");
				$("#btn_categorias").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_categorias");
			break;
			
			case "atletas":
				moveToY = (screenHeight * 3);
				$("#btn_atletas").addClass("menu_btn_atletas_active");
				$("#btn_atletas").parent().addClass("active");
				$("#btn_atletas").css("background-position-x" , "-550%");
				$("#btn_atletas").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_atletas");
			break;
			
			case "personalizados":
				backgroundPositionXRetract = "-2850%";
				moveToY = (screenHeight * 4);
				$("#btn_personalizados").addClass("menu_btn_personalizados_active");
				$("#btn_personalizados").parent().addClass("active");
				$("#btn_personalizados").css("background-position-x" , backgroundPositionXRetract );
				$("#btn_personalizados").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_personalizados");
			break;
			
			case "contato":
				moveToY = (screenHeight * 5);
				$("#btn_contato").addClass("menu_btn_contato_active");
				$("#btn_contato").parent().addClass("active");
				$("#btn_contato").css("background-position-x" , "-550%");
				$("#btn_contato").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_contato");
			break;
		}
		
		
		
		var isComplete = false;
		$(".holder").animate( { top: moveToY * -1 }, 1000, function() { 
			if(!isComplete) 
			{ 
				// alert("complete! " + isComplete);
				resizeWindow();
			}
			isComplete = true;
		} );
		
	}
	$("#btn_home").click( function() { gotoSection("home"); } );
	$("#btn_categorias").click( function() { gotoSection("categorias"); } );
	$("#btn_tecnologia").click( function() { gotoSection("tecnologia"); } );	
	$("#btn_atletas").click( function() { gotoSection("atletas"); } );
	$("#btn_personalizados").click( function() { gotoSection("personalizados"); });
	$("#btn_contato").click( function() { gotoSection("contato"); });
		
	// Funcionalidade do rodapé
	/*$("#twitter_btn").mouseover(function(){
	  $(this).animate( { "color" : "#00E3FC" } , 250, function() { } );
	  	outOndeComprar(0);
		outLojaOficial(0);
	});
	$("#twitter_btn").mouseout(function(){
	  $(this).animate( { "color" : "#FFFFFF" } , 250, function() { } );
	});
	$("#facebook_btn").mouseover(function(){
	  $(this).animate( { "color" : "#4099FF" } , 250, function() { } );
	  outOndeComprar(0);
		outLojaOficial(0);
	});
	$("#facebook_btn").mouseout(function(){
	  $(this).animate( { "color" : "#FFFFFF" } , 250, function() { } );
	});*/
	
	var speedMouseOver = 250;
	function overOndeComprar(speed) { 
		$(".over_onde_comprar").animate( { "opacity" : 1, "top" : "-110px" } , speed, function() { } );
	}
	function outOndeComprar(speed) { 
		$(".over_onde_comprar").animate( { "opacity" : 0, "top" : "-130px" } , speed, function() { } );
	}
	function overLojaOficial(speed) { 
		$(".over_loja_oficial").animate( { "opacity" : 1, "top" : "-200px" } , speed, function() { } );
	}
	function outLojaOficial(speed) { 
		$(".over_loja_oficial").animate( { "opacity" : 0, "top" : "-210px" } , speed, function() { } );
	}
	
	$("#btn_blog").mouseover(function(){
	  outOndeComprar( 0 );
	  outLojaOficial( 0 );
	});
	$("#btn_ondecomprar").mouseover(function(){
	  overOndeComprar( speedMouseOver );
	  outLojaOficial( 0 );
	});
	$(".over_loja_oficial , .over_onde_comprar , .rodape").mouseleave(function(){
	   outOndeComprar( speedMouseOver );
	   outLojaOficial( speedMouseOver );
	});
	$("#btn_lojaoficial").mouseover(function(){
	  overLojaOficial( speedMouseOver );
	  outOndeComprar(0);
	});
	outOndeComprar(0);
	outLojaOficial(0);
					
	// vai para seção Home
	gotoSection("home");	
		
	// executa a função de redimensionamento da página
	resizeWindow();
	
	//hover das imagens dos atletas
	$("#flavia-img, #gilberto-img, #chicao-img, #raul-img, #silvia-img").hover(function(e) {
        $(this).animate({opacity:0.7}, 200);
		$(this).css("cursor","pointer");
    }, function(){
		$(this).animate({opacity:1}, 200);
	});	
});