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
var $NOME_PRODUTO   = "Cafeteira Espresso Chef EMC10 | Electrolux";
var $NOME_FOLDER	= "cafeteira_emc10/";
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
var $CARACTERISTICAS = [ { nome: "Connect page1" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.png' width='128' height='65' alt='Cafeteira Espresso Chef EMC10' title='Cafeteira Espresso Chef EMC10' />" },
						   
						 { nome: "Connect page2" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.png' width='128' height='65' alt='Saiba mais' title='Saiba mais' />" },
						   
						 { nome: "Connect page3" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.png' width='128' height='65' alt='Placa de aquecimento' title='Placa de aquecimento' />" }];

// Video IDs
var $VIDEOS	 = ["598Lg86B-6k"];/** Tem vídeo? **/
var hasVideo = true;
