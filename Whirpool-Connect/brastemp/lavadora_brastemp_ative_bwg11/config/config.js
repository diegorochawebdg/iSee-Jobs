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
var $NOME_PRODUTO   = "Lavadora Brastemp Ative BWG11 | Brastemp";
var $NOME_FOLDER	= "lavadora_brastemp_ative_bwg11/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
var $CLIENTE_URL	= "http://www.whirpoolspecialcontent.com/" + $NOME_FOLDER;

/** DEBUG **/
var $DEBUG = false;

/*
	Características Técnicas 
	Tipo de valor: Array / Objeto / String
	
	Objeto.nome:  Nome da página.
	Objeto.src:	  Caminho do arquivo HTML da página.
	Objeto.thumb: Caminho da imagem thumbnail
*/
var $CARACTERISTICAS = [ { nome: "Lavadora Brastemp Ative BWG11 | Brastemp" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Lavadora Brastemp Ative BWG11 | Brastemp' title='Lavadora Brastemp Ative BWG11 | Brastemp' />" },
						   
						   { nome: "Lavadora Brastemp Ative BWG11 | Brastemp" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Capacidade para 11Kg | Por dentro da Ative BWG11' title='Capacidade para 11Kg | Por dentro da Ative BWG11' />" } ];

// Video IDs
var $VIDEOS	 = ["pkF8IKpeB-M"];/** Tem vídeo? **/
var hasVideo = true;
