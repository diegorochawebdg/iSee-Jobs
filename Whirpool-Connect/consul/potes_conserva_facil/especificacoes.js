$CONNECT_CONTENT = '<style type="text/css">.container_interna { height: 520px; padding: 0; position: relative; overflow: hidden; background: url(' + $CONNECT_HOSTED_URL + 'cliente/especificacoes.jpg) no-repeat center; } .holder_interna { width: 100%; height: 520px; }.content-center { margin: 0 auto; width: 956px; height: 520px; }.content-center .div-content { margin: 0 auto; width: 820px; height: 520px; }.div-content img{position:absolute; left:50%;}.mais-informacoes { margin-left: 183px; bottom: 43px; }</style><div class="container_interna">    <div class="holder_interna">                <div class="content-center">        	<div class="div-content">                <a href="#" rel="shadowbox;width=840;height=750;" title="" class="saibamais"><img src="cliente/mais-informacoes.png" width="181" height="39" alt="Mais informações" title="Mais informações" class="mais-informacoes" /></a>          </div>        </div>            </div></div><script type="text/javascript">	TweenMax.from( $(".div-content"), 1, { css: { alpha: 0 }, ease: Expo.easeInOut });		$(".mais-informacoes").hover(function(e) {            TweenMax.to( $(this) , .4, { css: { alpha: .7 } , ease: Strong.easeOut});        }, function(){			TweenMax.to( $(this) , .4, { css: { alpha: 1 } , ease: Strong.easeOut});	});	Shadowbox.init();		$(".saibamais").click( function( event ) {		Connect.trackPageView(  $NOME_FOLDER + Connect.currentPage + "/saiba-mais.html" );		Shadowbox.open({			content:    String( Connect.getHostedURL() + "saiba-mais.html"),			player:     "iframe",			height:     750,			width:      840		});		event.preventDefault();				});	</script>';

