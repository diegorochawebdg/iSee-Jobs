$(document).ready(function(e) {
    
    windowResize();
    
	//PreventDefault
	$("a").click(function(e) {
        if($(this).attr("href")=="#"){
			e.preventDefault();
		}
    });
    
    /* ------------------Home--------------------------- */
	
	//Home bar scroll
    $("#home .slidebar img").click(function(e){
        $("#home .slidebar").toggleClass("active");
    });
    
    //hover Ferro/Vaporizador
    $("#home .ferros *").hover(function(e){
        $("#home .ferros .txt, #home .ferros .imgs img").css({opacity:1});
    }, function(e){
        $("#home .ferros .txt, #home .ferros .imgs img").css({opacity:0});
    });
    $("#home .vaporizadores *").hover(function(e){
        $("#home .vaporizadores .txt, #home .vaporizadores .imgs img").css({opacity:1});
    }, function(e){
        $("#home .vaporizadores .txt, #home .vaporizadores .imgs img").css({opacity:0});
    });
    
    //Home clicks
    $("#home .ferros *").click(function(e){
        $("#home").fadeOut(300, function(e){
            $("#internals, #internals .ferros-container, #internals .ferros-container .ri2960").fadeIn(300, function(e){
                windowResize();
            });
        });
        $("#internals .navigation-category .ferros").addClass("selected");
        $("#internals .ferros-container .main-selectors .item4").parent().addClass("selected");
        $("#home .slidebar").removeClass("active");
    });
    
    $("#home .vaporizadores *").click(function(e){
        $("#home").fadeOut(300, function(e){
            $("#internals, #internals .vaporizadores-container, #internals .vaporizadores-container .ri551").fadeIn(300, function(e){
                windowResize();
                 $("#internals .navigation-category .vaporizadores").addClass("selected");
                $("#internals .vaporizadores-container .main-selectors .item1").parent().addClass("selected");
            });
            $("#home .slidebar").removeClass("active");
        });
        
    });
    
    /* ------------------Internals--------------------------- */
    
    //Add even class
	$("#internals .txts li").each(function(index, element) {
        var listEven = "";
		if(index % 2 == 1){
			$(this).addClass("even");
		}
    });
    
    //Top SlideBar
    $(".top-slidebar img").click(function(e){
        
        $(this).parent().toggleClass("selected");
        
    });
	
	//Images Gallery Cycle
	var imageList    = new Array();
	var currentImage = 0;
	$(".selectors a").each(function(index, element) {
		imageList[ index ]         = new Object();
		imageList[ index ].id      = index;
		imageList[ index ].element = $(element);
		imageList[ index ].image   = $(element).attr("href");
	});
	
	$(".selectors a").click(function(e) {
		e.preventDefault();
		for( key in imageList ) if( $(this).attr("href") == imageList[key].image ) currentImage = imageList[key].id;
		changeImage();
	});
	
	function changeImage(){
        var classContainer = imageList[ currentImage ].element.parent().parent().attr("class");
		$("." + classContainer + " .img-grande img").attr("src", imageList[ currentImage ].image);
		$("." + classContainer + " .img-grande img").hide().fadeIn(300);
		$("." + classContainer + " .selectors a").removeClass("selected");
		imageList[ currentImage ].element.addClass("selected");
	}
	
	//Margin left of selectors
    function windowResize(e){
        var documentWidth   = $("#internals").width();
        var selectorsWidth  = $(".main-selectors").width();
        var selectorsMargin = (documentWidth - selectorsWidth) / 2;
        console.log(selectorsMargin);
        $(".main-selectors").css({marginLeft:selectorsMargin});
    }
    
    $(window).resize(function(){
        windowResize();
    });
    
    /*-------------------------------------------------*/
    
    function ferrosHide(e){
        $(".ri650, .ri4415, .ri3720, .ri2960, .ri2920, .ri2560, .ri1717, .ri1110, .ri133").fadeOut(300);
    }
    function vaporizadoresHide(e){
        $(".ri515, .ri551").fadeOut(300);
    }
    
    $(".main-selectors a").click(function(e){
        
        $(".main-selectors *").removeClass("selected");
        $(this).parent().addClass("selected");
    });
    
    $(".ferros-container .main-selectors .item1").click(function(e){
        ferrosHide();
        $(".ri650").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item2").click(function(e){
        ferrosHide();
        $(".ri4415").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item3").click(function(e){
        ferrosHide();
        $(".ri3720").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item4").click(function(e){
        ferrosHide();
        $(".ri2960").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item5").click(function(e){
        ferrosHide();
        $(".ri2920").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item6").click(function(e){
        ferrosHide();
        $(".ri2560").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item7").click(function(e){
        ferrosHide();
        $(".ri1717").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item8").click(function(e){
        ferrosHide();
        $(".ri1110").delay(300).fadeIn(300);
    });
    $(".ferros-container .main-selectors .item9").click(function(e){
        ferrosHide();
        $(".ri133").delay(300).fadeIn(300);
    });
    
    
    $(".vaporizadores-container .main-selectors .item1").click(function(e){
        vaporizadoresHide();
        $(".ri551").delay(300).fadeIn(300);
    });
    $(".vaporizadores-container .main-selectors .item2").click(function(e){
        vaporizadoresHide();
        $(".ri515").delay(300).fadeIn(300);
    });
    
    $(".logo, .navigation .voltar-home").click(function(e){
        function homeHide(){
            ferrosHide();
            vaporizadoresHide();
            $("#internals, #internals .ferros-container, #internals .vaporizadores-container").fadeOut(300);
            $("#home").delay(300).fadeIn(300);
            $(".top-slidebar").removeClass("selected");
        }
        homeHide();
        $(".navigation-category *, .main-selectors li").removeClass("selected");
    });
    
    
    $(".navigation-category .ferros").click(function(e){
        vaporizadoresHide();
        $(".navigation-category *, .main-selectors li").removeClass("selected");
        $(".vaporizadores-container").fadeOut(300);
        $("#internals, #internals .ferros-container, #internals .ferros-container .ri2960").delay(300).fadeIn(300, function(e){
            windowResize();
        });
        $("#internals .navigation-category .vaporizadores").removeClass("selected");
        $("#internals .navigation-category .ferros").addClass("selected");
        $("#internals .ferros-container .main-selectors .item4").parent().addClass("selected");
    });
    
    $(".navigation-category .vaporizadores").click(function(e){
        ferrosHide();
        $(".ferros-container").fadeOut(300);
        $("#internals, #internals .vaporizadores-container, #internals .vaporizadores-container .ri551").delay(300).fadeIn(300, function(e){
            windowResize();
        });
        $("#internals .navigation-category .ferros").removeClass("selected");
        $("#internals .navigation-category .vaporizadores").addClass("selected");
        $("#internals .vaporizadores-container .main-selectors .item1").parent().addClass("selected");
    });
    /*-------------------------------------------------*/
    
    
    //Show/Hide of lists
	$(".vaporizadores-container .ri551 .txts li a").click(function(e) {
		if($(".vaporizadores-container .ri551 .txts li p").is(":visible")){
			$(".vaporizadores-container .ri551 .txts li p:visible").toggle("fast");
			$(this).parent().children("p:hidden").toggle("fast");
		} else{
			$(this).parent().children("p").toggle("fast");
		}
    });
	$(".vaporizadores-container .ri515 .txts li a").click(function(e) {
		if($(".vaporizadores-container .ri515 .txts li p").is(":visible")){
			$(".vaporizadores-container .ri515 .txts li p:visible").toggle("fast");
			$(this).parent().children("p:hidden").toggle("fast");
		} else{
			$(this).parent().children("p").toggle("fast");
		}
    });
    
	
});
