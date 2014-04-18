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
var $NOME_PRODUTO   = "SmartTV 3D Slim LED Série 8000 | Philips";
var $NOME_FOLDER	= "serie_8000/55_PFL8008G/";
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
var $CARACTERISTICAS = [ { nome: "SmartTV 3D Slim LED Série 8000 | Philips" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='SmartTV 3D Slim LED Série 8000 | Philips' title='SmartTV 3D Slim LED Série 8000 | Philips' />" },
						   
						 { nome: "Experimente o Ambilight" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Experimente o Ambilight' title='Experimente o Ambilight' />" },
						   
						 { nome: "Sua TV inteligente" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Sua TV inteligente' title='Sua TV inteligente' />" },
						   
						 { nome: "A experiência do 3D em sua casa" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='A experiência do 3D em sua casa' title='A experiência do 3D em sua casa' />" },
						   
						 { nome: "O máximo em tecnologia" ,
						 src: "caracteristicas5.html" ,
						 thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='O máximo em tecnologia' title='O máximo em tecnologia' />" },
						
						 { nome: "Você no comando" ,
						 src: "caracteristicas6.html" ,
						 thumb: "<img src='caracteristicas/thumb_page6.jpg' width='128' height='65' alt='Você no comando' title='Você no comando' />" }];

// Video IDs
var $VIDEOS	 = [""];/** Tem vídeo? **/
var hasVideo = false;
