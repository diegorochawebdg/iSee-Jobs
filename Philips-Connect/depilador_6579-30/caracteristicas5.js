$CONNECT_CONTENT = '<style type="text/css">.container_interna {	height: 520px;	padding: 0;	position: relative;	overflow: hidden;	background: #fff;}	.holder_interna {	width: 100%;	height: 520px;	position: absolute;}.bg-roxo{ background: #801e51; height: 340px; }.bg-azul{ background: #83c2c5; height: 180px; }.detail{ top: 63px; margin-left: -380px; }.velocidade-1{ top: 193px; margin-left: -380px; }.velocidade-2{ top: 250px; margin-left: -380px; }.kit{ top: 57px; margin-left: -57px; }.txt-vendedor{ top: 41px; margin-left: 162px; }.pinca{ top: 310px; margin-left: -333px; }.bateria{ top: 360px; margin-left: -37px; }.content-center {	margin: 0 auto;	width: 956px;	height: 520px;}.content-center .div-content { 	margin: 0 auto;	width: 820px;	height: 520px;}.div-content img { position: absolute; left: 50%; z-index: 1; }#call-to-action { margin-left: 166px; bottom: 30px; z-index: 5 !important; }</style><div class="container_interna">    <div class="holder_interna">      <div class="bg-roxo"></div>    	<div class="bg-azul"></div>            <div class="content-center">            <div class="div-content">            	           		<img src="caracteristicas/page5/detail.jpg" width="317" height="142" class="detail" alt="" title="" />                            <img src="caracteristicas/page5/velocidade-1.png" width="250" height="44" class="velocidade-1" alt="" title="" />                            <img src="caracteristicas/page5/velocidade-2.png" width="301" height="43" class="velocidade-2" alt="" title="" />                            <img src="caracteristicas/page5/kit-depilador.jpg" width="396" height="282" class="kit" alt="" title="" />                            <img src="caracteristicas/page5/txt-vendedor.png" width="229" height="77" class="txt-vendedor" alt="" title="" />                            <img src="caracteristicas/page5/pinca.png" width="252" height="211" class="pinca" alt="" title="" />                            <img src="caracteristicas/page5/bateria.jpg" width="89" height="141" class="bateria" alt="" title="" />                              <a href="#"><img src="caracteristicas/page5/conheca-linha-completa.png" width="278" height="45" alt="Mais cuidado com a pele" title="Mais cuidado com a pele" id="call-to-action" /></a>                        </div>        </div>        </div></div><script type="text/javascript">$(document).ready(function(e) {		TweenMax.from( $(".bg-roxo") , 1, { css: { width:0, alpha: 0 } , ease: Circ.easeInOut, delay: .2});		TweenMax.from( $(".bg-azul") , 1, { css: { width: 0, alpha: 0 } , ease: Circ.easeInOut, delay: 1});			TweenMax.from( $(".detail") , 1, { css: { left: "-=100px" , alpha: 0 } , ease: Strong.easeOut, delay: 1.4});		TweenMax.from( $(".velocidade-1") , 1, { css: { top: "+=100px", alpha: 0 } , ease: Strong.easeOut, delay: 1.8});		TweenMax.from( $(".velocidade-2") , 1, { css: { top: "+=100px" , alpha: 0 } , ease: Strong.easeOut, delay: 2.2});		TweenMax.from( $(".kit") , 2, { css: { alpha: 0 } , ease: Strong.easeOut, delay: 2.6});		TweenMax.from( $(".txt-vendedor") , 1, { css: { left:"-=100px" , alpha: 0 } , ease: Strong.easeOut, delay: 3});		TweenMax.from( $(".pinca") , 1, { css: { left:"+=250px" , alpha: 0 } , ease: Strong.easeOut, delay: 3.4});		TweenMax.from( $(".bateria") , 1, { css: { width:0 , alpha: 0 } , ease: Strong.easeOut, delay: 3.8});			TweenMax.from( $("#call-to-action") , 1, { css: { left: "+=400px", width: "0" , alpha: 0 } , ease: Strong.easeOut, delay: 4.2, onComplete: function() {					TweenMax.to( $("#call-to-action"), .3, { css: { left: "+=10px" }, ease: Linear.easeNone , repeat: -1, yoyo: true });			}} );		$("#call-to-action").hover(function(e) {            TweenMax.to( $("#call-to-action") , .4, { css: { alpha: .7 } , ease: Strong.easeOut});        }, function(){			TweenMax.to( $("#call-to-action") , .4, { css: { alpha: 1 } , ease: Strong.easeOut});	});	$("#call-to-action").on("click" , function( e ) { 			event.preventDefault(); $(this).die();		TweenMax.killAll();		Connect.changePageFromCallToAction("caracteristicas6.html" , true );		});		});</script>';