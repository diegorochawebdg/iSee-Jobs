<!-- Métodos de callback -->
function removeTransitionObjects() 
{
	// Slide 01
	$('#slide-conceito .bonecos, #slide-conceito h2, #slide-conceito h3').removeClass('transition');
	
	// evita o blister calendario de balançar
	canPlayProcimax = false;
			
}

function will_show_section(section_id) {    

	// remove os objetos dentro das telas
	removeTransitionObjects();
	
	// remove transition classes
	$(".libbs_content section div, .libbs_content section img").removeClass("transition fade-in");
	
	// anima a tela
	setTimeout( function() {
		$("#" + section_id + " div:first-child").addClass("transition fade-in");
		$("#" + section_id + " *").addClass("transition");
	}, 200);
	
	// checa qual objecto está 
	switch( section_id ) 
	{
		case "slide27":
			canPlayProcimax = true;
			
			setTimeout( function() {
				$("#blister-calendario *").removeClass('transition');
			}, 300);
		break;
		
	}
}

$(document).ready(function( $ ){  
    
	$(".libbs_content section").attr("hidden", "hidden");
	
	$('.btn_menu').addClass('transition');
	$('.btn_menu').click(function( e ){
		$('.btn_menu').removeClass('transition');
		$("#menu").addClass('transition');
	});
	
    //Menu Hide
    var hide_menu = function(){
        $('.btn_menu').addClass('transition');
        $('#menu').removeClass('transition');
    }
            
	$(".btn_fechar_menu, .box-menu li").click(function(e) {
		hide_menu();
    });
	$("#btn_conceito").click(function(e) { 
		show_section('slide01');
	});
	$("#btn_perfil, #fecha-explosao-nao-trata-1").click(function(e) { 
		show_section('slide02');
	});
	$("#btn_dados").click(function(e) { 
		show_section('slide28');
	});
	$("#btn_interacao").click(function(e) { 
		show_section('slide30');
	});
	$("#btn_blister").click(function(e) { 
		show_section('slide27');
	});
	$("#btn_preco").click(function(e) { 
		show_section('slide34');
	});
	$("#btn_anuncio").click(function(e) { 
		show_section('slide33');
	});
	$("#btn_bula").click(function(e) { 
		show_section('slide38');
	});
	$("#nao-trata-1, #explosao-nao-trata-1").click(function(e) { 
		show_section('slide03');
		
	});
	$("#slide-nao-trata-1").click(function(e) { 
		show_section('slide04');
	});
	$("#nao-sabe-1").click(function(e) { 
		show_section('slide15');
		
	});
	$("#nao-usa-1").click(function(e) { 
		show_section('slide17');
	});
	$("#slide-nao-trata-2").click(function(e) { 
		show_section('slide06');
		
	});
	$("#explosao-nao-trata-2").click(function(e) { 
		show_section('slide05');
		
	});
	$("#slide-nao-trata-3").click(function(e) { 
		show_section('slide08');
		
	});
	$("#explosao-nao-trata-3").click(function(e) { 
		show_section('slide07');
		
	});
	$("#slide-nao-trata-4").click(function(e) { 
		show_section('slide10');
		
	});
	$("#explosao-nao-trata-4").click(function(e) { 
		show_section('slide09');
		
	});
	$("#slide-nao-trata-5").click(function(e) { 
		show_section('slide12');
		
	});
	$("#explosao-nao-trata-5").click(function(e) { 
		show_section('slide11');
		
	});
	$("#slide-nao-trata-6").click(function(e) { 
		show_section('slide14');
		
	});
	$("#explosao-nao-trata-6").click(function(e) { 
		show_section('slide13');
		
	});
	$("#slide-nao-usa").click(function(e) { 
		show_section('slide18');
		
	});
	$("#explosao-nao-usa").click(function(e) { 
		show_section('slide17');
		
	});
	$("#slide-nao-usa-2").click(function(e) { 
		show_section('slide20');
		
	});
	$("#explosao-nao-usa-2").click(function(e) { 
		show_section('slide19');
		
	});
	$("#slide-nao-usa-3").click(function(e) { 
		show_section('slide22');
		
	});
	$("#explosao-nao-usa-3").click(function(e) { 
		show_section('slide21');
		
	});
	$("#slide-nao-usa-4").click(function(e) { 
		show_section('slide24');
		
	});
	$("#explosao-nao-usa-4").click(function(e) { 
		show_section('slide23');
		
	});
	$("#slide-nao-usa-5").click(function(e) { 
		show_section('slide26');
		
	});
	$("#explosao-nao-usa-5").click(function(e) { 
		show_section('slide25');
		
	});
	$("#slide30 .slide-interacoes-medicamentosas").click(function(e) { 
		show_section('slide31');
		
	});
	/*----------------------------------------------*/
	
	$(".sertralina, .sertralina *, .sertralina1, #btn_sertralina").click(function(e) { 
		show_section('slide40');
	});
	$("#sertralina1, #sertralina1 *").click(function(e) {
        hide_menu();
        show_section('slide41');
    });
	$("#sertralina1-explosao, #sertralina1-explosao *").click(function(e) {
        show_section('slide40');
    });
            
    $(".sertralina1").click(function(e) { 
        hide_menu();
	});
	
	$(".sertralina2").click(function(e) { 
        hide_menu();
		show_section('slide42');
	});
	
	$(".sertralina3").click(function(e) { 
        hide_menu();
		show_section('slide43');
	});
	
	/*----------------------------------------------*/
	$("#slide31 img").click(function(e) { 
		show_section('slide30');
	});
	
	
	$('a').click(function(e) {
        e.preventDefault();
    });
	
	show_section("slide01");
	
	
	
});