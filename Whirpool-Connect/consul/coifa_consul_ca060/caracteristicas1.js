$CONNECT_CONTENT = '<style type="text/css">.container_interna { height: 520px; padding: 0; position: relative; overflow: hidden; background:#FFF url(' + $CONNECT_HOSTED_URL + 'caracteristicas/page1/background.jpg) 50% 50% no-repeat; }	.holder_interna {	width: 100%;	height: 520px;	position: absolute;}.content-center {	margin: 0 auto;	width: 100%;	height: 520px;}.content-center .div-content { 	margin: 0 auto;	width: 100%;	height: 520px;	position:relative;}.absoluto{ position:absolute; left:50%;}#principal{ margin-left:0; top:0; display:block;}#principal .titulo{ margin-left:-360px; top:45px;}#principal .box{ margin-left:-315px; top:235px;}#principal .instalacao{ margin-left:230px; top:325px;}#principal #btn-deixe{ margin-left:195px; top:452px; cursor:pointer;}#spots{ margin-left:0; top:0;}#spots #spot-velocidades{ margin-left:-48px; top:200px; cursor:pointer;}#spots #spot-modos{ margin-left:58px; top:40px; cursor:pointer;}#spots #spot-ruido{ margin-left:145px; top:150px; cursor:pointer;}#spots #spot-ideal{ margin-left:240px; top:40px; cursor:pointer;}#velocidades{ margin-left:-278px; top:230px; display:none;}#modos{ margin-left:-388px; top:54px; display:none;}#ruido{ margin-left:120px; top:164px; display:none;}#ideal{ margin-left:120px; top:100px; display:none;}</style><script type="text/javascript">		if( (typeof $LINK_CLICADO != "undefined") && ($LINK_CLICADO != null) ){		eventoAnalytics( null, $LINK_CLICADO[0], $LINK_CLICADO[1], $LINK_CLICADO[2], false);		$LINK_CLICADO = null;	}		TweenMax.from($("#principal .titulo"), .5, {css:{top:"-=40px", alpha:0}, ease:Back.easeOut, delay:.4});	TweenMax.from($("#principal .box"), .5, {css:{left:"-=80px", alpha:0}, ease:Back.easeOut, delay:.5});	TweenMax.from($("#principal .instalacao"), .5, {css:{top:"+=40px", alpha:0}, ease:Back.easeOut, delay:.6});	TweenMax.from($("#principal #btn-deixe"), .5, {css:{top:"+=40px", alpha:0}, ease:Back.easeOut, delay:.8});	TweenMax.from($("#spots"), .5, {css:{alpha:0}, ease:Back.easeOut, delay:.7});		var _spots = {"#spot-velocidades": ["#velocidades", "spot1.html"], "#spot-modos": ["#modos", "spot2.html"], "#spot-ruido": ["#ruido", "spot3.html"], "#spot-ideal": ["#ideal", "spot4.html"]};	var _divPrincipal = "#principal";	var tempo = 2000;	var tempoInicial = 0;	var tempoFinal = 0;	$.each(_spots, function(ind, val){		$(ind).css({"opacity": 0.5});		$(ind).on("mouseenter", function(e){			$(ind).css({"z-index": 2, "opacity": 1});			$(_divPrincipal).fadeOut();			$(val[0]).fadeIn();			tempoInicial = e.timeStamp;		});		$(ind).on("mouseleave", function(e){			$(ind).removeAttr("style").css({"opacity": 0.5});			$(val[0]).fadeOut();			$(_divPrincipal).fadeIn();			tempoFinal = e.timeStamp;			if( (tempoFinal - tempoInicial) >= tempo ){				eventoAnalytics( "caracteristicas1/" + val[1], null, null, null, true);			}		});	});		/* Função Analytics */	function eventoAnalytics( page, category, action, label, pageview ){		/*console.log("Enviar evento = " + page + " | " + category + " | " + action + " | " + label + " | " + pageview);*/		if(pageview){			Connect.trackPageView( page );		}else{			Connect.trackEvent(category, action, label );		}			}		Connect.addCallToAction( "#btn-deixe" , "caracteristicas2.html", true );	</script><div class="container_interna">    <div class="holder_interna">        <div class="content-center">            <div class="div-content">                        	<div id="principal" class="absoluto">                	<img src="caracteristicas/page1/coifa-inox-consul-facilite-ca060.png" width="235px" height="67px" alt="Coifa Inox Consul Facilite CA060" title="Coifa Inox Consul Facilite CA060" class="absoluto titulo" />                    <img src="caracteristicas/page1/box-cozinhe-a-vontade.png" width="482px" height="190px" alt="Cozinhe à vontade! Transforme o local em que você cozinha em um lugar confortável para receber os amigos e soltar a imaginação! A Coifa Facilite CA060 que traz praticidade para você e modernidade para sua cozinha." title="Cozinhe à vontade! Transforme o local em que você cozinha em um lugar confortável para receber os amigos e soltar a imaginação! A Coifa Facilite CA060 que traz praticidade para você e modernidade para sua cozinha." class="absoluto box" />                    <img src="caracteristicas/page1/instalacao-gratis.png" width="90px" height="94px" alt="Consul | Instalação grátis" title="Consul | Instalação grátis" class="absoluto instalacao" />                    <img src="caracteristicas/page1/btn-deixe-sua-cozinha-mais-completa.png" width="207px" height="69px" alt="Deixe sua cozinha mais completa" title="Deixe sua cozinha mais completa" class="absoluto" id="btn-deixe" />                </div>                                <div id="spots" class="absoluto">                	<img src="caracteristicas/page1/btn-spot.png" width="30px" height="30px" alt="Spot" title="Três velocidades" class="absoluto" id="spot-velocidades" />                    <img src="caracteristicas/page1/btn-spot.png" width="30px" height="30px" alt="Spot" title="2 modos de uso" class="absoluto" id="spot-modos" />                    <img src="caracteristicas/page1/btn-spot.png" width="30px" height="30px" alt="Spot" title="Baixo nível de ruído" class="absoluto" id="spot-ruido" />                    <img src="caracteristicas/page1/btn-casa.png" width="60px" height="60px" alt="Spot home" title="Ideal para cozinhas de até 19m²" class="absoluto" id="spot-ideal" />                </div>                                <div id="velocidades" class="absoluto">                	<img src="caracteristicas/page1/box-tres-velocidades.png" width="514px" height="225px" alt="Três velocidades | Controle as velocidades através de um botão, de acordo com o tipo de alimento que está sendo preparado." title="Três velocidades | Controle as velocidades através de um botão, de acordo com o tipo de alimento que está sendo preparado." />                </div>                                <div id="modos" class="absoluto">                	<img src="caracteristicas/page1/box-2-modos-de-uso.png" width="512px" height="372px" alt="2 modos de uso | Exaustor - O ar é retirado da cozinha direcionado para a parte externa da casa | Depurador - Depois de passar por um filtro de carbono ativo*, o ar é direcionado novamente para dentro da cozinha | * O filtro de carbono deve ser trocado de 5 em 5 meses de utilização ou com maior frequência, se o aparelho for utilizado com muita intensidade. A instalação do filtro de carbono ativo não é necessária se o aparelho for utilizado apenas no modo Exaustor." title="2 modos de uso | Exaustor - O ar é retirado da cozinha direcionado para a parte externa da casa | Depurador - Depois de passar por um filtro de carbono ativo*, o ar é direcionado novamente para dentro da cozinha | * O filtro de carbono deve ser trocado de 5 em 5 meses de utilização ou com maior frequência, se o aparelho for utilizado com muita intensidade. A instalação do filtro de carbono ativo não é necessária se o aparelho for utilizado apenas no modo Exaustor." />                </div>                                <div id="ruido" class="absoluto">                	<img src="caracteristicas/page1/box-baixo-nivel-de-ruido.png" width="261px" height="132px" alt="Baixo nível de ruído" title="Baixo nível de ruído" />                </div>                                <div id="ideal" class="absoluto">                	<img src="caracteristicas/page1/box-ideal-para-cozinhas-de-ate-19-m.png" width="271px" height="225px" alt="Ideal para cozinhas de até 19m²" title="Ideal para cozinhas de até 19m²" />                </div>                            </div>        </div>    </div></div>';