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
var $NOME_PRODUTO   = "Notebook S400 Prata | Lenovo";
var $NOME_FOLDER	= "notebook_s400_prata/";
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
var $CARACTERISTICAS = [ { nome: "Notebook S400 Prata | Lenovo" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Notebook S400 Prata | Lenovo' title='Notebook S400 Prata | Lenovo' />" },
						   
						 { nome: "Mais leve, mais fino, mais estiloso" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Mais leve, mais fino, mais estiloso' title='Mais leve, mais fino, mais estiloso' />" },
						   
						 { nome: "Som | Som de alta potência" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Som | Som de alta potência' title='Som | Som de alta potência' />" },
						   
						 { nome: "Windows 8" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Windows 8' title='Windows 8' />" },
						   
						 { nome: "Conectividade máxima" ,
						   src: "caracteristicas5.html" ,
						   thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Conectividade máxima' title='Conectividade máxima' />" }];

// Video IDs
var $VIDEOS	 = ["brtwYV4G-TQ"];/** Tem vídeo? **/
var hasVideo = true;
