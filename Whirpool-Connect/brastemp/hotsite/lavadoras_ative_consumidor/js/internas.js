$(document).ready(function(e) {
	
	/*Get the window size and apply the rules*/
	/*function updateSize(){
		var documentHeight = $(window).height();
		if( documentHeight <=760) {
			console.log("with class");
			$("#content, #brastemp-facebook, .share, #footer, #menu, #title h1, #title h2, .comprar, #weight, #lavadora, #especificacoes .especificacoes-img, #gallery-lightbox #gallery, #gallery-lightbox .fechar, #weight-lightbox .quantidade-roupa-img, #comparativo .comparativo-img, #video-lightbox .fechar, #video-lightbox #player").addClass("resize");
		}
		else{
			console.log("without class");
			$("#content, #brastemp-facebook, .share, #footer, #menu, #title h1, #title h2, .comprar, #weight, #lavadora, #especificacoes .especificacoes-img, #gallery-lightbox #gallery, #gallery-lightbox .fechar, #weight-lightbox .quantidade-roupa-img, #comparativo .comparativo-img, #video-lightbox .fechar, #video-lightbox #player").removeClass("resize");
		}
	}
	updateSize();
	$(window).resize(function(e) {
        updateSize();
    });*/
	/*End of Get the window size and apply the rules*/
	
	/*Preloader*/
	$("body").lsPreLoader({
		
		backgroundColor: "#510b37", 
		progressPosition: "center", 
		logoImage: "images/logo-brastemp.png",
		progressHeight:  "4px"
		
	});
	/*End of Preloader*/
	
	/*Analytics - Default*/
	
	$("#main-logo").click(function(e) {
        ga('send', 'event', 'Menu', 'Click', currentPage + 'Logo');
		console.log(currentPage + 'Logo');
    });
	$("#receba-novidades").click(function(e) {
        ga('send', 'event', 'Menu', 'Click', currentPage + 'Receba_Novidades');
		console.log(currentPage + 'Receba_Novidades');
    });
	$("#site-brastemp").click(function(e) {
        ga('send', 'event', 'Menu', 'Click', currentPage + 'Site_Brastemp');
		console.log(currentPage + 'Site_Brastemp');
    });
	
	$("#brastemp-facebook").click(function(e) {
        ga('send', 'event', 'Footer', 'Click', currentPage + 'Facebook_Brastemp');
		console.log(currentPage + 'Facebook_Brastemp');
    });
	
	
	$("#facebook").click(function(e) {
        ga('send', 'event', 'Footer', 'Click', currentPage + 'Share_Facebook');
		console.log(currentPage + 'Share_Facebook');
    });
	$("#twitter").click(function(e) {
        ga('send', 'event', 'Footer', 'Click', currentPage + 'Share_Twitter');
		console.log(currentPage + 'Share_Twitter');
    });
	$("#google").click(function(e) {
        ga('send', 'event', 'Footer', 'Click', currentPage + 'Share_Google');
		console.log(currentPage + 'Share_Google');
    });
	/*End of Analytics - Default*/
	
	/*Analytics - Internas*/
	
	$("#menu .menu-itens a").click(function(e) {
		var linkMenu = $(this).children("img").attr("title");
        ga('send', 'event', 'Menu', 'Click', currentPage + 'Menu_' + linkMenu);
		console.log( currentPage + 'Menu_' + linkMenu);
    });
	
	$(".cores-select a").click(function(e) {
        var linkCores = $(this).html();
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Cores_' + linkCores);
		console.log( currentPage + 'Cores_' + linkCores);
    });
	
	$("a.comprar").click(function(e) {
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Comprar');
		console.log( currentPage + 'Comprar');
    });
	
	/*End of Analytics - Internas*/
	
	$(".fechar").click(function(e) {
		$(".lightbox").fadeOut();
		console.log("lightbox fadeOut");
	});
	
	$("#quantidade-clique").click(function(e) {
		$("#weight-lightbox").fadeIn();
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Quantidade_De_Roupa');
		console.log( currentPage + 'Quantidade_De_Roupa');
	});
	
	$(".main .especificacoes").click(function(e) {
		$("#especificacoes").fadeIn();
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Especificações');
		console.log( currentPage + 'Especificações');
		
	});
	
	$("#menu #btn-compare img").click(function(e) {
		$("#comparativo").fadeIn();
	});
	
	/*Images Gallery*/
	$("#lavadora .mais-imagens").click(function(e) {
        $("#gallery-lightbox").fadeIn();
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Mais_Imagens');
		console.log( currentPage + 'Mais_Imagens');
    });
	/*End of Images Gallery*/
	
	/*Images Gallery Cycle*/
	var imageList    = new Array();
	var currentImage = 0;
	$("#gallery #thumbs ul li").each(function(index, element) {
        imageList[ index ]         = new Object();
		imageList[ index ].id      = index;
		imageList[ index ].element = $(element).children("a");
		imageList[ index ].image   = $(element).children("a").attr("href");
    });
	
	$( "#gallery .arrow-left" ).click( function(e){
		currentImage--;
		changeImage();
	} );
	$( "#gallery .arrow-right" ).click( function(e){
		currentImage++;
		changeImage();
	} );
	
	$("#thumbs a").click(function(e) {
		event.preventDefault();
		for( key in imageList ) if( $(this).attr("href") == imageList[key].image ) currentImage = imageList[key].id;
		changeImage();
		console.log(imageList[currentImage].image);
    });
	
	function changeImage(){
		$(".photo-container img").attr("src", imageList[ currentImage ].image);
		$(".photo-container img").hide().fadeIn(300);
		
		if( currentImage == 0 ) $( "#gallery .arrow-left" ).fadeOut(100);
		else $( "#gallery .arrow-left" ).fadeIn(100);
		if( currentImage == (imageList.length - 1) ) $( "#gallery .arrow-right" ).fadeOut(100);
		else $( "#gallery .arrow-right" ).fadeIn(100);
	}
	/*End of Images Gallery Cycle*/
	
	/* Links PreventDefault */
	$("a").click(function(e) {
        if($(this).attr("href") == "#"){
			console.log("Link PreventDefault");
			e.preventDefault();
		}
    });
	/* End of Links PreventDefault */
	
	/*Erase the video iframe after play*/
	$("#video-lightbox .fechar").click(function(e) {
        $("#video-lightbox").children("iframe").remove();
		$("#video-lightbox").append("<div id='player'></div>");
    });
	/*End of Erase the video iframe after play*/
	
	/*Mask for CPF*/
	function maskFields( element ){
	  
	  //console.log( "maskFields" );
	  
	  // Remove events caso exista
	  element.off();
	  var prevLength;
	  
	  // Define event keyup
	  element.on( "keyup", function( event ){
	   
	   var str = this.value.substring(  this.value.length - 1 , this.value.length );
	   str = str.replace(/\D/g , '');
	   
	   this.value = this.value.substring(  0 , this.value.length -1 ) + str;
	   
	   if( this.value.length > prevLength ){
		switch( this.value.length ) { 
		 case 3:
		 case 7: 
		  this.value += ".";
		  break;
		 case 11:
		  this.value += "-";
		  break;
		}
	   }
	   
	   prevLength = this.value.length;
	   
	  } );
	  
	 }
	 maskFields($(".cpf"));
	/*End of Maks for CPF*/
	
});