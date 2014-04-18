<?php
 include '../config.php';
 if(!$cliente->isSetUser()){
	header('Location:' . SITE_URL . 'participe');
 }else{
	$cliente->setId(USER_ID); 
 	$usuario = $cliente->getUserData();
 	$codigos = $nf->getUserCods()
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><!-- InstanceBegin template="/Templates/Default.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- InstanceBeginEditable name="doctitle" -->
<title>Meus números - Não passe sem esse banho de loja | Philips Walita</title>
<!-- InstanceEndEditable -->
<link rel="stylesheet" href="../css/main.css">
<!-- InstanceBeginEditable name="head" -->
<link rel="stylesheet" href="../css/meus-numeros.css">
<!-- InstanceEndEditable -->
</head>

<body>
<!--Header-->
<div id="header">
    <div class="faixa"></div>
    <div class="content-center">
    	<a href="/" id="logo" class="link-padding absolute">Philips Walita</a>
        <div id="main-menu" class="absolute">
            <ul>
                <li id="menu_home"><a href="/">Home</a></li>
                <li id="menu_promocao"><a href="/promocao/">Promoção</a></li>
                <li id="menu_participe"><a href="/participe/">Participe</a></li>
                <li id="menu_regulamento"><a href="/regulamento.pdf" target="_blank">Regulamento</a></li>
                <li><a href="http://www.philips.com.br/e/kitchen/collectionoverview.html" target="_blank" title="Produtos">Produtos</a></li>
                <li id="menu_comprar"><a href="/onde_comprar/">Onde Comprar</a></li>
                <li id="menu_fale_conosco"><a href="/fale_conosco/">Fale Conosco</a></li>
            </ul>
            <div class="clear"></div>
        </div>
    </div>
    <div class="menu-extend"></div>
</div>
<!--End of Header-->

<!--Content-->
<div id="content">
	<img src="images/promocao-philips-walita-garante-suas-compras.png" width="439" height="97" alt="Promoção - Não passe sem esse banho de loja" title="Promoção - Não passe sem esse banho de loja" class="titulo-promocao">
	<!-- InstanceBeginEditable name="content" -->
    
    <!--Container-->
    <div class="container relative">
    
    	<!--Dados do cliente-->
    	<div class="dados-cliente">
        	<h2><?= $usuario['nome'] ?></h2>
            <ul>
            	<li><?=$usuario['telefone']?></li>
                <li><?= $usuario['email'] ?></li>
                <li>CPF: <?=$usuario['cpf']?></li>
                <li><?=$usuario['end']?> <?=$usuario['nr_end']?></li>
               <!-- <li>Pq do sucesso</li>-->
               <?php if($usuario['comp_end'] != ''){?>
                <li><?= $usuario['comp_end'] ?>&nbsp;</li>
               <?php } ?>
                <li><?= $usuario['cidade_end'] ?> - <?= $usuario['uf_end'] ?></li>
            </ul>
            <!--<a href="#" title="Alterar" class="link-padding">Alterar</a>-->
        </div>
        <!--End of Dados do cliente-->
        
        <!--Números desse cliente-->
        <div class="numeros">
        	<!--Meus números-->
        	<div id="meus-numeros">
 			<?php
				//print_r($codigos);
				if(!empty($codigos)){
					foreach ($codigos as $codigo) echo '<span>'.$nf->formatCod($codigo,0,5).'</span>';
				}
			?>                
                <div class="clear"></div>
            </div>
            <!--End of Meus números-->
            
            <!--Cadastrar Mais-->
            <div class="cadastrar-mais">
            	<form name="form_addnota" id="form_addnota" method="post">
                	<div class="input-size"><label>Número da nota fiscal</label></div>
                    <!--<a href="#" title="O que é isso?" class="link-padding duvida">O que é isso?</a>-->
                    <input name="nr_nf" id="nr_nf" value="" type="text" tabindex="1">
                    <div class="clear"></div>

                    <div class="input-size"><label>CNPJ do estabelecimento</label></div>
                    <input name="cnpj_nf" id="cnpj_nf" value="" type="text" tabindex="2">
                    <div class="clear"></div>
                    
                    <div class="size2">Quantidade de produtos adquiridos:</div>
                    <select name="qtd_produtos" id="qtd_produtos" class="float-left">    
                    <?php
                        $i 	 = 1;
                        $max = 10 ;
                        while ($i <= $max ){
                            echo '<option value="'.$i.'">' . str_pad($i, 2, '0', STR_PAD_LEFT) . '</option>';	
                            ++$i;
                        }
                    ?>
                    </select> <br />
                    <div class="clear"></div>
                    
                    <div class="array-input">
                        <div class="size2">Produto 01</div>
                        <input type="text" name="nome-produto[]" >
                        <div class="clear"></div>
                     </div>
                    <div class="clear"></div>
                    <button name="bt_enviar_nota" id="bt_enviar_nota"  type="button" tabindex="4"></button>
                    <div class="clear"></div>
                </form>
            </div>
            <!--End of Cadastrar Mais-->
        </div>
        <!--End of Números desse cliente-->
        <div class="clear"></div>
        
    </div>
    <!--End of Container-->    
    
    
	<!-- InstanceEndEditable -->
</div>
<!--End of Content-->

<!--Footer-->
<div id="footer">
	<div class="faixa"></div>
    <div class="content-center">
    	<small>Títulos de Capitalização da modalidade incentivo emitidos por MAPFRE Capitalização S/A., CNPJ nº 09.382.998/0001-00 e Processo SUSEP nº 15414.001189/2012-13. Promoção válida de 18/11/2013 à 31/12/2013. Valores líquidos de IR, conforme legislação em vigor. A aprovação deste título pela SUSEP não implica, por parte da autarquia, incentivo ou recomendação à sua aquisição, representando exclusivamente sua adequação às normas em vigor. Leia o Regulamento completo no site www.walitagarantesuascompras.com.br.</small>
    </div>
</div>
<!--End of Footer-->

<!--Scripts - Yes, on the end-->
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/shadowbox.js"></script>
<script type="text/javascript" src="../js/script.js"></script>
<!-- InstanceBeginEditable name="scripts" -->
<!-- InstanceEndEditable -->
<!--End of Scripts - Yes, on the end-->

</body>
<!-- InstanceEnd -->
<script type="text/javascript" src="../js/modal.js"></script>
<script type="text/javascript" src="../js/masked.js"></script>
<script type="text/javascript" src="../js/meus_numeros.js"></script>
</html>
<?php
}
?>
