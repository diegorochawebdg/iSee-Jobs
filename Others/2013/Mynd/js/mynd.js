// JavaScript Document

$(document).ready(function(e) {				
	/**
		Inicia o tooltip na sessao tecnologia
	**/
	//$.getScript("js/tooltip.js");
	var tecnologia_tooltip = new Array();
	tecnologia_tooltip[0]  = "<p>Nunc lacinia massa a mauris alviquet vehicula. ellentesque eleifend molestie sapien, sed. laoreet nibh</p>";
	tecnologia_tooltip[1]  = "<p>Nunc lacinia massa a mauris alviquet vehicula. ellentesque eleifend molestie sapien, sed. laoreet nibh</p>";
	tecnologia_tooltip[2]  = "<p>Nunc lacinia massa a mauris alviquet vehicula. ellentesque eleifend molestie sapien, sed. laoreet nibh</p>";
	tecnologia_tooltip[3]  = "<p>Nunc lacinia massa a mauris alviquet vehicula. ellentesque eleifend molestie sapien, sed. laoreet nibh</p>";
	
	tooltip( tecnologia_tooltip );
		
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
		Eventos nos botões de Up and Down
		@param none
	**/	
	$("#menu_moveUP").click( function() {
		
		switch(currentMenuObject.attr("id") ) 
		{
			case "btn_home": break;
			case "btn_sobre": gotoSection("home"); $(this).attr('href', '#home'); break;	
			case "btn_tecnologia": gotoSection("sobre"); $(this).attr('href', '#sobre-a-mynd'); break;
			case "btn_categorias": gotoSection("tecnologia"); $(this).attr('href', '#tecnologia'); break;
			case "btn_atletas": gotoSection("modalidades"); $(this).attr('href', '#modalidades'); break;
			case "btn_personalizados": gotoSection("atletas"); $(this).attr('href', '#atletas'); break;
			case "btn_contato": gotoSection("personalizados"); $(this).attr('href', '#personalizados'); break;
		}
	});
	$("#menu_moveDOWN").click( function() {
		
		switch(currentMenuObject.attr("id") ) 
		{
			case "btn_home": gotoSection("sobre"); $(this).attr('href', '#sobre-a-mynd'); break;
			case "btn_sobre": gotoSection("tecnologia"); $(this).attr('href', '#tecnologia'); break;	
			case "btn_tecnologia": gotoSection("modalidades"); $(this).attr('href', '#modalidades'); break;
			case "btn_categorias": gotoSection("atletas"); $(this).attr('href', '#atletas'); break;
			case "btn_atletas": gotoSection("personalizados"); $(this).attr('href', '#personalizados'); break;
			case "btn_personalizados": gotoSection("contato"); $(this).attr('href', '#contato'); break;
			case "btn_contato": break;
		}	
	});
	$("#btn_logo").click( function() { gotoSection("home"); });	
			
	/** 
		Eventos nos botões do Menu 
		@param section -> Seção para qual a página deve ir 
	**/
	var backgroundPositionXRetract = "-550%";
	var currentMenuObject = $("#btn_home");
	function gotoSection( section, tempo_anima ) 
	{
		if(tempo_anima == null){
			tempo_anima = 1000;
		}
		
		// items do menu
		var itemsMenu = [ "btn_home" , "btn_sobre" , "btn_tecnologia" , "btn_categorias", "btn_atletas" , "btn_personalizados", "btn_contato" ];
		
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
			
			case "sobre":
				moveToY = (screenHeight * 1);
				$("#btn_sobre").addClass("menu_btn_sobre_active");
				$("#btn_sobre").parent().addClass("active");
				$("#btn_sobre").css("background-position-x" , "-550%");
				$("#btn_sobre").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_sobre");
				
			break;
			
			case "tecnologia": 
				moveToY = (screenHeight * 2);
				
				$("#btn_tecnologia").addClass("menu_btn_tecnologia_active");
				$("#btn_tecnologia").parent().addClass("active");
				$("#btn_tecnologia").css("background-position-x" , "-550%");
				$("#btn_tecnologia").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_tecnologia");
				
			break;
			
			case "modalidades":
				moveToY = (screenHeight * 3);
				$("#btn_categorias").addClass("menu_btn_categorias_active");
				$("#btn_categorias").parent().addClass("active");
				$("#btn_categorias").css("background-position-x" , "-550%");
				$("#btn_categorias").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_categorias");
			break;
			
			case "atletas":
				moveToY = (screenHeight * 4);
				$("#btn_atletas").addClass("menu_btn_atletas_active");
				$("#btn_atletas").parent().addClass("active");
				$("#btn_atletas").css("background-position-x" , "-550%");
				$("#btn_atletas").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_atletas");
			break;
			
			case "personalizados":
				backgroundPositionXRetract = "-4050%";
				moveToY = (screenHeight * 5);
				$("#btn_personalizados").addClass("menu_btn_personalizados_active");
				$("#btn_personalizados").parent().addClass("active");
				$("#btn_personalizados").css("background-position-x" , backgroundPositionXRetract );
				$("#btn_personalizados").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_personalizados");
			break;
			
			case "contato":
				moveToY = (screenHeight * 6);
				$("#btn_contato").addClass("menu_btn_contato_active");
				$("#btn_contato").parent().addClass("active");
				$("#btn_contato").css("background-position-x" , "-550%");
				$("#btn_contato").animate( { "background-position-x" : "100%" } , speedActive, function() { 
					
				});
				currentMenuObject = $("#btn_contato");
			break;
		}
		
		
		
		var isComplete = false;
		$(".holder").animate( { top: moveToY * -1 }, tempo_anima, function() { 
			if(!isComplete) 
			{ 
				// alert("complete! " + isComplete);
				resizeWindow();
			}
			isComplete = true;
		} );
	}
	$("#btn_home").click( function() { gotoSection("home"); } );
	$("#btn_sobre").click( function() { gotoSection("sobre"); } );
	$("#btn_categorias").click( function() { gotoSection("modalidades"); } );
	$("#btn_tecnologia").click( function() { gotoSection("tecnologia"); } );	
	$("#btn_atletas").click( function() { gotoSection("atletas"); } );
	$("#btn_personalizados").click( function() { gotoSection("personalizados"); });
	$("#btn_contato").click( function() { gotoSection("contato"); });
		
	// Funcionalidade do rodapé
	$(".blog a").mouseover(function(){
	  $(this).animate( { "color" : "#FF6600" } , 250, function() { } );
	  	outOndeComprar(0);
		outLojaOficial(0);
	});
	$(".blog a").mouseout(function(){
	  $(this).animate( { "color" : "#FFFFFF" } , 250, function() { } );
	});
	$(".twitter a").mouseover(function(){
	  $(this).animate( { "color" : "#00E3FC" } , 250, function() { } );
	  	outOndeComprar(0);
		outLojaOficial(0);
	});
	$(".twitter a").mouseout(function(){
	  $(this).animate( { "color" : "#FFFFFF" } , 250, function() { } );
	});
	$(".facebook a").mouseover(function(){
	  $(this).animate( { "color" : "#4099FF" } , 250, function() { } );
	  outOndeComprar(0);
		outLojaOficial(0);
	});
	$(".facebook a").mouseout(function(){
	  $(this).animate( { "color" : "#FFFFFF" } , 250, function() { } );
	});
	
	var speedMouseOver = 250;
	function overOndeComprar(speed) { 
		$(".over_onde_comprar").fadeIn();
		//$(".over_onde_comprar").animate( { "opacity" : 1, "top" : "-110px" } , speed, function() { } );
	}
	function outOndeComprar(speed) { 
		$(".over_onde_comprar").fadeOut();
		//$(".over_onde_comprar").animate( { "opacity" : 0, "top" : "-130px" } , speed, function() { } );
	}
	function overLojaOficial(speed) { 
		$(".over_loja_oficial").fadeIn();
		// $(".over_loja_oficial").animate( { "opacity" : 1, "top" : "-200px" } , speed, function() { } );
	}
	function outLojaOficial(speed) { 
		$(".over_loja_oficial").fadeOut();
		// $(".over_loja_oficial").animate( { "opacity" : 0, "top" : "-210px" } , speed, function() { } );
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
	//gotoSection("home");	
		
	// executa a função de redimensionamento da página
	resizeWindow();
	
	//hover das imagens dos atletas
	$("#flavia-img, #gilberto-img, #silvia-img, #susana-img, #thaty-img, #artur-img, #william-img, #licia-img, #kleber-img").hover(function(e) {
        $(this).animate({opacity:0.7}, 200);
		$(this).css("cursor","pointer");
    }, function(){
		$(this).animate({opacity:1}, 200);
	});	
	//$("#flavia-img, #gilberto-img, #silvia-img, #susana-img, #thaty-img, #artur-img, #william-img, #licia-img, #kleber-img").click(function(e) {
//		
//		$("#atleta_flavia, #atleta_gilberto, #atleta_silvia, #atleta_susana, #atleta_thaty, #atleta_artur, #atleta_william, #atleta_licia, #atleta_kleber" ).hide();
//		
//		var id = "atleta_" + $(this).attr("id").split("-")[0];
//		$("#"+id).fadeIn();
//			
//	});
	
	//
	$("#flavia-img, #gilberto-img, #silvia-img, #susana-img, #thaty-img, #artur-img, #william-img, #licia-img, #kleber-img").click(function(e) { 
		var id = "atleta_" + $(this).attr("id").split("-")[0];
		var atleta = $(this).attr("id").split("-")[0];
		var conteudo = $("#"+id).html();
		modalText('<div id="'+ id +'" class="atleta-popup '+ atleta +'">'+ conteudo +'</div>', 780, 400, 'all');
		parent.location.hash = "atletas/#" + id;
	});
	
	$(".close").click(function() {
		$("#popup, #fundo-popup").hide();
	});
	
	
	$(".link li a").mouseover(function(){
		
		$(this).parent().animate({
		 'background-position-y': '100%',
		}, 100);
		
	});
	$(".link li a").mouseout(function(){
		
		if(!$(this).parent().hasClass("active"))
		{ 
			$(this).parent().animate({
			 'background-position-y': '0%',
			}, 100);
		}
		
		
	});
	$(".lojas-fisicas1").click(function(){
		
		$(this).parent().addClass("active");
		$(".lojas-online1").parent().removeClass("active");
		
		$("#content_lojasonline").hide();
		$("#content_lojasfisicas").show();
		
		$(this).attr('href', '#contato/#lojas_fisicas');	
		
	});
	$(".lojas-online1").click(function(){
		
		$(this).parent().addClass("active");
		$(".lojas-fisicas1").parent().removeClass("active");
		
		$("#content_lojasonline").show();
		$("#content_lojasfisicas").hide();
		
		$(this).attr('href', '#contato/#lojas_online');
		
	});
	$(".fecha-lojas ").click(function(){
		
		$(".lojas-box").fadeOut();
		
	});
	$("#rodape_lojasfisicas , .lojas-fisicas2").click(function(){
		
		gotoSection("contato");
		$(".lojas-box").fadeIn();
		$("#content_lojasonline").hide();
		$("#content_lojasfisicas").show();
		
		$(this).attr('href', '#contato/#lojas_fisicas');		
		
	});
	$("#rodape_lojasonline , .lojas-online2").click(function(){
		
		gotoSection("contato");
		$(".lojas-box").fadeIn();
		$("#content_lojasonline").show();
		$("#content_lojasfisicas").hide();
		
		$(this).attr('href', '#contato/#lojas_online');
		
		//$(".lojas-fisicas1").parent().removeClass("active");
		//$(".lojas-online1").parent().addClass("active");
		
	});
	
	$(".content_lojasonline").hide();
	$(".content_lojasfisicas").hide();
	$(".lojas-box").fadeOut();
	
	
	$("#btn_lojas_fisicas_sp").click( function( event ) { showEstado("sp");  });
	$("#btn_lojas_fisicas_rj").click( function( event ) { showEstado("rj");  });
	$("#btn_lojas_fisicas_mg").click( function( event ) { showEstado("mg");  });
	$("#btn_lojas_fisicas_pr").click( function( event ) { showEstado("pr");  });
	$("#btn_lojas_fisicas_rs").click( function( event ) { showEstado("rs");  });
	$("#btn_lojas_fisicas_ce").click( function( event ) { showEstado("ce");  });
	$("#btn_lojas_fisicas_sc").click( function( event ) { showEstado("sc");  });
	$("#btn_lojas_fisicas_df").click( function( event ) { showEstado("df");  });
	$("#btn_lojas_fisicas_ba").click( function( event ) { showEstado("ba");  });
	$("#btn_lojas_fisicas_es").click( function( event ) { showEstado("es");  });
	$("#btn_lojas_fisicas_ma").click( function( event ) { showEstado("ma");  });
	$("#btn_lojas_fisicas_pb").click( function( event ) { showEstado("pb");  });
	function showEstado( estado ) { 
		
		$("#btn_lojas_fisicas_sp").removeClass("active");
		$("#btn_lojas_fisicas_rj").removeClass("active");
		$("#btn_lojas_fisicas_mg").removeClass("active");
		$("#btn_lojas_fisicas_pr").removeClass("active");
		$("#btn_lojas_fisicas_rs").removeClass("active");
		$("#btn_lojas_fisicas_ce").removeClass("active");
		$("#btn_lojas_fisicas_sc").removeClass("active");
		$("#btn_lojas_fisicas_df").removeClass("active");
		$("#btn_lojas_fisicas_ba").removeClass("active");
		$("#btn_lojas_fisicas_es").removeClass("active");
		$("#btn_lojas_fisicas_ma").removeClass("active");
		$("#btn_lojas_fisicas_pb").removeClass("active");
		
		$("#btn_lojas_fisicas_" + estado).addClass("active");
		
		$("#lojas_fisicas_sp").css("display" , "none");
		$("#lojas_fisicas_rj").css("display" , "none");
		$("#lojas_fisicas_mg").css("display" , "none");
		$("#lojas_fisicas_pr").css("display" , "none");
		$("#lojas_fisicas_rs").css("display" , "none");
		$("#lojas_fisicas_ce").css("display" , "none");
		$("#lojas_fisicas_sc").css("display" , "none");
		$("#lojas_fisicas_df").css("display" , "none");
		$("#lojas_fisicas_ba").css("display" , "none");
		$("#lojas_fisicas_es").css("display" , "none");
		$("#lojas_fisicas_ma").css("display" , "none");
		$("#lojas_fisicas_pb").css("display" , "none");
		
		$("#lojas_fisicas_" + estado ).css("display" , "block");
		
		
	}
	
	$("#triathlon-menu").click( function() {  slideModalidades(0); _modalidade(0); });
	$("#ciclismo-menu").click( function() {  slideModalidades(1); _modalidade(1); });
	$("#corrida-menu").click( function() {  slideModalidades(2); _modalidade(2); });
	$("#natacao-menu").click( function() {  slideModalidades(3); _modalidade(3); });
	$("#fitness-menu").click( function() {  slideModalidades(4); _modalidade(4); });
	
	function _modalidade(mod){
		switch(mod){
			case 0: parent.location.hash = "modalidades/#mod_triatlo"; break;
			case 1: parent.location.hash = "modalidades/#mod_ciclismo"; break;
			case 2: parent.location.hash = "modalidades/#mod_corrida"; break;
			case 3: parent.location.hash = "modalidades/#mod_natacao"; break;
			case 4: parent.location.hash = "modalidades/#mod_fitness"; break;
		}
	}
	
	var contadorSliderModalidades = 0;
	function slideModalidades( modalidadeIndex ) 
	{ 
		
		var modalidades_menu = ["triathlon-menu" , "ciclismo-menu" , "corrida-menu"  , "natacao-menu" , "fitness-menu" ];
		var modalidades = ["place-holder-triathlon" , "place-holder-ciclismo" , "place-holder-corrida"  , "place-holder-natacao" , "place-holder-fitness" ];
		$.each( modalidades, function( index, val  ) { 
			$("#"  + val ).hide();
			$("#" + modalidades_menu[index] + " a").removeClass("active");
		});
		
		$("#" + modalidades[modalidadeIndex] ).fadeIn();
		$("#" + modalidades_menu[modalidadeIndex] + " a").hide().fadeIn();
		$("#" + modalidades_menu[modalidadeIndex] + " a").addClass("active");
		
		contadorSliderModalidades = modalidadeIndex;
		
	}
	slideModalidades( 0 );
	$(".avancar").click( function() { 
		
		if( contadorSliderModalidades < 4 ) 
		{ 
			var muda = contadorSliderModalidades + 1;
			slideModalidades( muda );
			_modalidade(muda);
		}
	});
	$(".voltar").click( function() { 
		
		if( contadorSliderModalidades > 0 ) 
		{ 
			var muda = contadorSliderModalidades - 1;
			slideModalidades( muda );
			_modalidade(muda);
		}
	});
	
	
	//Hover slider menu
	$(".slider-menu li").click(function(e) {
			$(".slider-menu li a").removeClass("active");
			$(this).find("a").addClass("active");
			event.preventDefault();
		});
	
	//Hover modalidades (avancar e voltar)
		$("#content-categorias a").hover(function(e) {
		$(this).css("opacity","0.6");
	},
	function() {
		$(this).css("opacity","1");
	});
	
	
	//Hover menu principal (Up and Down)
		$(".setas li a").hover(function() {
		$(this).find("img").css("opacity","0.6");
	},
	function() {
		$(this).find("img").css("opacity","1");
	});	
	
	//Hover rodape_menu
		$(".rodape_menu li span").hover(function() {
		$(this).css("opacity","0.6");
	},
	function() {
		$(this).css("opacity","1");
	});
	

	$( "#accordion" ).accordion({
		collapsible: true
	});
	$("#accordion h3").click(function(){
		parent.location.hash = "tecnologia/#tec_" + $(this).attr('id');
	});

	
	//HOver h3 página Tecnologia
	$("#accordion h3").hover(function() {
		$(this).find("span").css({ color: "#fa6d10" });
	},
	function() {
		$(this).find("span").css({ color: "#FFFFFF" });
	});

	
		$("#place-holder-ciclismo").hide;
		$("#place-holder-corrida").hide;
		$("#place-holder-natacao").hide;
		$("#place-holder-fitness").hide;
		
		$(".menu div li a").mouseover(function() {
			$(this).css({color: "#828282" });
		});
		
		$(".menu div li a").mouseout(function() {
			$(this).css( {color: "#FFFFFF" });
		});
		
		
		//Disable box-lojas
		$(".disable").click(function() {
			$(".lojas-box").css("display","none")
		});
		
	/* Verifica URL se existe # */
	var url = document.URL.split('#');
	var hash1 = url[1].split("/");
	hash1 = hash1[0];
	var hash2 = url[2];
	
	switch(hash1) 
	{
		case "home": gotoSection("home", 0); break;
		case "sobre-a-mynd": gotoSection("sobre", 0); break;
		case "tecnologia": gotoSection("tecnologia", 0); break;	
		case "modalidades": gotoSection("modalidades", 0); break;
		case "atletas": gotoSection("atletas", 0); break;
		case "personalizados": gotoSection("personalizados", 0); break;
		case "contato": gotoSection("contato", 0); break;
	}
	
	if(hash2 != null){
		if(hash2.split("_")[0] == "tec"){
			switch(hash2){
				case "tec_bacteriostatica": $( "#accordion" ).accordion({ active: 0 }); break;
				case "tec_hidrofilidade": $( "#accordion" ).accordion({ active: 1 }); break;
				case "tec_compressao": $( "#accordion" ).accordion({ active: 2 }); break;
				case "tec_raiosuv": $( "#accordion" ).accordion({ active: 3 }); break;
				case "tec_nado": $( "#accordion" ).accordion({ active: 4 }); break;
				case "tec_manutencao": $( "#accordion" ).accordion({ active: 5 }); break;
			}
		}
		
		if(hash2.split("_")[0] == "mod"){
			switch(hash2){
				case "mod_triatlo": slideModalidades(0); break;
				case "mod_ciclismo": slideModalidades(1); break;
				case "mod_corrida": slideModalidades(2); break;
				case "mod_natacao": slideModalidades(3); break;
				case "mod_fitness": slideModalidades(4); break;
			}
		}
		
		if(hash2.split("_")[0] == "atleta"){
			var atleta = hash2;
			var conteudo = $("#"+hash2).html();
			modalText('<div id="'+ hash2 +'" class="atleta-popup '+ atleta +'">'+ conteudo +'</div>', 780, 400, 'all');
		}
		
		if(hash2.split("_")[0] == "lojas"){
			switch(hash2){
				case "lojas_fisicas": gotoSection("contato"); $(".lojas-box").fadeIn(); $("#content_lojasonline").hide(); $("#content_lojasfisicas").show(); break;
				case "lojas_online": gotoSection("contato"); $(".lojas-box").fadeIn(); $("#content_lojasonline").show(); $("#content_lojasfisicas").hide(); break;
			}
			
		}
	}
});



