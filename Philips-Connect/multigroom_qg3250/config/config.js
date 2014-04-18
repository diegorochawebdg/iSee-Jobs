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
var $NOME_PRODUTO   = "Philips Barbeadores Multigroom QG3250";
var $NOME_FOLDER	= "multigroom_qg3250_new/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
var $CLIENTE_URL	= "http://www.philipsconsumerlifestyle.com/" + $NOME_FOLDER 

/** DEBUG **/
var $DEBUG = false;


/*
	Características Técnicas 
	Tipo de valor: Array / Objeto / String
	
	Objeto.nome:  Nome da página.
	Objeto.src:	  Caminho do arquivo HTML da página.
	Objeto.thumb: Caminho da imagem thumbnail
*/
var $CARACTERISTICAS = [ { nome: "Multigroom QG3250" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Multigroom QG3250' title='Multigroom QG3250' />" },
						   
						 { nome: "Muitas maneiras de criar o seu estilo" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Muitas maneiras de criar o seu estilo' title='Muitas maneiras de criar o seu estilo' />" },
						   
						 { nome: "6 Benefícios em 1" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='6 Benefícios em 1' title='6 Benefícios em 1' />" },
						   
						 { nome: "Mais recursos" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='Mais recursos' title='Mais recursos' />" }];

// Video IDs
var $VIDEOS		   = ["ePW_5gzbOEc" , "5_p06wJq-6o" , "qCLWI_3C06c"];
var hasVideo = true;