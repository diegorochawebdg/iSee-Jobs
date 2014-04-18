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
var $NOME_PRODUTO   = "Ar Condicionado Split Consul Inverter";
var $NOME_FOLDER	= "split_consul_cbg09/";
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
var $CARACTERISTICAS = [ { nome: "Ar Condicionado Split Consul Inverter" ,
						   src: "caracteristicas1.html" ,
						   thumb: "<img src='caracteristicas/thumb_page1.jpg' width='128' height='65' alt='Ar Condicionado Split Consul Inverter' title='Ar Condicionado Split Consul Inverter' />" },
						   
						   { nome: "Funções" ,
						   src: "caracteristicas2.html" ,
						   thumb: "<img src='caracteristicas/thumb_page2.jpg' width='128' height='65' alt='Funções' title='Funções' />" } ];

// Video IDs
var $VIDEOS	 = ["87QMVrp7n7g", "4IG2UMzkv1U"];/** Tem vídeo? **/
var hasVideo = true;
