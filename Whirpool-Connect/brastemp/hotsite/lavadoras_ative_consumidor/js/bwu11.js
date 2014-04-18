/*Analytics*/
var currentPage = "BWU11/";
/*End of Analytics*/

$(document).ready(function(e) {
	
	/*Video Loader*/
	$("#lavadora .video").click(function(e) {
		$("#video-lightbox").fadeIn();
		var teste = new ConnectVideos("DrwzGq97n1E", "", "");
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Vídeo');
		console.log( currentPage + 'Vídeo');
	});
	
	$(".hotspots .video2").click(function(e) {
		$("#video-lightbox").fadeIn();
		var teste = new ConnectVideos("DrwzGq97n1E", "89", "165");
		ga('send', 'event', 'Internas', 'Click', currentPage + 'Vídeo_Trecho');
		console.log( currentPage + 'Vídeo_Trecho');
	});
	/*End of Video Loader*/
	
	/*Hotspots Hover*/
	var _arr = [{ button: ".hotspots .item1", content: ".sub .item1"},
				{ button: ".hotspots .item2", content: ".sub .item2"}, 
				{ button: ".hotspots .item3", content: ".sub .item3"}, 
				{ button: ".hotspots .item4", content: ".sub .item4"}, 
				{ button: ".hotspots .item5", content: ".sub .item5"}, 
				{ button: ".hotspots .item6", content: ".sub .item6"}];
				
	$.each( _arr, function(index, element){
		$(element.button).hover(function(e) {
            $(element.content).fadeIn(200);
			$(".main").fadeOut(100);
			$(".hotspots a").css("opacity","0.7");
			$(this).css("opacity","1");
        }, function(){
			$(element.content).fadeOut(100);
			$(".main").fadeIn(200);
			$(".hotspots a").css("opacity","1");
		});
	});
	/*End of Hotspots Hover*/
	
	/*Colors*/
	$(".cores-select .inox, .cores-select .branca").click(function(e) {
		$(".cores-select .inox, .cores-select .branca").toggleClass("selected");
		if($(".cores-select .inox").hasClass("selected")){
			$("#lavadora .lavadora-img").attr("src", "../images/internas/bwu11/frente-lavadora-inox.png");
			$("#lavadora .lavadora-img").hide().fadeIn(200);
		}
		else{
			$("#lavadora .lavadora-img").attr("src", "../images/internas/bwu11/frente-lavadora.png");
			$("#lavadora .lavadora-img").hide().fadeIn(200);
		}
	});
	/*End of Colors*/
	
});