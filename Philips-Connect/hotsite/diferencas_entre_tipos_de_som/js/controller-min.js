var nameFolder="hotsite/diferencas_entre_tipos_de_som/",_gaq=_gaq||[],pageTracker=_gat._getTracker("UA-37482913-1");
$(function(){_path=window.location.href.split("/");protocol=_path[0];host=_path[2];url=protocol+"//"+host+"/";nameFolder=url+nameFolder;pageTracker._trackPageview(nameFolder+"index.html");$("body").queryLoader2({backgroundColor:"#000",barColor:"#FFF",barHeight:10,percentage:!0,completeAnimation:"grow",minimumTime:100});var c=[{botao:"mini-system",pagina:"page1",classe:"mini",analytics:"mini-system"},{botao:"micro-system",pagina:"page2",classe:"micro",analytics:"micro-system"},{botao:"home-theater",
pagina:"page3",classe:"home",analytics:"home-theater"},{botao:"dock-station",pagina:"page4",classe:"dock",analytics:"dock-station"},{botao:"radio-portatil",pagina:"page5",classe:"radio",analytics:"radio-portatil"}],b=0;$.each(c,function(d,a){$("#"+a.botao).hover(function(){$("#menu .efeito").removeClass("default").addClass(a.classe);$("#menu .pessoas").removeClass("default").addClass(a.classe);$("#menu .brilho").removeClass("default").addClass(a.classe)},function(){$("#menu .efeito").removeClass(a.classe).addClass("default");
$("#menu .pessoas").removeClass(a.classe).addClass("default");$("#menu .brilho").removeClass(a.classe).addClass("default")}).on("click",function(){$("#home").fadeOut();$("#"+a.pagina).delay(400).fadeIn();b=d;pageTracker._trackPageview(nameFolder+a.analytics);pageTracker._trackEvent("menu","click",a.analytics)});$("#"+a.pagina+" .nav .btn-fechar").on("click",function(){$("#"+a.pagina).fadeOut();$("#home").delay(400).fadeIn();pageTracker._trackEvent("botao","click",a.analytics+"-fechar")});$("#"+a.pagina+
" .nav .btn-prev").on("click",function(){$("#"+c[b].pagina).fadeOut();pageTracker._trackEvent("botao","click",c[b].analytics+"-anterior");0<=b-1?b--:b=c.length-1;$("#"+c[b].pagina).delay(400).fadeIn()});$("#"+a.pagina+" .nav .btn-next").on("click",function(){$("#"+c[b].pagina).fadeOut();pageTracker._trackEvent("botao","click",c[b].analytics+"-proximo");b+1<c.length?b++:b=0;$("#"+c[b].pagina).delay(400).fadeIn()});$("#"+a.pagina+" .clique-aqui").on("click",function(){pageTracker._trackPageview(nameFolder+
a.analytics+"-comprar")})})});