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
var $NOME_PRODUTO   = "Batedeira Profissional Philips Walita Viva RI7915";
var $NOME_FOLDER	= "batedeira_viva_7915/";
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
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Receitas profissionais com resultados muito mais homogêneos' title='Receitas profissionais com resultados muito mais homogêneos' />" },
						   
						 { nome: "Connect page2" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Bate até as massas mais pesadas' title='Bate até as massas mais pesada' />" },
						   
						 { nome: "Connect page3" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Sistema de dupla rotação' title='Sistema de dupla rotação' />" },
						   
						   { nome: "Connect page4" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='7 Velocidades' title='7 Velocidades' />" }];

// Video IDs
var $VIDEOS	 = [""];/** Tem vídeo? **/
var hasVideo = false;
