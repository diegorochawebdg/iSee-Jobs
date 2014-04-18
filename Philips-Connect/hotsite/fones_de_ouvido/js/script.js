var currentPage = "/bluetooth";
var nameFolder = "/hotsite/fones_de_ouvido/";

$(document).ready(function(e) {
	
	var pageTracker = _gat._getTracker("UA-37482913-1");
	//pageTracker._trackPageview();
	
	var posicao_carrosel = "";
	
	
	$("body").queryLoader2({
		barColor: "#FFF",
		backgroundColor: "#000",
		percentage: false,
		barHeight: 1,
		completeAnimation: "grow",
		minimumTime: 100
	});
		$("a").click(function(e) {
            e.preventDefault();
        });;
		
		//Menu corner
		$("#menu li:first-child").corner("left");
		$("#menu li:last-child").corner("right");
		//Menu colors
		var menu_colors = function(){
			$("#menu a").css('color', '');
			$("#menu li").css('background', '');
		}
		//Menu center
		$("#menu .menu-center").css({"width": $("#menu ul li").length * 153 + "px", "margin": "0 auto"});
		//Menu Actions
		$(".voltar").click(function(e) {
			menu_colors();
			$("*").removeClass("active");
			$(this).parent().parent("div").fadeOut(400, function(){
				$("#home").fadeIn(400).addClass("active");
				pageTracker._trackPageview( nameFolder + posicao_carrosel + "/voltar" + currentPage );
        		currentPage = posicao_carrosel + "/";
			});
		});
		
		$(".call-to-action").click(function(e) {
			pageTracker._trackPageview( nameFolder + currentPage + "/varejo_call_to_action"  );
		});
			
		$(".fone1 a").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "bluetooth/carrossel_menu");
			currentPage = "/bluetooth";
			$("#bluetooth-btn").css('color', '#0b5ed7');
			$("#bluetooth-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone1").fadeIn(400).addClass("active");
			})
		});	
		$("#bluetooth-btn").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "bluetooth/menu/" + currentPage );
        	currentPage = "/bluetooth";
			
			$("#bluetooth-btn").css('color', '#0b5ed7');
			$("#bluetooth-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone1").fadeIn(400).addClass("active");
			})
		});
		$("#games-btn").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "games/menu/" + currentPage );
			currentPage = "/games";
			$("#games-btn").css('color', '#0b5ed7');
			$("#games-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone2").fadeIn(400).addClass("active");
			})
		});
		$(".fone2 a").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "games/carrossel_menu" );
			currentPage = "/games";
			$("#games-btn").css('color', '#0b5ed7');
			$("#games-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone2").fadeIn(400).addClass("active");
			})
		});
		$("#dj-btn").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "dj/menu/" + currentPage );
			currentPage = "/dj";
			$("#dj-btn").css('color', '#0b5ed7');
			$("#dj-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone3").fadeIn(400).addClass("active");
			})
		});
		$(".fone3 a").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "dj/carrossel_menu" );
			currentPage = "/dj";
			$("#dj-btn").css('color', '#0b5ed7');
			$("#dj-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone3").fadeIn(400).addClass("active");
			})
		});
		$("#estilos-btn").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "estilos/menu/" + currentPage );
			currentPage = "/estilos";
			$("#estilos-btn").css('color', '#0b5ed7');
			$("#estilos-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone4").fadeIn(400).addClass("active");
			})
		});
		$(".fone4 a").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "estilos/carrossel_menu" );
			currentPage = "/estilos";
			$("#estilos-btn").css('color', '#0b5ed7');
			$("#estilos-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone4").fadeIn(400).addClass("active");
			})
		});
		$("#actionfit-btn").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "actionfit/menu/" + currentPage );
			currentPage = "/actionfit";
			$("#actionfit-btn").css('color', '#0b5ed7');
			$("#actionfit-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone5").fadeIn(400).addClass("active");
			})
		});
		$(".fone5 a").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "actionfit/carrossel_menu" );
			currentPage = "/actionfit";
			$("#actionfit-btn").css('color', '#0b5ed7');
			$("#actionfit-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone5").fadeIn(400).addClass("active");
			})
		});
		$("#citiscape-btn").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "citiscape/menu/" + currentPage );
			currentPage = "/citiscape";
			$("#citiscape-btn").css('color', '#0b5ed7');
			$("#citiscape-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone6").fadeIn(400).addClass("active");
			})
		});
		$(".fone6 a").click(function(e) {
			menu_colors();
			pageTracker._trackPageview( nameFolder + "citiscape/carrossel_menu" );
			currentPage = "/citiscape";
			$("#citiscape-btn").css('color', '#0b5ed7');
			$("#citiscape-btn").parent().css('background', 'url(images/bg-menu-hover.png)');
			$(".active").fadeOut(400, function(){
				$(".active").removeClass("active");
				$("#fone6").fadeIn(400).addClass("active");
			})
		});
		
		//Carrosel links
		$("#wrap-carrossel a, #internas a").hover(function(e) {
			$(this).animate({opacity:0.8}, 200).css("cursor","pointer");
		}, function(){
			$(this).animate({opacity:1}, 200);
		});
		// Carrossel
		var _bgs = {"fone1": ["bg1", "bluetooth"], "fone2": ["bg2", "games"], "fone3": ["bg3", "dj"], "fone4": ["bg4", "todos_os_estilos"], "fone5": ["bg5", "actionfit"], "fone6": ["bg6", "citiscape"]};
		
		$("#wrap-carrossel").carrossel();
		_giraItens( "anterior" );
		$("#btn-proximo").on("click", function(e){
			_giraItens( "anterior" );
		});
		$("#btn-anterior").on("click", function(e){
			_giraItens( "proximo" );
		});
		
		function _giraItens( classe ){
			var idAt = $(".ativo").attr("class").split(" ")[0];
			var idAn = $("." + classe).attr("class").split(" ")[0];
			
			$(".ativo *").fadeIn(500);
			$(".ativo").addClass("bgTransparent");
			$("." + _bgs[idAt][0]).fadeIn();
			$("." + _bgs[idAn][0]).fadeOut();
			
			currentPage = _bgs[idAt][1] + "/";
			pageTracker._trackPageview( nameFolder + currentPage + "carrossel_show" );
			
			posicao_carrosel = _bgs[idAt][1];
			
			$(".anterior *").hide();
			$(".anterior").removeClass("bgTransparent");
			$(".proximo *").hide();
			$(".proximo").removeClass("bgTransparent");
		}
		///// Fim Carrossel /////
		
		
	
});