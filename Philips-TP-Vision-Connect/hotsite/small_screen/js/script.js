$(document).ready(function(e) {
	$(".seta-baixo2").hide();
	$("#second").hide();
	$(".seta-baixo").click(function(e) {
		primeira();
	});
	$(".seta-baixo2").click(function(e) {
		segunda();
	});
	function primeira()
	{
		$("#item1").animate({top: "-=120px", left: "-=40px", opacity: 0});
		$("#item2").delay(200).animate({top: "-=120px", left: "-=40px", opacity: 0});
		$("#item3").delay(400).animate({top: "-=120px", left: "-=40px", opacity: 0}, function(){
			$("#second, #item4, #item5, #item6").fadeIn().animate({opacity:1});
			$("#second, #item4, #item5, #item6").css({"top": "", "left" : "", "opacity": ""});
			$(".seta-baixo").hide();
			$(".seta-baixo2").show();
		});
	}
	function segunda()
	{
		$("#item4").animate({top: "-=120px", left: "-=40px", opacity: 0});
		$("#item5").delay(200).animate({top: "-=120px", left: "-=40px", opacity: 0});
		$("#item6").delay(400).animate({top: "-=120px", left: "-=40px", opacity: 0}, function(){
			$("#first, #item1, #item2, #item3").fadeIn().animate({opacity:1});
			$("#first, #item1, #item2, #item3").css({"top": "", "left" : "", "opacity": ""});
			$(".seta-baixo").show();
			$(".seta-baixo2").hide();
		});
		
	}
	$(".seta-baixo, .seta-baixo2, #first img, #second img").hover(function(e) {
        $(this).animate({opacity:0.7});
		$(this).css("cursor","pointer");
    }, function(){
		$(this).animate({opacity:1});
	});
	
	function glow()
	{
		$(".conheca img").animate({opacity:0.8}, 800, function(){
			$(".conheca img").animate({opacity:1}, 800, function(){
				glow();
			})
		})
	}
	glow();
});