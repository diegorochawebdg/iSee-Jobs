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
var $NOME_PRODUTO   = "SmartTV LED Ultrafina Série 7000 | Philips";
var $NOME_FOLDER	= "7000_connect/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais
var $CLIENTE_URL	= "http://www.tvsphilips.com.br/" + $NOME_FOLDER;

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
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Smart TV LED Ultrafina' title='Smart TV LED Ultrafina' />" },
						   
						 { nome: "Connect page2" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Ambilight' title='Ambilight' />" },
						   
						 { nome: "Connect page3" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Smart TV' title='Smart TV' />" },
						   
						 { nome: "Connect page4" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Mais interação no seu jogo' title='Mais interação no seu jogo' />" },
						   
						 { nome: "Connect page5" ,
						 src: "caracteristicas5.html" ,
						 thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Easy 3D' title='Easy 3D' />" },
						
						 { nome: "Connect page6" ,
						 src: "caracteristicas6.html" ,
						 thumb: "<img src='caracteristicas/thumb_page6.jpg' width='128' height='65' alt='Conectividade máxima' title='Conectividade máxima' />" },
						
						 { nome: "Connect page7" ,
						 src: "caracteristicas7.html" ,
						 thumb: "<img src='caracteristicas/thumb_page7.jpg' width='128' height='65' alt='Você no controle' title='Você no controle' />" }];

// Video IDs
var $VIDEOS	 = [""];/** Tem vídeo? **/
var hasVideo = false;
