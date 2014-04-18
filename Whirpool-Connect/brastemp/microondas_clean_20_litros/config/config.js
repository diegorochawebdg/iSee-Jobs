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
var $NOME_PRODUTO   = "Micro-Ondas Clean 20 Litros | Brastemp";
var $NOME_FOLDER	= "microondas_clean_20_litros/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
var $CLIENTE_URL	= "http://www.whirlpoolspecialcontent.com/" + $NOME_FOLDER;

/** DEBUG **/
var $DEBUG = false;

/*
	Características Técnicas 
	Tipo de valor: Array / Objeto / String
	
	Objeto.nome:  Nome da página.
	Objeto.src:	  Caminho do arquivo HTML da página.
	Objeto.thumb: Caminho da imagem thumbnail
*/
var $CARACTERISTICAS = [ { nome: "Micro-Ondas Clean 20 Litros | Brastemp" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Notebook Z400 Touch | Lenovo' title='Notebook Z400 Touch | Lenovo' />" },
						   
						 { nome: "Receitas pré-programadas" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Receitas pré-programadas' title='Receitas pré-programadas' />" },
						   
						 { nome: "Conheça outras funções" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Conheça outras funções' title='Conheça outras funções' />" }];

// Video IDs
var $VIDEOS	 = ["MzQdN26ssbM"];/** Tem vídeo? **/
var hasVideo = true;
