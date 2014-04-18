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
var $NOME_PRODUTO   = "Panela de Pressão Philips Walita Daily RI3103";
var $NOME_FOLDER	= "panela_de_pressao_ri3103/";
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
var $CARACTERISTICAS = [ { nome: "Panela de Pressão Philips Walita Daily RI3103" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Panela de Pressão Philips Walita Daily RI3103' title='Panela de Pressão Philips Walita Daily RI3103' />" },
						   
						 { nome: "Cozinhe com segurança" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Cozinhe com segurança' title='Cozinhe com segurança' />" },
						   
						 { nome: "Botão com 10 ajustes de cardápio" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Botão com 10 ajustes de cardápio' title='Botão com 10 ajustes de cardápio' />" },
						   
						 { nome: "Limpeza e acessórios" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Limpeza e acessórios' title='Limpeza e acessórios' />" }];

// Video IDs
var $VIDEOS		   = [];
var hasVideo = false;