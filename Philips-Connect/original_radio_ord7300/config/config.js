/* 
	@charset "UTF-8";
	@ Title: CSS Default Stylesheet file
	@ Author: Gustavo Teider
	@ Date: 22/11/2012
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
	@ Arquivo de configuração de Página Especial
*/


/** Nome do produto **/
var $NOME_PRODUTO   = "Original Radio ORD7300 | Philips";
var $NOME_FOLDER	= "original_radio_ord7300/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
var $CLIENTE_URL	= "http://www.philipsconsumerlifestyle.com/" + $NOME_FOLDER;

/** DEBUG **/
var $DEBUG = false;

/*
	Características Técnicas 
	Tipo de valor: Array / Objeto / String
	
	Objeto.nome:  Nome da página.
	Objeto.src:	  Caminho do arquivo HTML da página.
	Objeto.thumb: Caminho da imagem thumbnail
*/
var $CARACTERISTICAS = [ { nome: "Connect page1" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Original Radio' title='Original Radio' />" },
						   
						 { nome: "Connect page2" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Design e estilo' title='Design e estilo' />" },
						   
						 { nome: "Connect page3" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Dock para iPod/iPhone' title='Dock para iPod/iPhone' />" },
						   
						{ nome: "Connect page4" ,
						src: "caracteristicas4.html" ,
						thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Som sem limites' title='Som sem limites' />" },
						
						{ nome: "Connect page5" ,
						src: "caracteristicas5.html" ,
						thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Música do seu jeito' title='Música do seu jeito' />" }];

// Video IDs
var $VIDEOS	 = ["OaaqPNKLquk"];/** Tem vídeo? **/
var hasVideo = true;
