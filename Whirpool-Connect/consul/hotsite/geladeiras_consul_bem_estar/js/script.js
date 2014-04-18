$(document).ready(function(e) {

	/*Preloader*/
	$("html").lsPreLoader({
		
		backgroundColor: "#99ca3b", 
		progressPosition: "center", 
		logoImage: "images/consul-logo.png",
		progressHeight:  "4px"
		
	});
	/*End of Preloader*/
	
/*-------------------------Analytics--------------------------*/	

	var currentPage = "home/";
	
	$("#header #logo").click(function(e){
		_gaq.push(['_trackEvent', 'Header', 'Click', currentPage + 'Logotipo']);
		currentPage = "home/";
	});
	$("#footer .dez-coisas").click(function(e){
		_gaq.push(['_trackEvent', 'Footer', 'Click', currentPage + '10_coisas']);
	});
	$("#footer .dez-coisas #next").click(function(e){
		_gaq.push(['_trackEvent', 'Footer', 'Click', currentPage + '10_coisas_proximo']);
	});
	$("#footer .dez-coisas #prev").click(function(e){
		_gaq.push(['_trackEvent', 'Footer', 'Click', currentPage + '10_coisas_anterior']);
	});



	$("#home .comparativo").click(function(e){
		_gaq.push(['_trackEvent', 'Home', 'Click', currentPage + 'Comparativo']);
	});
	$("#home .confira1").click(function(e){
		_gaq.push(['_trackEvent', 'Home', 'Click', currentPage + 'crm51']);
		currentPage = "crm51/";
	});
	$("#home .confira2").click(function(e){
		_gaq.push(['_trackEvent', 'Home', 'Click', currentPage + 'crm52']);
		currentPage = "crm52/";
	});
	$("#home .confira3").click(function(e){
		_gaq.push(['_trackEvent', 'Home', 'Click', currentPage + 'crm55']);
		currentPage = "crm55/";
	});
	
	
	$("#navigation a").click(function(e){
		var linkNavigation = $(this).attr("id");
		_gaq.push(['_trackEvent', 'Menu Lateral', 'Click', currentPage + linkNavigation]);
	});
	$("#crm51_btn").click(function(e){
		currentPage = "crm51/";
	});
	$("#crm52_btn").click(function(e){
		currentPage = "crm52/";
	});
	$("#crm55_btn").click(function(e){
		currentPage = "crm55/";
	});
	
	
	$(".colors a").click(function(e){
		var linkText = $(this).html();
		_gaq.push(['_trackEvent', 'Cores', 'Click', currentPage + linkText]);
	});
	
	$(".panel-btn").click(function(e){
		_gaq.push(['_trackEvent', 'Painel', 'Click', currentPage + "painel"]);
	});
	var currentTime = "0";
	var currentPanelHotspot = "";
	$(".panel .hotspots a").hover(function(e){
		currentPanelHotspot = $(this).attr("class");
		currentTime = e.timeStamp;
	}, function(e){
		if(e.timeStamp - currentTime >= 1000){
			_gaq.push(['_trackEvent', 'Painel', 'Hover', currentPage + currentPanelHotspot]);
		}
	});
	
	
	$("#crm51 .open-btn").click(function(e){
		_gaq.push(['_trackEvent', 'Internas', 'Click', currentPage + "abrir"]);
		currentPage = "crm51-aberta/";
	});
	$("#crm52 .open-btn").click(function(e){
		_gaq.push(['_trackEvent', 'Internas', 'Click', currentPage + "abrir"]);
		currentPage = "crm52-aberta/";
	});
	$("#crm55 .open-btn").click(function(e){
		_gaq.push(['_trackEvent', 'Internas', 'Click', currentPage + "abrir"]);
		currentPage = "crm55-aberta/";
	});
	
	
	$("#crm51 .fechar-porta").click(function(e){
		_gaq.push(['_trackEvent', 'Internas', 'Click', currentPage + "fechar"]);
		currentPage = "crm51/";
	});
	$("#crm52 .fechar-porta").click(function(e){
		_gaq.push(['_trackEvent', 'Internas', 'Click', currentPage + "fechar"]);
		currentPage = "crm52/";
	});
	$("#crm55 .fechar-porta").click(function(e){
		_gaq.push(['_trackEvent', 'Internas', 'Click', currentPage + "fechar"]);
		currentPage = "crm55/";
	});
	
	
	var currentInternalHotspot = "";
	$(".opened .hotspots a").hover(function(e){
		currentInternalHotspot = $(this).attr("class").replace(" absolute", "");
		currentTime = e.timeStamp;
	}, function(e){
		if(e.timeStamp - currentTime >= 1000){
			_gaq.push(['_trackEvent', 'interna', 'Hover', currentPage + currentInternalHotspot]);
		}
	});
	
	
/*-------------------------End of Analytics--------------------------*/	
	
	/* Links PreventDefault */
	$("a").click(function(e) {
        if($(this).attr("href") == "#"){
			e.preventDefault();
		}
    });
	/* End of Links PreventDefault */
	
	/*Hover of Links*/
	$(".comparativo, .dez-coisas, .fechar-porta, .evox-btn, #navigation a").hover(function(e) {
        $(this).animate({opacity:0.7}, 150);
    }, function(e){
		$(this).animate({opacity:1}, 150);
	});
	/*End of Hover of Links*/
	
	/*LightBoxes*/
	$(".fechar").click(function(e) {
        $(".lightbox").fadeOut(300);
    });
	$(".comparativo, .comparativo-navigation").click(function(e) {
        $("#comparativo").fadeIn(300);
    });
	$(".dez-coisas").click(function(e) {
        $("#dez-coisas-lightbox").fadeIn(300);
    });
    $(".evox-btn").click(function(e){
		$("#evox-lightbox").fadeIn();
	});
	$(".panel-btn").click(function(e){
		$("#panel-lightbox").fadeIn();
	});
	/*End of LightBoxes*/
	
	/*Confira Hover*/
	$(".confira1, .confira2, .confira3").hover(function(e) {
        $(this).animate({width:119}, 200);
    }, function(e){
		$(this).animate({width:33}, 200);
	});
	/*End of Confira Hover*/
	
	
	
	/* ____________Internas____________________*/
		
	/*Buttons Hover*/
	$(".panel-btn").hover(function(e) {
        $(this).animate({width:125}, 200);
    }, function(e){
		$(this).animate({width:44}, 200);
	});
	$(".open-btn").hover(function(e) {
        $(this).animate({width:92}, 200);
    }, function(e){
		$(this).animate({width:45}, 200);
	});
	/*End of Buttons Hover*/
	
	/*Panel Hotspots Hover*/
	var _arr = [{ button: "#panel-lightbox .hotspots .item1", content: "#panel-lightbox .hotspots-content .item1"},
				{ button: "#panel-lightbox .hotspots .item2", content: "#panel-lightbox .hotspots-content .item2"}, 
				{ button: "#panel-lightbox .hotspots .item3", content: "#panel-lightbox .hotspots-content .item3"}, 
				{ button: "#panel-lightbox .hotspots .item4", content: "#panel-lightbox .hotspots-content .item4"},
				{ button: "#panel-lightbox .hotspots .item5", content: "#panel-lightbox .hotspots-content .item5"},
				{ button: "#panel-lightbox .hotspots .item6", content: "#panel-lightbox .hotspots-content .item6"}];
				
	$.each( _arr, function(index, element){
		$(element.button).hover(function(e) {
            $(element.content).fadeIn(200);
			$(".main").fadeOut(100);
			$(".hotspots a").css("opacity","0.7");
			$(this).css("opacity","1");
			
        }, function(e){
			$(element.content).fadeOut(100);
			$(".main").fadeIn(200);
			$(".hotspots a").css("opacity","1");
		});
	});
	/*End of Panel Hotspots Hover*/
	
	/* CRM51 */
	$("#crm51 .open-btn").click(function(e){
		$("#crm51 .closed").fadeOut(300, function(e){
			$("#crm51 .opened").fadeIn(300);	
		});
	});
	
	var _crm51 = [{ button: "#crm51 .hotspots .item1", content: "#crm51 .hotspots-content .item1"},
				  { button: "#crm51 .hotspots .item2", content: "#crm51 .hotspots-content .item2"}, 
				  { button: "#crm51 .hotspots .item3", content: "#crm51 .hotspots-content .item3"}, 
				  { button: "#crm51 .hotspots .item4", content: "#crm51 .hotspots-content .item4"},
				  { button: "#crm51 .hotspots .item5", content: "#crm51 .hotspots-content .item5"},
				  { button: "#crm51 .hotspots .item6", content: "#crm51 .hotspots-content .item6"},
				  { button: "#crm51 .hotspots .item7", content: "#crm51 .hotspots-content .item3"},
				  { button: "#crm51 .hotspots .item8", content: "#crm51 .hotspots-content .item8"}];
				
	$.each( _crm51, function(index, element){
		$(element.button).hover(function(e) {
            $(element.content).fadeIn(200);
			$("crm51 .hotspots a").css("opacity","0.7");
			$(this).css({opacity:1 , zIndex:4});
			
        }, function(e){
			$(element.content).fadeOut(100);
			$("crm51 .hotspots a").css("opacity","1");
			$(this).css({opacity:1 , zIndex:""});
		});
	});
	
	var fecharCrm51 = (function (e){
		$("#crm51 .opened").fadeOut(300, function(e){
			$("#crm51 .closed").fadeIn(300);	
		});
	});
	
	$("#crm51 .fechar-porta").click(function(e){
		fecharCrm51();
	});
	
	$("#crm51 .colors a").click(function(e) {
		$("#crm51 .colors .branco, #crm51 .colors .evox").toggleClass("selected");
		if($("#crm51 .colors .evox").hasClass("selected")){
			$("#crm51 .closed .product-img").attr("src", "images/internas/crm51/frente-geladeira-crm51-evox.png");
			$("#crm51 .opened .opened-img").attr("src", "images/internas/crm51/frente-geladeira-aberta-evox.png");
			$("#crm51 .closed .product-img").hide().fadeIn(200);
			$("#crm51 .closed .evox-btn").fadeIn(200);
		}
		else{
			$("#crm51 .closed .product-img").attr("src", "images/internas/crm51/frente-geladeira-crm51.png");
			$("#crm51 .opened .opened-img").attr("src", "images/internas/crm51/frente-geladeira-aberta.png");
			$("#crm51 .closed .product-img").hide().fadeIn(200);
			$("#crm51 .closed .evox-btn").fadeOut(200);
		}
	});
	
	/* End of CRM51 */
	
	/* CRM52 */
	$("#crm52 .open-btn").click(function(e){
		$("#crm52 .closed").fadeOut(300, function(e){
			$("#crm52 .opened").fadeIn(300);	
		});
	});
	
	var _crm52 = [{ button: "#crm52 .hotspots .item1", content: "#crm52 .hotspots-content .item1"},
				  { button: "#crm52 .hotspots .item2", content: "#crm52 .hotspots-content .item2"}, 
				  { button: "#crm52 .hotspots .item3", content: "#crm52 .hotspots-content .item3"}, 
				  { button: "#crm52 .hotspots .item4", content: "#crm52 .hotspots-content .item4"},
				  { button: "#crm52 .hotspots .item5", content: "#crm52 .hotspots-content .item5"},
				  { button: "#crm52 .hotspots .item6", content: "#crm52 .hotspots-content .item6"},
				  { button: "#crm52 .hotspots .item7", content: "#crm52 .hotspots-content .item3"},
				  { button: "#crm52 .hotspots .horta", content: "#crm52 .hotspots-content .horta"}];
				
	$.each( _crm52, function(index, element){
		$(element.button).hover(function(e) {
            $(element.content).fadeIn(200);
			$("crm52 .hotspots a").css("opacity","0.7");
			$(this).css({opacity:1 , zIndex:4});
			
        }, function(e){
			$(element.content).fadeOut(100);
			$("crm52 .hotspots a").css("opacity","1");
			$(this).css({opacity:1 , zIndex:""});
		});
	});
	
	var fecharCrm52 = (function (e){
		$("#crm52 .opened").fadeOut(300, function(e){
			$("#crm52 .closed").fadeIn(300);	
		});
	});
	
	$("#crm52 .fechar-porta").click(function(e){
		fecharCrm52();
	});
	
	$("#crm52 .colors a").click(function(e) {
		$("#crm52 .colors .branco, #crm52 .colors .evox").toggleClass("selected");
		if($("#crm52 .colors .evox").hasClass("selected")){
			$("#crm52 .closed .product-img").attr("src", "images/internas/crm52/frente-geladeira-crm52-evox.png");
			$("#crm52 .opened .opened-img").attr("src", "images/internas/crm52/frente-geladeira-aberta-evox.png");
			$("#crm52 .closed .product-img").hide().fadeIn(200);
			$("#crm52 .closed .evox-btn").fadeIn(200);
		}
		else{
			$("#crm52 .closed .product-img").attr("src", "images/internas/crm52/frente-geladeira-crm52.png");
			$("#crm52 .opened .opened-img").attr("src", "images/internas/crm52/frente-geladeira-aberta.png");
			$("#crm52 .closed .product-img").hide().fadeIn(200);
			$("#crm52 .closed .evox-btn").fadeOut(200);
		}
	});
	
	/* End of CRM52 */
	
	/* CRM55 */
	$("#crm55 .open-btn").click(function(e){
		$("#crm55 .closed").fadeOut(300, function(e){
			$("#crm55 .opened").fadeIn(300);	
		});
	});
	
	var _crm55 = [{ button: "#crm55 .hotspots .item1", content: "#crm55 .hotspots-content .item1"},
				  { button: "#crm55 .hotspots .item2", content: "#crm55 .hotspots-content .item2"}, 
				  { button: "#crm55 .hotspots .item3", content: "#crm55 .hotspots-content .item3"}, 
				  { button: "#crm55 .hotspots .item4", content: "#crm55 .hotspots-content .item4"},
				  { button: "#crm55 .hotspots .item5", content: "#crm55 .hotspots-content .item5"},
				  { button: "#crm55 .hotspots .item6", content: "#crm55 .hotspots-content .item6"},
				  { button: "#crm55 .hotspots .item7", content: "#crm55 .hotspots-content .item3"},
				  { button: "#crm55 .hotspots .horta", content: "#crm55 .hotspots-content .horta"}];
				
	$.each( _crm55, function(index, element){
		$(element.button).hover(function(e) {
            $(element.content).fadeIn(200);
			$("crm55 .hotspots a").css("opacity","0.7");
			$(this).css({opacity:1 , zIndex:4});
			
        }, function(e){
			$(element.content).fadeOut(100);
			$("crm55 .hotspots a").css("opacity","1");
			$(this).css({opacity:1 , zIndex:""});
		});
	});
	
	var fecharCrm55 = (function (e){
		$("#crm55 .opened").fadeOut(300, function(e){
			$("#crm55 .closed").fadeIn(300);	
		});
	});
	
	$("#crm55 .fechar-porta").click(function(e){
		fecharCrm55();
	});
	
	$("#crm55 .colors a").click(function(e) {
		$("#crm55 .colors .branco, #crm55 .colors .evox").toggleClass("selected");
		if($("#crm55 .colors .evox").hasClass("selected")){
			$("#crm55 .closed .product-img").attr("src", "images/internas/crm55/frente-geladeira-crm55-evox.png");
			$("#crm55 .opened .opened-img").attr("src", "images/internas/crm55/frente-geladeira-aberta-evox.png");
			$("#crm55 .closed .product-img").hide().fadeIn(200);
			$("#crm55 .closed .evox-btn").fadeIn(200);
		}
		else{
			$("#crm55 .closed .product-img").attr("src", "images/internas/crm55/frente-geladeira-crm55.png");
			$("#crm55 .opened .opened-img").attr("src", "images/internas/crm55/frente-geladeira-aberta.png");
			$("#crm55 .closed .product-img").hide().fadeIn(200);
			$("#crm55 .closed .evox-btn").fadeOut(200);
		}
	});
	
	/* End of CRM55 */
	
	/* ____________Comuns____________________*/
	
	/*10 Coisas*/
	var imageList    = new Array();
	var currentImage = 0;
	$("#thumbs .viewport ul li").each(function(index, element) {
        imageList[ index ]         = new Object();
		imageList[ index ].id      = index;
		//imageList[ index ].element = $(element).children("a");
		//imageList[ index ].image   = $(element).children("a").attr("href");
    });
	
	$( "#prev" ).click( function(e){
		currentImage--;
		$("#thumbs .viewport").animate({left: "+=283"}, 300);
		changeImage();
	} );
	$( "#next" ).click( function(e){
		currentImage++;
		$("#thumbs .viewport").animate({left: "-=283"}, 300);
		changeImage();
	} );
	
	function changeImage(){
		if( currentImage == 0 ) $( "#prev" ).fadeOut(100);
		else $( "#prev" ).fadeIn(100);
		if( currentImage == (imageList.length - 3) ) $( "#next" ).fadeOut(100);
		else $( "#next" ).fadeIn(100);
	}
	/*End of 10 Coisas*/
	
	/* ____________Alternar entre as páginas - Home____________________*/
	
	$("#logo").click(function(e){
		fecharCrm51();
		fecharCrm52();
		fecharCrm55();
		$("#internals, #crm51, #crm52, #crm55").fadeOut(300);
		$("#internals #crm51_btn, #internals #crm52_btn, #internals #crm55_btn").removeClass("selected");
		$("#home").delay(300).fadeIn(300);
	});
	
	$("#home .confira1").click(function(e){
		$("#home").fadeOut(300, function(e){
			$("#internals #crm51_btn").addClass("selected");
			$("#internals, #crm51").fadeIn(300);
		})
	});
	
	$("#home .confira2").click(function(e){
		$("#home").fadeOut(300, function(e){
			$("#internals #crm52_btn").addClass("selected");
			$("#internals, #crm52").fadeIn(300);
		})
	});
	
	$("#home .confira3").click(function(e){
		$("#home").fadeOut(300, function(e){
			$("#internals #crm55_btn").addClass("selected");
			$("#internals, #crm55").fadeIn(300);
		})
	});
	
	/* ____________Alternar entre as páginas - Internas____________________*/
	
	$("#internals #crm51_btn").click(function(e){
		$("#internals #navigation a").removeClass("selected");
		$(this).addClass("selected");
		$("#crm52, #crm55, #internals").fadeOut(300, function(e){
			$("#crm51, #internals").delay(200).fadeIn(300);
			fecharCrm52();
			fecharCrm55();
		})
	});
	
	$("#internals #crm52_btn").click(function(e){
		$("#internals #navigation a").removeClass("selected");
		$(this).addClass("selected");
		$("#crm51, #crm55, #internals").fadeOut(300, function(e){
			$("#crm52, #internals").delay(200).fadeIn(300);
			fecharCrm51();
			fecharCrm55();
		})
	});
	
	$("#internals #crm55_btn").click(function(e){
		$("#internals #navigation a").removeClass("selected");
		$(this).addClass("selected");
		$("#crm51, #crm52, #internals").fadeOut(300, function(e){
			$("#crm55, #internals").delay(200).fadeIn(300);
			fecharCrm51();
			fecharCrm52();
		})
	});
	
});