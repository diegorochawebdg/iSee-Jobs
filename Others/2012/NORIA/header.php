<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="shortcut icon" href="http://www.noria.com.br/site/wp-content/themes/noria/favicon.ico" />
<meta http-equiv="content-type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<title><?php wp_title(''); ?></title>
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url');?>" />
<link rel="pingback" href="<?php bloginfo('pingback_url');?>" />

<?php if(is_page('empresa')){?>
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory');?>/css/empresa.css" />
<?php } ?>
<?php if(is_page('produtos')){?>
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory');?>/css/produtos.css" />
<?php } ?>

<?php if(is_page('lube-tips')){?>
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory');?>/css/lube.css" />
<?php } ?>
<?php if(is_page('certificacao-internacional')){?>
	<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_directory');?>/css/certificacao.css" />
<?php } ?>
<?php if(is_page('contato')){?>
	<link href="<?php bloginfo('template_directory');?>/css/contato.css" rel="stylesheet" type="text/css" />
    <link href="<?php bloginfo('template_directory');?>/css/formulario.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="<?php bloginfo('template_directory');?>/js/form.js"></script>
<?php } ?>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35515204-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>

<body>
<div id="container-geral">
	<div class="box-content">
      <!--TOPO-->
        <div id="topo">
            <div class="logo">
            	<h1>
                    <a href="<?php echo home_url(); ?>" title="Voltar para a página inicial"><img src="<?php bloginfo('template_directory');?>/images/logotipo-noria.jpg" width="211" height="67" alt="Logotipo Noria" title="Retornar para a página principal" /></a>
                </h1>
            </div>
            <div class="menu">
                <ul>
                    <li><div id="home" class="menu-hover"><a href="<?php echo home_url(); ?>">Home</a></div></li>
                    <li><div id="empresa" class="menu-hover"><a href="<?php bloginfo('url'); ?>/index.php/empresa">A Empresa</a></div></li>
                    <li><div id="servicos" class="menu-hover"><a href="<?php bloginfo('url'); ?>/index.php/category/servicos/">Serviços</a></div></li>
                    <li><div id="treinamentos" class="menu-hover"><a href="<?php bloginfo('url'); ?>/index.php/category/treinamentos/">Treinamentos</a></div></li>
                    <li><div id="produtos" class="menu-hover"><a href="<?php bloginfo('url'); ?>/index.php/produtos/">Produtos</a></div></li>
                    <li><div id="lube" class="menu-hover"><a href="<?php bloginfo('url'); ?>/index.php/lube-tips/">Lube Tips</a></div></li>
                    <li><div id="contato" class="menu-hover"><a href="<?php bloginfo('url'); ?>/index.php/contato">Contato</a></div></li>
                    <li><div id="certificacao" class="menu-hover padding-last"><a href="<?php bloginfo('url'); ?>/index.php/certificacao-internacional">Certificação Internacional</a></div></li>
                </ul>
            </div>
            <div class="clear"></div>
        </div>