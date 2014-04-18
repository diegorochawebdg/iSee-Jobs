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
var $NOME_PRODUTO   = "Aspirador de Pó Berry BER13 | Electrolux";
var $NOME_FOLDER	= "aspirador_de_po_berry_ber13/";
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
var $CARACTERISTICAS = [ { nome: "Aspirador de Pó Berry BER13 | Electrolux" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Aspirador de Pó Berry BER13 | Electrolux' title='Aspirador de Pó Berry BER13 | Electrolux' />" },
						   
						 { nome: "O que é o filtro HEPA?" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='O que é o filtro HEPA?' title='O que é o filtro HEPA?' />" },
						   
						 { nome: "Muito mais potente" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Muito mais potente' title='Muito mais potente' />" },
						   
						 { nome: "Conheça os acessórios" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Conheça os acessórios' title='Conheça os acessórios' />" },
						   
						 { nome: "Clique e saiba mais" ,
						   src: "caracteristicas5.html" ,
						   thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Clique e saiba mais' title='Clique e saiba mais' />" } ];

// Video IDs
var $VIDEOS	 = ["7sbPJGwm9sw"];/** Tem vídeo? **/
var hasVideo = true;
