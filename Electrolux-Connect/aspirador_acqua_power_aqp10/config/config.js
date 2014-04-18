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
var $NOME_PRODUTO   = "Aspirador Acqua Power AQP10 | Electrolux";
var $NOME_FOLDER	= "aspirador_acqua_power_aqp10/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
var $CLIENTE_URL	= "http://www.electroluxwebcontent.com/" + $NOME_FOLDER;

/** DEBUG **/
var $DEBUG = false;

/*
	Características Técnicas 
	Tipo de valor: Array / Objeto / String
	
	Objeto.nome:  Nome da página.
	Objeto.src:	  Caminho do arquivo HTML da página.
	Objeto.thumb: Caminho da imagem thumbnail
*/
var $CARACTERISTICAS = [ { nome: "Aspirador Acqua Power AQP10 | Electrolux" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Aspirador Acqua Power AQP10 | Electrolux' title='Aspirador Acqua Power AQP10 | Electrolux' />" },
						   
						 { nome: "Mais que um aspirador" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Mais que um aspirador' title='Mais que um aspirador' />" },
						   
						 { nome: "Limpeza fácil" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Limpeza fácil' title='Limpeza fácil' />" },
						   
						 { nome: "Super prático" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Super prático' title='Super prático' />" }];

// Video IDs
var $VIDEOS	 = ["K2VM5mX7Iv4"];/** Tem vídeo? **/
var hasVideo = true;
