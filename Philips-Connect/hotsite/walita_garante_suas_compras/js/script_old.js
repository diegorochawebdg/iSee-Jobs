$(document).ready(function(e) {
    
    //Analytics Default
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-37482913-3', 'walitagarantesuascompras.com.br');
      ga('send', 'pageview');
    
	//PreventDefault
	$("a").click(function(e) {
        if($(this).attr("href")=="#"){
			e.preventDefault()
		}
    });
    
    
    /*Analytics*/
    var currentPage = "";
    
    //Menu
    $("#menu_home a").click(function(e){
        ga('send', 'pageview', {'page': currentPage + "Menu_Home"});
    });
    $("#menu_promocao a").click(function(e){
        ga('send', 'pageview', {'page': currentPage + "Menu_Promoção"});
    });
    $("#menu_participe a").click(function(e){
        ga('send', 'pageview', {'page': currentPage + "Menu_Participe"});
    });
    $("#menu_regulamento a").click(function(e){
        ga('send', 'pageview', {'page': currentPage + "Menu_Regulamento"});
    });
    $("#menu_comprar a").click(function(e){
        ga('send', 'pageview', {'page': currentPage + "Menu_Onde_Comprar"});
    });
    $("#menu_fale_conosco a").click(function(e){
        ga('send', 'pageview', {'page': currentPage + "Menu_Fale_Conosco"});
    });
    /*End of Analytics*/
	
});