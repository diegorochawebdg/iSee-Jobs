$(document).ready(function(e) {
    
	/*Analytics*/
	var currentPage = "Onde_Comprar/"
	$(".lojas a").click(function(e) {
        var linkTitle = $(this).children("img").attr("alt");
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + linkTitle
		});
    });
	/*End of Analytics*/
	
});