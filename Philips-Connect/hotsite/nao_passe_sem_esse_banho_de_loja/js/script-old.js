//Analytics Default
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-37482913-2', 'banhodelojaphilipswalita.com.br');
  ga('send', 'pageview');

$(document).ready(function(e) {
    
	//PreventDefault
	$("a").click(function(e) {
        if($(this).attr("href")=="#"){
			e.preventDefault()
		}
    });
	
	//ShadowBox
	Shadowbox.init();
	$("#menu_regulamento, .regulamento2").click(function(e) {
        Shadowbox.open({
			content:'/regulamento.html', 
			player:"iframe",	
			width:870, 
			height:673
		});
    });
	
	//Analytics
	var currentPage = "Onde_comprar/";
	$("#menu_regulamento a").click(function(e) {
        var linkTitle = $(this).parent().attr("id") + "/";
		ga('send', 'event', 'Button', 'Click', currentPage + linkTitle);
    });
	
});