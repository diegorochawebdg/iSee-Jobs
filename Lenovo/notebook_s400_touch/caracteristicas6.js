$CONNECT_CONTENT = '<style type="text/css">.container_interna {  	height: 520px; 	padding: 0; 	position: relative; 	overflow:hidden; 	background: url(' + $CONNECT_HOSTED_URL + 'caracteristicas/page6/bg.jpg) 50% 50% no-repeat; }	.holder_interna {  	width: 100%; 	height: 520px; 	position: absolute; }.content-center { 	margin: 0 auto; 	width: 956px; 	height: 520px; }.content-center .div-content {  	margin: 0 auto; 	width: 820px; 	height: 520px; 	position: relative; }.connect-container .container_interna .absolute{ position:absolute; left:50%;}.connect-container .link-padding{height:0; position: relative; overflow: hidden; display: block;}.connect-container span{color:#333333; font: 14px FoundryRegular; position: absolute; left: 50%;}.connect-container .leitor, .audio, .usb, .energia{bottom: 406px;}.connect-container .rede, .hdmi, .usb3{bottom: 244px;}.connect-container .leitor{margin-left: -306px;}.connect-container .audio{margin-left: -7px;}.connect-container .usb{margin-left: 156px;}.connect-container .energia{margin-left: 264px;}.connect-container .rede{margin-left: -42px;}.connect-container .hdmi{margin-left: 10px;}.connect-container .usb3{margin-left: 117px; font-size: 12px;}.connect-container .usb3 strong{font: 14px FoundryBold;}.connect-container .call-to-action{background: url(' + $CONNECT_HOSTED_URL + 'caracteristicas/page6/assista-ao-video.png) no-repeat; width: 158px; padding-top: 60px; bottom: 22px; margin-left: 235px;}.connect-container .s05{ -webkit-animation-delay:0.5s; -moz-animation-delay:0.5s; -o-animation-delay:0.5s; animation-delay:0.5s;}.connect-container .s07{ -webkit-animation-delay:0.7s; -moz-animation-delay:0.7s; -o-animation-delay:0.7s; animation-delay:0.7s;}.connect-container .s09{ -webkit-animation-delay:0.9s; -moz-animation-delay:0.9s; -o-animation-delay:0.9s; animation-delay:0.9s;}.connect-container .s11{ -webkit-animation-delay:1.1s; -moz-animation-delay:1.1s; -o-animation-delay:1.1s; animation-delay:1.1s;}.connect-container .s13{ -webkit-animation-delay:1.3s; -moz-animation-delay:1.3s; -o-animation-delay:1.3s; animation-delay:1.3s;}.connect-container .s15{ -webkit-animation-delay:1.5s; -moz-animation-delay:1.5s; -o-animation-delay:1.5s; animation-delay:1.5s;}.connect-container .s17{ -webkit-animation-delay:1.7s; -moz-animation-delay:1.7s; -o-animation-delay:1.7s; animation-delay:1.7s;}.connect-container .s22{ -webkit-animation-delay:2.2s; -moz-animation-delay:2.2s; -o-animation-delay:2.2s; animation-delay:2.2s;}</style><div class="container_interna">    <div class="holder_interna">            <div class="content-center">            <div class="div-content">            	            	<span class="leitor animated fadeInDown s05">Leitor de cartão de memória (SD/MMC)</span>            	<span class="audio animated fadeInDown s07">Entrada de aúdio</span>            	<span class="usb animated fadeInDown s09">USB 2.0</span>            	<span class="energia animated fadeInDown s11">Conector <br>de energia</span>            	<span class="rede animated fadeInDown s13">Rede</span>            	<span class="hdmi animated fadeInDown s15">Saída HDMI</span>            	<span class="usb3 animated fadeInDown s17"><strong>USB 3.0 de alta velocidade</strong> <br>Transfere até 10X mais rápido</span>                                <a href="#" class="call-to-action absolute link-padding animated fadeInRight s22">Assista ao vídeo</a>            </div>        </div>        </div></div><script type="text/javascript">		connect_callToAction( $(".connect-container .call-to-action"), "fadeInRight", "s22", "videos.html", false );		function connect_callToAction( button, animation, delay, page, boolean ){		var connect_pageStart = setInterval( function(e){			button.removeClass( animation ).removeClass( delay ).addClass( "callToAction" )			.hover( function(e){ $(this).fadeTo( "fast", 0.8 ); }, function(e){ $(this).fadeTo( "fast", 1 );	} );			Connect.addCallToAction( button , page, boolean );			clearInterval( connect_pageStart );		}, ( ( parseFloat($(".connect-container ." + delay).css("animation-delay")) + 1 ) * 1000 ) );	}		</script>';