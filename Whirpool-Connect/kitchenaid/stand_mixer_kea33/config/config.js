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
var $NOME_PRODUTO   = "Stand Mixer KEA33 | KitchenAid";
var $NOME_FOLDER	= "stand_mixer_kea33/";
var $HASH_TAG	    = "#hash-tag-cliente";
var $VER_FULLSCREEN = "Ver em full screen";
var $VER_NORMAL		= "Ver em tamanho normal";
var $VALOR_PRODUTO	= 10; // em reais 
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
var $CARACTERISTICAS = [ { nome: "Stand Mixer KEA33 | KitchenAid" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Stand Mixer KEA33 | KitchenAid' title='Stand Mixer KEA33 | KitchenAid' />" },
						   
						   { nome: "Potência e elegância" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Potência e elegância' title='Potência e elegância' />" },
						   
						   { nome: "Resultados profissionais" ,
						   src: "caracteristicas3.html" ,
						   thumb: "<img src='caracteristicas/thumb_page3.jpg' width='128' height='65' alt='Resultados profissionais' title='Resultados profissionais' />" },
						   
						   { nome: "10 velocidades" ,
						   src: "caracteristicas4.html" ,
						   thumb: "<img src='caracteristicas/thumb_page4.jpg' width='128' height='65' alt='10 velocidades' title='10 velocidades' />" },
						   
						   { nome: "Conheça todos os acessórios" ,
						   src: "caracteristicas5.html" ,
						   thumb: "<img src='caracteristicas/thumb_page5.jpg' width='128' height='65' alt='Conheça todos os acessórios' title='Conheça todos os acessórios' />" } ];

// Video IDs
var $VIDEOS	 = ["pc8TLJC38H4", "Naty2BdkL9g", "3B0HfKe6jMY"];/** Tem vídeo? **/
var hasVideo = true;
