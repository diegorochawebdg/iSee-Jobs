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
var $NOME_PRODUTO   = "Aparador de Barba QT4070 | Philips";
var $NOME_FOLDER	= "aparador_de_barba_qt4070/";
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
var $CARACTERISTICAS = [ { nome: "Aparador de Barba QT4070 | Philips" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Aparador de Barba QT4070 | Philips' title='Aparador de Barba QT4070 | Philips' />" },
						   
						 { nome: "Total facilidade de uso" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Total facilidade de uso' title='Total facilidade de uso' />" },
						   
						 { nome: "Praticidade e segurança" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Praticidade e segurança' title='Praticidade e segurança' />" },
						   
						 { nome: "Crie o visual que quiser" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Crie o visual que quiser' title='Crie o visual que quiser' />" },
						   
						 { nome: "Máxima potência" ,
						   src: "caracteristicas5.html" ,
						   thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Máxima potência' title='Máxima potência' />" } ];

// Video IDs
var $VIDEOS	 = [""];/** Tem vídeo? **/
var hasVideo = false;
