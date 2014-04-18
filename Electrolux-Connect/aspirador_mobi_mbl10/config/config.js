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
var $NOME_PRODUTO   = "Aspirador de pó Mobi MBL10 | Electrolux";
var $NOME_FOLDER	= "aspirador_mobi_mbl10/";
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
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Baixo consumo de energia com alto poder de sucção' title='Baixo consumo de energia com alto poder de sucção' />" },
						   
						 { nome: "Connect page2" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Alta performance' title='Alta performance' />" },
						   
						 { nome: "Connect page3" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Fácil manuseio' title='Fácil manuseio' />" },
						   
						 { nome: "Connect page4" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Acessórios' title='Acessórios' />" },
						   
						 { nome: "Connect page5" ,
						   src: "vídeos.html" ,
						   thumb: "<img src='caracteristicas/thumb_videos.jpg' width='128' height='65' alt='Vídeos' title='Vídeos' />" }];

// Video IDs
var $VIDEOS	 = ["j5_onr0E1e4"];/** Tem vídeo? **/
var hasVideo = true;
