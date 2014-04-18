var $LINKS_COMPRAR = [];

$(function() {
    
	var _topMenu = {"#btn-cozinha": "#btn-home-cozinha", "#btn-alimentos": "#btn-home-alimentos", "#btn-lavanderia": "#btn-home-lavanderia"};
	var _botaoHome = {"#btn-home-cozinha": ["#cozinha", "cozinha"], "#btn-home-alimentos": ["#alimentos", "alimentos"], "#btn-home-lavanderia": ["#lavanderia", "lavanderia"]};
	var _posicaoHomeInicial = 0;
	
	var _subMenus = { "#cozinha": {"#btn-01": ["#conteudo-01", "true", "Utensílios de Silicone", "utensilios_silicone"],
								   "#btn-02": ["#conteudo-02", "true", "Formas de Sílicone", "formas_silicone"],
								   "#btn-03": ["#conteudo-03", "true", "Formas Jump", "formas_jump"], 
								   "#btn-04": ["#conteudo-04", "false", "Panela a Vapor Para Micro-ondas", "panela_vapor_microondas_silicone"], 
								   "#btn-05": ["#conteudo-05", "false", "Panela Para Micro-ondas", "panela_microondas"], 
								   "#btn-06": ["#conteudo-06", "false", "Panela a Vapor Para Micro-ondas", "panela_vapor_microondas"], 
								   "#btn-07": ["#conteudo-07", "true", "Organizadores de Geladeira", "organizadores_geladeira"]}, 
					  "#alimentos": {"#btn-01": ["#conteudo-01", "true", "Potes Linha Conserva Fácil", "potes_conserva_facil"], 
					  				 "#btn-02": ["#conteudo-02", "false", "Tampa Fácil Dome", "tampa_facil_dome"], 
									 "#btn-03": ["#conteudo-03", "true", "Saquinhos Conserva Fácil", "saquinhos_conserva_facil"], 
									 "#btn-04": ["#conteudo-04", "true", "Guarda Fácil", "guarda_facil"], 
									 "#btn-05": ["#conteudo-05", "false", "Tampa Fácil", "tampa_facil"]},
					  "#lavanderia": {"#btn-01": ["#conteudo-01", "false", "Capas de Máquina de Lavar", "capas_maquina_lavar"], 
					  				  "#btn-02": ["#conteudo-02", "true", "Sacos de Roupa Íntima", "sacos_roupa_intima"], 
									  "#btn-03": ["#conteudo-03", "false", "Grade para Secadora Brastemp", "grade_secadora_brastemp"], 
									  "#btn-04": ["#conteudo-04", "false", "Brastemp BAG", "brastemp_bag"]/*,
									  "#btn-05": ["#conteudo-05", "false", "Ponteíras para Aspiradores", "ponteiras_aspiradores"]*/} };
	var _subMenusAnt = "";
	
	var _spots = { "#spot-01": ["#conteudo-spot-01", "spot1"], "#spot-02": ["#conteudo-spot-02", "spot2"], "#spot-03": ["#conteudo-spot-03", "spot3"], "#spot-04": ["#conteudo-spot-04", "spot4"], "#spot-05": ["#conteudo-spot-05", "spot5"] };
	var tempo = 1000;
	var tempoInicial = 0;
	var tempoFinal = 0;
	
	var analyticsPagina = "";
	var analyticsConteudo = "";
	var analyticsSpot = "";
	
	var _links = {
				"link_cozinha_utensilios_silicone": $LINKS_COMPRAR[0], "link_cozinha_formas_silicone": $LINKS_COMPRAR[1], "link_cozinha_formas_jump": $LINKS_COMPRAR[2], "link_cozinha_panela_vapor_microondas_silicone": $LINKS_COMPRAR[3],
				"link_cozinha_panela_microondas": $LINKS_COMPRAR[4], "link_cozinha_panela_vapor_microondas": $LINKS_COMPRAR[5], "link_cozinha_organizadores_geladeira": $LINKS_COMPRAR[6], "link_alimentos_potes_conserva_facil": $LINKS_COMPRAR[7],
				"link_alimentos_tampa_facil_dome": $LINKS_COMPRAR[8], "link_alimentos_saquinhos_conserva_facil": $LINKS_COMPRAR[9], "link_alimentos_guarda_facil": $LINKS_COMPRAR[10], "link_alimentos_tampa_facil": $LINKS_COMPRAR[11],
				"link_lavanderia_capas_maquina_lavar": $LINKS_COMPRAR[12], "link_lavanderia_sacos_roupa_intima": $LINKS_COMPRAR[13], "link_lavanderia_grade_secadora_brastemp": $LINKS_COMPRAR[14], "link_lavanderia_brastemp_bag": $LINKS_COMPRAR[15]/*,
				"link_lavanderia_ponteiras_aspiradores": $LINKS_COMPRAR[16]*/
				};
	
	_home();
	
	function _home(){
		$.each(_botaoHome, function(ind, val){
			$(ind).on("click", function(e){
				$(ind).fadeOut();
				
				for(key in _botaoHome){
					if(key != ind){
						$(key.replace("btn-", "")).fadeOut();
					}else{
						_posicaoHomeInicial = $(key.replace("btn-", "")).css("margin-left");
						if(key != "#btn-home-cozinha"){
							$(key.replace("btn-", "")).delay(400).animate({"margin-left": "-480px"}, 500, function(){
								$(val[0]).fadeIn();
								_pageCarrega( ind, val[0] );
							});
						}else{
							$(key.replace("btn-", "")).delay(400).animate({"margin-left": "-480px"}, 0, function(){
								$(val[0]).fadeIn();
								_pageCarrega( ind, val[0] );
							});
						}
						
						analyticsPagina = val[1];
						
					}
				}				
			});
		});	
		
	}
	
	function _pageCarrega( botao, divRaiz ){
		$(divRaiz + " .btn-voltar-home").on("click", function(e){
			_eventosAnalytics( "" );
			_pageDescarrega( botao, divRaiz );
		});
		_conteudoCarrega( divRaiz );
		
		$("#top-menu").fadeIn();
		_menuSuperior( divRaiz );
				
	}
	
	function _pageDescarrega( botao, divRaiz ){
		$(divRaiz).fadeOut();
		$(botao).fadeIn();
		$(botao.replace("btn-", "")).animate({"margin-left": _posicaoHomeInicial}, 500, function(){
			for(key in _botaoHome){
				if(key != botao){
					$(key.replace("btn-", "")).fadeIn();
				}
			}
		});
		
		$(divRaiz + " .btn-voltar-home").off("click");
		
		for(key in _subMenus[divRaiz]){
			$(divRaiz + " " + key).off("mouseenter");
			$(divRaiz + " " + key + "-hover").off("mouseenter").off("mouseleave").off("click");
			_removeAtributos([key, key + "-hover"]);
		}
		
		$("#top-menu").fadeOut();
		$.each(_topMenu, function(ind, val){
			$("#top-menu " + ind).off("click");
			target_carrega = "";
			target_descarrega = "";
		});
		
		_conteudoDescarrega( divRaiz, _subMenusAnt );		
		_subMenusAnt = "";
		analyticsPagina = "";
	}
	
	function _menuSuperior( divRaiz ){
		$.each(_topMenu, function(ind, val){
			if(ind == "#btn-" + divRaiz.replace("#", "")){ 
				$("#top-menu " + ind).css({"display": "none"});
			}	
			else{
				$("#top-menu " + ind).css({"display": "block"})
									 .on("click", function(e){
					e.preventDefault();
					var target_carrega = $(val);
					var target_descarrega = $(divRaiz + " .btn-voltar-home");
					target_descarrega.click();
					var intervalo = setInterval(function(e){
												target_carrega.click();
												clearInterval(intervalo);
												},1000);
				});
			}
		});
	}
	
	function _conteudoCarrega( divRaiz ){		
		$.each(_subMenus[divRaiz], function( ind, val){
			
			$(divRaiz + " " + ind).css({"opacity": 0.5});
			
			if(_subMenusAnt == ""){
				$(divRaiz + " " + ind).css({"opacity": 1});
				$(divRaiz + " #btn-seta").css({"top": (parseFloat($(divRaiz + " " + ind).css("height"))/3) + parseFloat($(divRaiz + " " + ind).position().top) + 9 + "px"}).fadeIn();
				$(divRaiz + " " + val[0]).fadeIn(500);
				
				if( val[1] == "true" ){
					_spotsCarrega( divRaiz, val[0] );
				}
				
				_botaoComprar( divRaiz, val[3] );
				
				analyticsConteudo = val[3];
				_eventosAnalytics( analyticsPagina + "/" + analyticsConteudo );
				
				_subMenusAnt = ind;
			}
			
			$(divRaiz + " " + ind).on("mouseenter", function(e){
				for(key in _subMenus[divRaiz]){
					$(divRaiz + " " + key).show();
					$(divRaiz + " " + key + "-hover").hide();
				}
				
				$(divRaiz + " " + ind).hide();
				$(divRaiz + " " + ind + "-hover").show();
			});
			
			$(divRaiz + " " + ind + "-hover").on("mouseenter", function(e){
				$(divRaiz + " .submenu #btn-label p").html(val[2]);
				$(divRaiz + " .submenu #btn-label").stop(true, true).fadeOut(200).css({"top": (parseFloat($(divRaiz + " " + ind + "-hover").css("height"))/3) + parseFloat($(divRaiz + " " + ind + "-hover").position().top) + "px"}).fadeIn(200);
			}).on("mouseleave", function(e){
				$(divRaiz + " " + ind).show();
				$(divRaiz + " " + ind + "-hover").hide();
				
				$(divRaiz + " .submenu #btn-label p").html("");
				$(divRaiz + " .submenu #btn-label").stop(true, true).fadeIn(200).fadeOut(200);
			}).on("click", function(e){
				
				if( _subMenusAnt != "" ){
					_conteudoDescarrega( divRaiz, _subMenusAnt )
				}
				
				$(divRaiz + " " + ind).css({"opacity": 1});
				$(divRaiz + " #btn-seta").css({"top": (parseFloat($(divRaiz + " " + ind + "-hover").css("height"))/3) + parseFloat($(divRaiz + " " + ind + "-hover").position().top) + 9 + "px"});
				$(divRaiz + " " + val[0]).fadeIn(400);
				
				if( val[1] == "true" ){
					_spotsCarrega( divRaiz, val[0] );
				}
				
				_botaoComprar( divRaiz, val[3] );
				
				analyticsConteudo = val[3];
				_eventosAnalytics( analyticsPagina + "/" + analyticsConteudo );
						
				_subMenusAnt = ind;
			});
			
		});	
	}
	
	function _conteudoDescarrega( divRaiz, subMenusAnt ){
		$(divRaiz + " " + _subMenusAnt).css({"opacity": 0.5});				
		try{
			$(divRaiz + " " + _subMenus[divRaiz][_subMenusAnt][0]).css({"display": "none"});
			
			_removeAtributos( divRaiz + " " + _subMenus[divRaiz][_subMenusAnt][0] );
			
			if( _subMenus[divRaiz][_subMenusAnt][1] == "true" ){
				_spotsDescarrega( divRaiz, _subMenus[divRaiz][_subMenusAnt][0] );
			}
		}catch(err){};
		
		analyticsConteudo = "";
	}
	
	function _botaoComprar( divRaiz, pagina ){
		$("#btn-comprar-" + divRaiz.replace("#", "")).parents("a").attr("href", _links["link_" + divRaiz.replace("#", "") + "_" + pagina])
		$("#btn-comprar-" + divRaiz.replace("#", "")).parents("a").off("click").on("click", function(e){_eventosAnalytics( divRaiz.replace("#", "") + "/" + pagina + "/comprar" )});
	}
	
	function _spotsCarrega( divRaiz, divConteudo ){
		$.each(_spots, function(ind, val){
			$(divRaiz + " " + divConteudo + " " + ind).css({"opacity": 0.5})
			.on("mouseenter", function(e){
				for(key in _spots){
					if(key != ind){
						$(divRaiz + " " + divConteudo + " " + key).css({"z-index": 0});
					}
				}
				$(divRaiz + " " + divConteudo + " " + ind).css({"opacity": 1});
				$(divRaiz + " " + divConteudo + " " + val[0]).stop(true, true).fadeOut().fadeIn();
				tempoInicial = e.timeStamp;
			}).on("mouseleave", function(e){
				for(key in _spots){
					if(key != ind){
						$(divRaiz + " " + divConteudo + " " + key).css({"z-index": 4});
					}
				}
				$(divRaiz + " " + divConteudo + " " + ind).css({"opacity": 0.5});
				$(divRaiz + " " + divConteudo + " " + val[0]).stop(true, true).fadeIn().fadeOut();
				tempoFinal = e.timeStamp;
				
				if( (tempoFinal - tempoInicial) > tempo ){
					analyticsSpot = val[1];
					_eventosAnalytics( analyticsPagina + "/" + analyticsConteudo + "/" + analyticsSpot );
				}
				
			});
		});
	}
	
	function _spotsDescarrega( divRaiz, divConteudo ){
		$.each(_spots, function(ind, val){
			$(divRaiz + " " + divConteudo + " " + ind).off("mouseenter").off("mouseleave");
			_removeAtributos( divRaiz + " " + divConteudo + " " + ind );
		});
		analyticsSpot = "";
	}
	
	function _removeAtributos( obj ){
		if(!$.isArray(obj)) $(obj).removeAttr("style");
		else for(var i = 0; i < obj.length; i++) $(obj[i]).removeAttr("style");
	}
	
	function _eventosAnalytics( evento ){
		if(evento != ""){
			_gaq.push(['_trackPageview', window.location.pathname + evento + ".html"]);
		}else{
			_gaq.push(['_trackPageview', window.location.pathname]);
		}
	}
	
});
