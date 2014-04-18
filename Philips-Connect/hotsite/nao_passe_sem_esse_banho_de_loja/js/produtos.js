$(document).ready(function(e) {
    
	//Hover Buttons
	$(".produtos-home a").hover(function(e) {
        $(this).animate({opacity:0.7}, 200);
    }, function(e){
		$(this).animate({opacity:1}, 200);
	});
	
	//Show/Hide of lists
	$(".produtos-ri515 li a").click(function(e) {
		if($(".produtos-ri515 li p").is(":visible")){
			$(".produtos-ri515 li p:visible").toggle("fast");
			$(this).parent().children("p:hidden").toggle("fast");
		} else{
			$(this).parent().children("p").toggle("fast");
		}
    });
	$(".produtos-ri551 li a").click(function(e) {
		if($(".produtos-ri551 li p").is(":visible")){
			$(".produtos-ri551 li p:visible").toggle("fast");
			$(this).parent().children("p:hidden").toggle("fast");
		} else{
			$(this).parent().children("p").toggle("fast");
		}
    });
	
	
	//Sections Switch
	$("#ri515").click(function(e) {
		$(".navigation span").append(" > <a href='#'>Vaporizador RI515</a>");
		$(".navigation a.produtos-navigation").addClass("home");
        $(".produtos-home").fadeOut(300, function(e){
			$(".produtos-ri515").fadeIn(300);
		});
    });
	$("#ri551").click(function(e) {
		$(".navigation span").append(" > <a href='#'>Vaporizador RI551</a>");
		$(".navigation a.produtos-navigation").addClass("home");
        $(".produtos-home").fadeOut(300, function(e){
			$(".produtos-ri551").fadeIn(300);
		});
    });
	
	//Internal Sections Switch
	$(".ri551-btn").click(function(e) {
		$(".navigation span").html("<a href='/' class='home'>Home</a> > <a href='#' class='produtos-navigation home'>Produtos</a> > <a href='#'>Vaporizador RI551</a>");
        $(".produtos-ri515").fadeOut(300, function(e){
			$(".produtos-ri551").fadeIn(300);
		});
    });
	
	$(".ri515-btn").click(function(e) {
		$(".navigation span").html("<a href='/' class='home'>Home</a> > <a href='#' class='produtos-navigation home'>Produtos</a> > <a href='#'>Vaporizador RI515</a>");
        $(".produtos-ri551").fadeOut(300, function(e){
			$(".produtos-ri515").fadeIn(300);
		});
    });
	$(".produtos-navigation").click(function(e) {
		$(".navigation span").html("<a href='/' class='home'>Home</a> > <a href='#' class='produtos-navigation'>Produtos</a>");
        $(".produtos-ri551, .produtos-ri515").fadeOut(300, function(e){
			$(".produtos-home").fadeIn(300);
		});
    });
	
	/*Images Gallery Cycle*/
	var imageList    = new Array();
	var currentImage = 0;
	$(".produtos-ri515 .selectors a").each(function(index, element) {
		imageList[ index ]         = new Object();
		imageList[ index ].id      = index;
		imageList[ index ].element = $(element);
		imageList[ index ].image   = $(element).attr("href");
	});
	
	$(".produtos-ri515 .selectors a").click(function(e) {
		e.preventDefault();
		for( key in imageList ) if( $(this).attr("href") == imageList[key].image ) currentImage = imageList[key].id;
		changeImage();
	});
	
	function changeImage(){
		$(".produtos-ri515 .img-grande img").attr("src", imageList[ currentImage ].image);
		$(".produtos-ri515 .img-grande img").hide().fadeIn(300);
		$(".produtos-ri515 .selectors a").removeClass("selected");
		imageList[ currentImage ].element.addClass("selected");
	}
	
	
	var imageList2    = new Array();
	var currentImage2 = 0;
	$(".produtos-ri551 .selectors a").each(function(index, element) {
		imageList2[ index ]         = new Object();
		imageList2[ index ].id      = index;
		imageList2[ index ].element = $(element);
		imageList2[ index ].image   = $(element).attr("href");
	});
	
	$(".produtos-ri551 .selectors a").click(function(e) {
		e.preventDefault();
		for( key in imageList2 ) if( $(this).attr("href") == imageList2[key].image ) currentImage2 = imageList2[key].id;
		changeImage2();
	});
	
	function changeImage2(){
		$(".produtos-ri551 .img-grande img").attr("src", imageList2[ currentImage2 ].image);
		$(".produtos-ri551 .img-grande img").hide().fadeIn(300);
		$(".produtos-ri551 .selectors a").removeClass("selected");
		imageList2[ currentImage2 ].element.addClass("selected");
	}
	/*End of Images Gallery Cycle*/
	
	/*Analytics*/
	var currentPage = "Produtos/"
	$(".produtos-home a").click(function(e) {
        var linkId = $(this).attr("id");
		//ga('send', 'event', 'Button', 'Click', currentPage + linkId + "_btn/");
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + linkId + "_btn/"
		});
    });
	
	$(".produtos-ri515 .selectors a").click(function(e) {
        var linkClass = $(this).attr("class").replace(" absolute selected", "");
		//ga('send', 'event', 'Button', 'Click', currentPage + "ri515/Img_" + linkClass);
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + "ri515/Img_" + linkClass
		});
    });
	$(".produtos-ri551 .selectors a").click(function(e) {
        var linkClass = $(this).attr("class").replace(" absolute selected", "");
		//ga('send', 'event', 'Button', 'Click', currentPage + "ri551/Img_" + linkClass);
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + "ri551/Img_" + linkClass
		});
    });
	
	
	$(".produtos-ri551 .txts li").each(function(index, element) {
		$(element).children("a").click(function(e) {
			//ga('send', 'event', 'Button', 'Click', currentPage + "ri551/Listas_item" + (index + 1));
			ga('send', {
			  'hitType': 'pageview',
			  'page': currentPage + "ri551/Listas_item" + (index + 1)
			});
        });
	});
	$(".produtos-ri515 .txts li").each(function(index, element) {
		$(element).children("a").click(function(e) {
			//ga('send', 'event', 'Button', 'Click', currentPage + "ri515/Listas_item" + (index + 1));
			ga('send', {
			  'hitType': 'pageview',
			  'page': currentPage + "ri515/Listas_item" + (index + 1)
			});
        });
	});
	
	$(".ri515-btn").click(function(e) {
        //ga('send', 'event', 'Button', 'Click', currentPage + "ri515-btn");
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + "ri515-btn"
		});
    });
	$(".ri551-btn").click(function(e) {
        //ga('send', 'event', 'Button', 'Click', currentPage + "ri551-btn");
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + "ri551-btn"
		});
    });
	
	/*End of Analytics*/
	
});