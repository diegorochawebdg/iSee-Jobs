$CONNECT_CONTENT = '<style type="text/css">.container_interna { height: 520px; padding: 0; position: relative; overflow: hidden; background:#ebebeb url(' + $CONNECT_HOSTED_URL + 'cliente/background.png) top center no-repeat; }	.holder_interna {	width: 100%;	height: 520px;	position: absolute;}.content-center {	margin: 0 auto;	width: 956px;	height: 520px;}.content-center .div-content { 	margin: 0 auto;	width: 820px;	height: 520px;}.absoluto{ position:absolute; left:50%;}.dimensoes{ margin-left:-354px; top:80px;}#btn-dicas{ margin-left:-62px; top:465px; cursor:pointer;}/* Shadowbox */#sb-player.html{ overflow:hidden;}</style><script type="text/javascript">	TweenMax.from( $(".div-content"), 1, { css: { alpha: 0 }, ease: Expo.easeInOut });		Shadowbox.init();	$("#btn-dicas").click( function( event ) {		Shadowbox.open({content:String( Connect.getHostedURL() + "saiba-mais.html"), player:"iframe",	width:800, height:450});		Connect.trackPageView(  $NOME_FOLDER + Connect.currentPage + "/saiba-mais.html" );	});	</script><div class="container_interna">    <div class="holder_interna">                <div class="content-center">        	<div class="div-content">            	                  <img src="cliente/especificacoes.png" width="708px" height="360px" alt="Dimensões e peso" title="Dimensões e peso" class="absoluto dimensoes" />                  <img src="cliente/btn-dicas-de-uso.png" width="125px" height="40px" alt="Dicas de uso" title="Dicas de uso" class="absoluto" id="btn-dicas" />                           </div>        </div>            </div></div>';