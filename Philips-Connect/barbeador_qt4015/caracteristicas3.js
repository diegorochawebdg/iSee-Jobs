$CONNECT_CONTENT = '<style type="text/css">.container_interna { height: 520px; padding: 0; position: relative; overflow: hidden; }	.holder_interna { width: 100%; height: 520px; position: absolute; background: url('+ $CONNECT_HOSTED_URL +'caracteristicas/bg-body.jpg) repeat-x 0 top; }.content-center {margin: 0 auto; width: 956px; height: 520px;}.content-center .div-content { margin: 0 auto; width: 820px; height: 520px;}.container_interna img{display:block; position:absolute; left:50%;}.titulo { margin-left: -81px; top: 33px; }.compatibilidade { top: 184px; margin-left: -40px; }.recarregue { margin-left: 117px; top: 317px; }.call-to-action-3 { bottom: 17px; margin-left: 196px; }.barbeador-img { margin-left: 189px; bottom: 0px; }.detalhe { margin-left: 3px; top: 36px; z-index: 3; }.resultados { margin-left: -376px; top: 49px; }.laminas { margin-left: -254px; top: 227px; }.pente { margin-left: -365px; top: 267px; }.call-to-action-3 { bottom: 35px; margin-left: 221px; }</style><div class="container_interna">    <div class="holder_interna">        <div class="content-center">            <div class="div-content">                              <img src="caracteristicas/page3/frente-barbeador.png" width="182" height="477" alt="Frente do barbeador" title="Frente do barbeador" class="barbeador-img" />                                <img src="caracteristicas/page3/detalhe-laminas-titanio.png" width="218" height="218" alt="Detalhe dos dentes de titânio do barbeador Philips" title="Detalhe dos dentes de titânio do barbeador Philips" class="detalhe" />                                <img src="caracteristicas/page3/resultados-precisos.png" width="442" height="156" alt="Resultados precisos" title="Resultados precisos" class="resultados" />                                <img src="caracteristicas/page3/laminas-de-titanio.png" width="274" height="24" alt="Lâminas de titânio" title="Lâminas de titânio" class="laminas" />                                <img src="caracteristicas/page3/pente-ajustavel.png" width="567" height="235" alt="Pente ajustável" title="Pente ajustável" class="pente" />                                <a href="#"><img src="caracteristicas/page3/com-ou-sem-fio.png" width="176" height="35" alt="Com ou sem fio" title="Com ou sem fio" class="call-to-action-3" /></a>	                            </div>        </div>        </div></div><script type="text/javascript">	TweenMax.from( $(".barbeador-img") , 1, { css: { alpha: 0, bottom: "-=50px" } , ease: Strong.easeOut, delay:.3});	TweenMax.from( $(".detalhe") , 1, { css: { alpha: 0, width:0, height:0, left:"+=50px" } , ease: Strong.easeOut, delay:.6});	TweenMax.from( $(".resultados") , 1, { css: { alpha: 0, left:"+=200px" } , ease: Strong.easeOut, delay:1.3});	TweenMax.from( $(".laminas") , 1, { css: { alpha: 0, top:"-=50px" } , ease: Strong.easeOut, delay:1.6});	TweenMax.from( $(".pente") , 1, { css: { alpha: 0, left:"-=200px" } , ease: Strong.easeOut, delay:1.9});	TweenMax.from( $(".call-to-action-3") , 1, { css: { left: "+=400px", width: "0" , alpha: 0 } , ease: Strong.easeOut, delay:2.5, onComplete: function() {					TweenMax.to( $(".call-to-action-3"), .3, { css: { left: "+=10px" }, ease: Linear.easeNone , repeat: -1, yoyo: true });			}} );		$(".call-to-action-3").hover(function(e) {            TweenMax.to( $(".call-to-action-3") , .4, { css: { alpha: .8 } , ease: Strong.easeOut});        }, function(){			TweenMax.to( $(".call-to-action-3") , .4, { css: { alpha: 1 } , ease: Strong.easeOut});	});	Connect.addCallToAction( ".call-to-action-3" , "caracteristicas4.html", true );	</script>';