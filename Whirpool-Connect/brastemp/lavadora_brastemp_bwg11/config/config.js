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
var $NOME_PRODUTO   = "Lavadora Brastemp BWG11";
var $NOME_FOLDER	= "lavadora_brastemp_bwg11/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 600; // em reais  
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
var $CARACTERISTICAS = [ { nome: "A lavadora mais rápida do Brasil" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='A lavadora mais rápida do Brasil' title='A lavadora mais rápida do Brasil' />" },
						   
						 { nome: "Lave mais roupa em menos tempo" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Lave mais roupa em menos tempo' title='Lave mais roupa em menos tempo' />" },
						   
						 { nome: "Resultados perfeitos!" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Resultados perfeitos!' title='Resultados perfeitos!' />" },
						   
						 { nome: "Painel Smart Touch" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Painel Smart Touch' title='Painel Smart Touch' />" }];

// Video IDs
var $VIDEOS		   = ["GA0KjgSXs7A"];
var hasVideo = true;