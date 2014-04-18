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
var $NOME_PRODUTO   = "Mixer Cuisine IBC30 | Electrolux";
var $NOME_FOLDER	= "mixer_cuisine_ibc30/";
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
var $CARACTERISTICAS = [ { nome: "Mixer Cuisine IBC30 | Electrolux" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Mixer Cuisine IBC30 | Electrolux' title='Mixer Cuisine IBC30 | Electrolux' />" },
						   
						 { nome: "Versatilidade e rapidez" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Versatilidade e rapidez' title='Versatilidade e rapidez' />" },
						   
						 { nome: "Clique e conheça os acessórios" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Clique e conheça os acessórios' title='Clique e conheça os acessórios' />" },
						   
						 { nome: "Seu dia a dia muito mais prático" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Seu dia a dia muito mais prático' title='Seu dia a dia muito mais prático' />" }];

// Video IDs
var $VIDEOS	 = ["oKdE6npYeG0"];/** Tem vídeo? **/
var hasVideo = true;
