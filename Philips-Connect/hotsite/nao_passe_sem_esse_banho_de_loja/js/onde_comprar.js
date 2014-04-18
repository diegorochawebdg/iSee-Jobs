$(document).ready(function(e) {
    
	/*Analytics*/
	var currentPage = "Onde_comprar/"
	$(".lojas a").click(function(e) {
        var linkTitle = $(this).children("img").attr("alt");
		//ga('send', 'event', 'Button', 'Click', currentPage + linkTitle);
		ga('send', {
		  'hitType': 'pageview',
		  'page': currentPage + linkTitle
		});
    });
	/*End of Analytics*/
	
});