$(document).ready(function(e) {
	
	/*Get the window size and apply the rules*/
	/*function updateSize(){
		var documentHeight = $(window).height();
		if( documentHeight <=760) {
			console.log("with class");
			$("#content, #content .box, #brastemp-facebook, .share, #footer, .lavadoras").addClass("resize");
		}
		else{
			console.log("without class");
			$("#content, #content .box, #brastemp-facebook, .share, #footer, .lavadoras").removeClass("resize");
		}
	}
	updateSize();
	$(window).resize(function(e) {
        updateSize();
    });*/
	/*End of Get the window size and apply the rules*/
	
	/*Analytics - Default*/
	var currentPage = "Home/";
	
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
	
	/*Analytics - Home*/
	$(".lavadoras a").click(function(e) {
        var titleLavadoras = $(this).children("img").attr("title");
		ga('send', 'event', 'Home', 'Click', currentPage + titleLavadoras);
		console.log(currentPage + titleLavadoras);
    });
	/*End of Analytics - Home*/
	
	/*Preloader*/
	$("body").lsPreLoader({
		
		backgroundColor: "#510b37", 
		progressPosition: "center", 
		logoImage: "images/logo-brastemp.png",
		progressHeight:  "4px"
		
	});
	/*End of Preloader*/
	
	/*Hover images*/
	$(".lavadoras a").hover(function(e) {
        $(this).animate({opacity:0.7}, 150);
    }, function(){
		$(this).animate({opacity:1}, 150);
	});
	$(".lavadoras .bwg11-map").hover(function(e) {
        $(".lavadoras .bwg11-img").animate({opacity:0.7}, 150);
    }, function(){
		$(".lavadoras .bwg11-img").animate({opacity:1}, 150);
	});
	$(".lavadoras .bwg11-map").click(function(e) {
        window.location = "bwg11/";
    });
	
	
	function overBWP11() { 
		$(".lavadoras .bwp11-img").animate({opacity:0.7}, 150);
		$(this).css("cursor","pointer");
	}
	
	
	$(".lavadoras .bwu11-map").hover(function(e) {
	        $(".bwu11-img").animate({opacity:0.7}, 150);        
	    }, function(){
			$(".bwu11-img").animate({opacity:1}, 150);
	});
	
		
	$(".lavadoras .bwp11-map").hover(function(e) {
	       $(".lavadoras .bwp11-img").animate({opacity:0.7}, 150);
	       $(this).css("cursor","pointer");
	    }, function(){
			$(".lavadoras .bwp11-img").animate({opacity:1}, 150);
	});
			
	
	if ( $.browser.msie ) {
	  
		$(".bwp11-img").click(function(e){
			window.location = "bwp11/";
		});
	  
	  $(".lavadoras .bwu11-img").hover(function(e) {
        
	        var marginLeft = 254;
			var divWidth = $(".bwu11-img").width();
			var eixoX  = Number( $(".bwu11-img").offset().left ) + marginLeft;
			var mouseX = e.clientX;
			if( (mouseX >= eixoX) ) { 
		        console.log("Mouse over no debaixo aqui" );
		        overBWP11();
		        $(".bwu11-img").animate({opacity:1}, 150);
		        $(this).css("cursor","pointer");
		    } else { 
			    $(".bwu11-img").animate({opacity:0.7}, 150);
				$(".bwp11-img").animate({opacity:1}, 150);
				$(this).css("cursor","pointer");
		    }
	    }, function(){
	    	if($(".bwu11-img").css("opacity") != "1") $(".bwu11-img").animate({opacity:1}, 150);
	    	
	    	$(".bwp11-img").animate({opacity:1}, 150);
		});
		
		
		$(".lavadoras .bwu11-img").click(function(e){
			
			var marginLeft = 254;
			var divWidth = $(".bwu11-img").width();
			var eixoX  = Number( $(".bwu11-img").offset().left ) + marginLeft;
			var mouseX = e.clientX;
			if( (mouseX >= eixoX) ) { 
		        console.log("Icone BWP clicado" );
		        window.location = "bwp11/";

		    } else { 
			    console.log("ICONE MEIO CLICADO");
			     window.location = "bwu11/";        
		    }

			
		});
		
		$(".lavadoras .bwu11-img").click(function(e) {
	       $(".lavadoras .bwu11-map").click();
	    });
	    
	    $(".lavadoras .bwp11-img").hover(function(e) {
	       overBWP11();
	       $(this).css("cursor","pointer");
	    }, function(){
			$(".lavadoras .bwp11-img").animate({opacity:1}, 150);
		});
		
	    
	} else { 
		
		$(".lavadoras .bwu11-map").click(function(e) {
	        window.location = "bwu11/";
	    });
		$(".lavadoras .bwp11-map").click(function(e) {
	        window.location = "bwp11/";
	    });

		
		
	}
	
	
	/*End of Hover images*/
	
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