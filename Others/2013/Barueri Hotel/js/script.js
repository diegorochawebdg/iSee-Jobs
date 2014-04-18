jQuery(document).ready(function(e) {
    
	//PreventDefault
	jQuery("a").click(function(e) {
        if(jQuery(this).attr("href")=="#"){
			e.preventDefault()
		}
    });
	
	//Menu & Footer position
	jQuery(window).scroll(function( event ) {
		if(jQuery(this).scrollTop() >= 20) {
			jQuery('h1, #header').addClass("size");
		} else {
			jQuery('h1, #header').removeClass("size");
		}
		
		var htmlSize   = jQuery("#content").height();
		var screenSize = jQuery(window).innerHeight();
		var inner      = false;
		if(jQuery(this).scrollTop() >= (htmlSize - screenSize)) {
			//jQuery('#footer').css({position:"static", bottom:"0"});
			if(!inner){
				jQuery('#footer').css({position:"relative", bottom:"0"});
				inner = true;
			}
		} else {
			jQuery('#footer').css({position:"", bottom:""});
			inner = false;
		}
		
		
		
		addClassMenu( this );
	});
	
	//Footer
	jQuery("#footer .expandir").click(function(e) {
		jQuery("#footer").toggleClass("size");
		if(jQuery("#footer").hasClass("size")){
			jQuery("#footer").animate({"bottom":0}, 200);
		} else{
			jQuery("#footer").animate({"bottom":"-70px"}, 200);
		}
    });
	
	//Gallery
	jQuery('.photos a').colorbox({
		rel:'gallery',
		/*previous: false*/
	});
	
	//Mudar Url
	jQuery("#btn-home").click(function(e) {
		goToByScroll("home");
	});
	jQuery("#btn-sobre").click(function(e) {
		goToByScroll("sobre");
	});
	jQuery("#btn-apartamentos").click(function(e) {
		goToByScroll("apartamentos");
	});
	jQuery("#btn-servicos").click(function(e) {
		goToByScroll("servicos");
	});
	jQuery("#btn-localizacao").click(function(e) {
		goToByScroll("localizacao");
	});
	jQuery("#btn-contato").click(function(e) {
		goToByScroll("contato");
		/*function footerScroll() { 
			jQuery("#footer").animate({"bottom":0}, 200);
		}
		setTimeout(footerScroll, 800), function(){
			clearTimeout();
		};*/
	});
	
	//Camera Slideshow
	jQuery("#home").camera({
		loader: 'none',
		height: '40%',
		hover: false,
		navigation: false,
		navigationHover: false,
		playPause: false,
		pauseOnClick: false,
		time: 3500,
		mobileEasing: 'simpleFade'
	});
	
	/*Valida Campos do formulário*/
	jQuery(function() {
		function validaCampos(){ 
			var campos="";
			var conta = 0;
			
			if(jQuery('#nome').val()!="") {			      
				conta++;
			}else{
				campos=campos+"- Nome\n";
			}
			    			     			     
			if(jQuery('#email').val()!="") {     
				conta++;      
			}else{
				campos=campos+"- E-mail\n";
			}
			    
			if(jQuery('#msg').val()!="") {
				conta++;
			}else{
				campos=campos+"- Mensagem\n";
			}                    
			if(conta==3){      
				return true;
			}else{
				alert('Preencha os campos:\n'+campos+'');
				//ga('send', 'event', 'Button', 'Click', currentPage + "Formulário Não Enviado");
				return false;
			}
		}
		
		
		jQuery(document).on('click','#enviar',function(e){
			if(validaCampos()){
			
				//e.preventDefault();	
				jQuery.ajax({
					url:'ajax-contato.php',
					type:'POST',
					dataType:'json',
					data: jQuery('#contact-form').serialize(),
					success:function(json){
						alert(json.msg);
						document.getElementById("contact-form").reset();
						//ga('send', 'event', 'Button', 'Click', currentPage + "Formulário Enviado");
					}
				});	
			}  
			return false;
		});
	
	});
	/*Fim do Valida Campos do formulário*/
	
	/*Add menu class*/
	var screenHeight = jQuery(window).innerHeight();
	var screenMiddle = screenHeight / 2;
	var screenTop = 0;
	var sectionTop   = [];
	var menu = jQuery( "#menu" );
	
	getPositions();
	
	
	jQuery( window ).on( "load", function(e){
		
		sectionTop = [];
		getPositions();
		
	} );
	
	function getPositions(){
		jQuery("#content").children("div").each(function(index, element) {
			if(element.id != ""){
				sectionTop.push({
					section:  element,
					position: jQuery(element).offset().top,
					height: jQuery(element).height()
				});
			}
			
		}); 
	}
	
	function addClassMenu( event ){
		
		screenTop = jQuery(event).scrollTop();
		
		jQuery.each( sectionTop, function( index, element ){
			
			if( ( screenTop + screenMiddle ) >= element.position && ( screenTop + screenMiddle ) <= ( element.position + element.height ) ){
				//console.log( element.section.id );
				if(element.section.id != "home") menu.find("#btn-" + element.section.id).addClass("active");
			}else{
				if(element.section.id != "home") menu.find("#btn-" + element.section.id).removeClass("active");
			}
			
		} );
		
	}
	/*End of Add menu class*/
	
});

//Magic Anchor
function goToByScroll(id){
	jQuery('html,body').animate({scrollTop: jQuery("#"+id).offset().top - 60},800, function(e){
		document.location.hash = id;
	});
}