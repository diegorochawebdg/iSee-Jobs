$CONNECT_CONTENT = '<style type="text/css">.container_interna { height: 520px; padding: 0; position: relative; overflow: hidden; background:#FFF url(' + $CONNECT_HOSTED_URL + 'caracteristicas/page2/background.jpg) 50% 50% no-repeat; }	.holder_interna {	width: 100%;	height: 520px;	position: absolute;}.content-center {	margin: 0 auto;	width: 100%;	height: 520px;}.content-center .div-content { 	margin: 0 auto;	width: 100%;	height: 520px;	position:relative;}.connect-container .absoluto{ position:absolute; left:50%;}.connect-container .player{ margin-left:-440px; top:0px;}.connect-container .player-lateral{ margin-left:58px; top:150px;}.connect-container h2.titulo{ font-family: "GillSansStd"; font-size:28px; text-transform:uppercase; margin-bottom:8px;}.connect-container p.paragrafo{ font-family: "GillSansStd"; font-size:17px; opacity:.7;}.connect-container #paragrafo1{ margin-left:-38px; top:30px; color:#FFF;}.connect-container #paragrafo2{ margin-left:88px; top:288px; color:#000;}.connect-container #call-to-action2{ margin-left:136px; bottom:25px; cursor:pointer;}.connect-container .s05{ -webkit-animation-delay:0.5s; -moz-animation-delay:0.5s; -o-animation-delay:0.5s; animation-delay:0.5s;}.connect-container .s06{ -webkit-animation-delay:0.6s; -moz-animation-delay:0.6s; -o-animation-delay:0.6s; animation-delay:0.6s;}.connect-container .s07{ -webkit-animation-delay:0.7s; -moz-animation-delay:0.7s; -o-animation-delay:0.7s; animation-delay:0.7s;}.connect-container .s08{ -webkit-animation-delay:0.8s; -moz-animation-delay:0.8s; -o-animation-delay:0.8s; animation-delay:0.8s;}.connect-container .s09{ -webkit-animation-delay:0.9s; -moz-animation-delay:0.9s; -o-animation-delay:0.9s; animation-delay:0.9s;}</style><script type="text/javascript">			connect_callToAction( $(".connect-container #call-to-action2"), "fadeInRight", "s09", "caracteristicas3.html", true );		function connect_callToAction( button, animation, delay, page, boolean ){		var connect_pageStart = setInterval( function(e){			button.removeClass( animation ).removeClass( delay ).addClass( "callToAction" )			.hover( function(e){ $(this).fadeTo( "fast", 0.8 ); }, function(e){ $(this).fadeTo( "fast", 1 );	} );			Connect.addCallToAction( button , page, boolean );			clearInterval( connect_pageStart );		}, ( ( parseFloat($(".connect-container ." + delay).css("animation-delay")) + 1 ) * 1000 ) );	}	</script><div class="container_interna">    <div class="holder_interna">            <div class="content-center">            <div class="div-content">            	               <img src="caracteristicas/page2/player.png" width="486px" height="512px" alt="" title="" class="absoluto player animated fadeInLeft s05" />               <img src="caracteristicas/page2/player-lado.png" width="299px" height="108px" alt="" title="" class="absoluto player-lateral animated fadeInRight s06" />                              <div id="paragrafo1" class="absoluto animated fadeInLeft s07">               		<h2 class="titulo">Design que<br />                    combina com você!</h2>                    <p class="paragrafo">Design moderno e exclusivo para você<br />                    carregar suas músicas com estilo por<br />                    onde você for.</p>               </div>                              <div id="paragrafo2" class="absoluto animated fadeInRight s08">               		<h2 class="titulo">Leve e compacto</h2>                    <p class="paragrafo">O MP3 Player GoGear SoundDot possui<br />                    um clip para ser fixado à roupa para<br />                    acompanhar você na sua rotina sem<br />                    precisar segurá-lo ou deixá-lo no bolso.</p>               </div>                              <a href="#" id="call-to-action2" class="absoluto animated fadeInRight s09"><img src="caracteristicas/page2/btn-carregamento-facil.png" width="223px" height="68px" alt="Carregamento fácil" title="Carregamento fácil" /></a>                            </div>        </div>        </div></div>';