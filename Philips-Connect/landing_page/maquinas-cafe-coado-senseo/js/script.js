$(document).ready(function(e) {
    $(".preco a").hover(function(e) {
        $(this).animate({opacity:0.8}, 150);
    }, function(){
		$(this).animate({opacity:1}, 150);
	});
	$("body").queryLoader2({
		barColor: "#FFF",
		backgroundColor: "#d60025",
		percentage: true,
		barHeight: 1,
		completeAnimation: "grow",
		minimumTime: 100
	});
});