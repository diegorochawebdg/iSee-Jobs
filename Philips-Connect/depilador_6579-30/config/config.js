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
var $NOME_PRODUTO   = "Depilador Wet & Dry HP6579/30 | Philips";
var $NOME_FOLDER	= "depilador-hp6579-30_connect/";
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
						   thumb: "<img src='caracteristicas/thumb_page1.png' width='128' height='65' alt='Depiladores Philips Satinelle | HP6579/30' title='Depiladores Philips Satinelle | HP6579/30' />" },
						   
						 { nome: "Connect page2" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.png' width='128' height='65' alt='Perfeito para você' title='Perfeito para você' />" },
						   
						 { nome: "Connect page3" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.png' width='128' height='65' alt='Praticidade na depilação' title='Praticidade na depilação' />" },
							 
						{ nome: "Connect page4" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.png' width='128' height='65' alt='Mais cuidado com a pele' title='Mais cuidado com a pele' />" },
						
						{ nome: "Connect page5" ,
						   src: "caracteristicas5.html" ,
						   thumb: "<img src='caracteristicas/thumb_page5.png' width='128' height='65' alt='Para todas as necessidades' title='Para todas as necessidades' />" },
						
						{ nome: "Connect page6" ,
						   src: "caracteristicas6.html" ,
						   thumb: "<img src='caracteristicas/thumb_page6.png' width='128' height='65' alt='Conheça a linha completa' title='Conheça a linha completa' />" }];

// Video IDs
var $VIDEOS	 = [""];/** Tem vídeo? **/
var hasVideo = false;
