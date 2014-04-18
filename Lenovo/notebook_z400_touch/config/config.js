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
var $NOME_PRODUTO   = "Notebook Z400 Touch | Lenovo";
var $NOME_FOLDER	= "notebook_z400_touch/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
var $CLIENTE_URL	= "http://www.lenovowebcontent.com/" + $NOME_FOLDER;

/** DEBUG **/
var $DEBUG = false;

/*
	Características Técnicas 
	Tipo de valor: Array / Objeto / String
	
	Objeto.nome:  Nome da página.
	Objeto.src:	  Caminho do arquivo HTML da página.
	Objeto.thumb: Caminho da imagem thumbnail
*/
var $CARACTERISTICAS = [ { nome: "Notebook Z400 Touch | Lenovo" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Notebook Z400 Touch | Lenovo' title='Notebook Z400 Touch | Lenovo' />" },
						   
						 { nome: "Tela HD multitouch" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Tela HD multitouch' title='Tela HD multitouch' />" },
						   
						 { nome: "Alta performance" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Alta performance' title='Alta performance' />" },
						   
						 { nome: "Teclado retroiluminado" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Teclado retroiluminado' title='Teclado retroiluminado' />" },
						   
						 { nome: "Quer mais conectividade?" ,
						   src: "caracteristicas5.html" ,
						   thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Quer mais conectividade?' title='Quer mais conectividade?' />" },
						   
						 { nome: "Porque confiar na Lenovo?" ,
						   src: "caracteristicas6.html" ,
						   thumb: "<img src='caracteristicas/thumb_page6.jpg' width='128' height='65' alt='Porque confiar na Lenovo?' title='Porque confiar na Lenovo?' />" }];

// Video IDs
var $VIDEOS	 = ["kQihp61RQGc"];/** Tem vídeo? **/
var hasVideo = true;
