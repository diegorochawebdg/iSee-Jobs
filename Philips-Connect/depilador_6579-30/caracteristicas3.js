$CONNECT_CONTENT = '<style type="text/css">.container_interna {	height: 520px;	padding: 0;	position: relative;	overflow: hidden;	background: #fff;}	.holder_interna {	width: 100%;	height: 520px;	position: absolute;}.bg-branco{ background: #fff; height: 247px; }.bg-rosa{ background: #e14368; height: 272px; }.detail{ top: 47px; margin-left: -388px; }.txt-vendedor{ top: 47px; margin-left: -151px; }.txt-vendedor-2{ top: 272px; margin-left: -362px; }.detail-2{ top: 228px; margin-left: -20px; }.box-selo{ top: 445px; margin-left: -380px; }.txt-selo{ top: 458px; margin-left: -362px; }.selo{ top: 427px; margin-left: -8px; }.depilador{ top: 29px; margin-left: 195px; }.content-center {	margin: 0 auto;	width: 956px;	height: 520px;}.content-center .div-content { 	margin: 0 auto;	width: 820px;	height: 520px;}.div-content img { position: absolute; left: 50%; z-index: 1; }#call-to-action { margin-left: 166px; bottom: 30px; z-index: 5 !important; }</style><div class="container_interna">    <div class="holder_interna">    	<div class="bg-branco"></div>      <div class="bg-rosa"></div>                <div class="content-center">            <div class="div-content">            	               <img src="caracteristicas/page3/detail.jpg" width="211" height="179" class="detail" alt="O depilador Philips Satinelle HP6579 possui cabeças extralargas que permitem que o aparelho remova mais pelos com menos passadas." title="O depilador Philips Satinelle HP6579 possui cabeças extralargas que permitem que o aparelho remova mais pelos com menos passadas."  />                             <img src="caracteristicas/page3/txt-vendedor.png" width="326" height="165" class="txt-vendedor" alt="O depilador Philips Satinelle HP6579 possui cabeças extralargas que permitem que o aparelho remova mais pelos com menos passadas." title="O depilador Philips Satinelle HP6579 possui cabeças extralargas que permitem que o aparelho remova mais pelos com menos passadas." title="O depilador Philips Satinelle HP6579 possui cabeças extralargas que permitem que o aparelho remova mais pelos com menos passadas." title="O depilador Philips Satinelle HP6579 possui cabeças extralargas que permitem que o aparelho remova mais pelos com menos passadas." />                            <img src="caracteristicas/page3/txt-vendedor-2.png" width="311" height="139" class="txt-vendedor-2" alt="Conforto e Exclusividade" title="Conforto e Exclusividade" />                            <img src="caracteristicas/page3/detail-2.png" width="186" height="186" class="detail-2" alt="0.5" title="0.5" />                            <img src="caracteristicas/page3/box-texto-selo.jpg" width="387" height="52" class="box-selo" alt="" title="" />                            <img src="caracteristicas/page3/texto-selo.png" width="342" height="27" class="txt-selo" alt="Os depiladores Philips Satinelle são aprovados pela Academia internacional de dermatologia cosmética" title="Os depiladores Philips Satinelle são aprovados pela Academia internacional de dermatologia cosmética" />                            <img src="caracteristicas/page3/iacd-logo.png" width="81" height="81" class="selo" alt="IACD" title="IACD" />                            <img src="caracteristicas/page3/depilador.jpg" width="185" height="403" class="depilador" alt="Depilador Philips Satinelle HP6579" title="Depilador Philips Satinelle HP6579" />                              <a href="#"><img src="caracteristicas/page3/btn-mais-cuidado-com-a-pele.png" width="257" height="45" alt="Mais cuidado com a pele" title="Mais cuidado com a pele" id="call-to-action" /></a>                        </div>        </div>        </div></div><script type="text/javascript">					TweenMax.from( $(".detail") , 1, { css: { alpha: 0 } , ease: Strong.easeOut, delay: .7});		TweenMax.from( $(".txt-vendedor") , 1, { css: { left: "+=100px" , alpha: 0 } , ease: Strong.easeOut, delay: 1});	  TweenMax.from( $(".bg-rosa") , 1, { css: { width: "0" } , ease: Circ.easeInOut, delay: 1.5});		TweenMax.from( $(".txt-vendedor-2") , 2, { css: { width:0, height: 0 } , ease: Strong.easeOut, delay: 2});		TweenMax.from( $(".detail-2") , 1, { css: { top:"-=100px" , alpha: 0 } , ease: Strong.easeOut, delay:2.4});		TweenMax.from( $(".box-selo") , 1, { css: { width:0 , alpha: 0 } , ease: Strong.easeOut, delay:2.8});		TweenMax.from( $(".txt-selo") , 1, { css: { left:"+=250px" , alpha: 0 } , ease: Strong.easeOut, delay:3.2});		TweenMax.from( $(".selo") , 1, { css: { alpha: 0 } , ease: Strong.easeOut, delay:3.5});		TweenMax.from( $(".depilador") , 1, { css: { alpha: 0, left: "+=100px" } , ease: Strong.easeOut, delay:3.8});			TweenMax.from( $("#call-to-action") , 1, { css: { left: "+=400px", width: "0" , alpha: 0 } , ease: Strong.easeOut, delay:4.1, onComplete: function() {					TweenMax.to( $("#call-to-action"), .3, { css: { left: "+=10px" }, ease: Linear.easeNone , repeat: -1, yoyo: true });			}} );		$("#call-to-action").hover(function(e) {            TweenMax.to( $("#call-to-action") , .4, { css: { alpha: .7 } , ease: Strong.easeOut});        }, function(){			TweenMax.to( $("#call-to-action") , .4, { css: { alpha: 1 } , ease: Strong.easeOut});	});	$("#call-to-action").on("click" , function( e ) { 			$(this).die();	event.preventDefault();	TweenMax.killAll();		Connect.changePageFromCallToAction("caracteristicas4.html" , true );		});		</script>';