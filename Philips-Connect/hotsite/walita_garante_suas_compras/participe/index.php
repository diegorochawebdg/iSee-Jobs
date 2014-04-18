<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html><!-- InstanceBegin template="/Templates/Default.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- InstanceBeginEditable name="doctitle" -->
<meta property="og:image" content="http://www.banhodelojaphilipswalita.com.br/images/thumbnail.jpg"/>
<title>Participe - Promoção Philips Walita garante suas compras</title>
<!-- InstanceEndEditable -->
<link rel="stylesheet" href="../css/main.css">
<!-- InstanceBeginEditable name="head" -->
<link rel="stylesheet" href="../css/participe.css">
<!-- InstanceEndEditable -->
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/lsPreLoaderPlugin.min.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
    /*Preloader*/
	$("html").lsPreLoader({
		
		backgroundColor: "#f1eeee",
		progressColor: '#00b7be', 
		progressPosition: "center",
		progressHeight:  "4px"
		
	});
	/*End of Preloader*/
});
</script>
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
	<!-- InstanceBeginEditable name="content" -->
    
    <!--Lightbox Init-->
    <div class="lightbox absolute">
        <div class="lightbox-acesso absolute">
            <a href="#" class="fechar absolute"></a>
            <div class="left-content">
                <h2>Veja seus números ou cadastre mais notas fiscais</h2>
                
                <!--Form-->
                <div id="form">
                    <form id="form-login" name="form-login" method="post">
                        <div class="size-login">
                            <label>CPF</label>
                        </div>
                        <input tabindex="1" type="text" name="cpf" id="cpf" class="cpf-input">
                        <div class="clear"></div>
                        <div class="size-login">
                            <label>SENHA</label>
                        </div>
                        <input tabindex="2" type="password" name="senha" id="senha">
                        <a href="#" id="esqueci-senha" class="senha">Esqueci minha senha.</a>
                        <div class="clear"></div>
                        <button name="bt-login" type="button" id="bt-login" tabindex="3"></button>
                    </form>
                    <div class="clear"></div>
                </div>
                <!--End of Form-->
                
            </div>
            <div class="right-content">
                <a href="#" title="Meu primeiro acesso" class="link-padding">Meu primeiro acesso</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
    <!--End of Lightbox Init-->
    
    <?php
		$arr_uf = array(
			'' 	 => '',
			'AM' => 'Amazonas',
			'AC' => 'Acre',
			'AL' => 'Alagoas',
			'AP' => 'Amapá',
			'CE' => 'Ceará',
			'DF' => 'Distrito federal',
			'ES' => 'Espirito santo',
			'MA' => 'Maranhão',
			'PR' => 'Paraná',
			'PE' => 'Pernambuco',
			'PI' => 'Piauí',
			'RN' => 'Rio grande do norte',
			'RS' => 'Rio grande do sul',
			'RO' => 'Rondônia',
			'RR' => 'Roraima',
			'SC' => 'Santa catarina',
			'SE' => 'Sergipe',
			'TO' => 'Tocantins',
			'PA' => 'Pará',
			'BA' => 'Bahia',
			'GO' => 'Goiás',
			'MT' => 'Mato grosso',
			'MS' => 'Mato grosso do sul',
			'RJ' => 'Rio de janeiro',
			'SP' => 'São paulo',
			'RS' => 'Rio grande do sul',
			'MG' => 'Minas gerais',
			'PB' => 'Paraiba'
		);
		// Ordena sem alterar os indices
		asort( $arr_uf, SORT_STRING );
	?>
    
    <!--Container-->
    <div class="container relative">
        
        <!--Selo-->
        <img src="../images/selo-promocao.png" width="148" height="171" alt="Selo Philips Walita" title="Philips Walita garante suas compras" class="selo absolute">
        <!--End of Selo-->
        
    	<!--Form-->
        <div class="the-form relative">
            <h1>Cadastro</h1>
            <form id="cad_cliente" name="cad_cliente" method="post">
                <div class="size">Nome completo:</div> <input type="text" name="nome" id="nome" size="30" /><br />
                <div class="clear"></div>
                
                <div class="size">Email:</div> <input type="email" name="email" id="email" size="30" /><br />
                <div class="clear"></div>
                <div class="size">CPF:</div> <input type="text" name="cpf" id="cpf" size="30" class="cpf-input float-left" />
              <div class="float-left">RG: <input type="text" name="rg" id="rg" size="30" /></div><br />
                <div class="clear"></div>
                
                <div class="size">Sexo:</div>
                <span class="auto-completar float-left ptop">Masculino</span><span class="checkbox-container float-left"> <input value="M" type="radio" name="sexo" class="float-left radio" id="sexo"> </span>
                <span class="auto-completar float-left ptop">Feminino</span><span class="checkbox-container float-left"><input value="F" type="radio" name="sexo" class="float-left radio" id="sexo"> </span>
                
                <div class="nascimento float-left">
                    <div class="float-left ptop">Nascimento:</div>
                    <input type="text" name="nascimento" id="nascimento" size="30" class="float-left" />
                </div>
                <div class="clear"></div>
                
                <div class="size">CEP:</div> <input type="text" name="cep" id="cep" size="30" class="float-left" /><span class="checkbox-container float-left selected"><input type="checkbox" name="completar" checked class="float-left" id="completar"> </span><span class="auto-completar float-left ptop">Auto completar</span><br />
                <div class="clear"></div>
                
                <div class="clear"></div>
                
                <div class="size">Endereço:</div> <input type="text" name="endereco" id="endereco" size="30" /><br />
                <div class="size">Número:</div><input type="text" name="nr_endereco" id="nr_endereco" size="30" class="float-left" />
                <div class="float-left">Complemento: <input type="text" name="complemento" id="complemento" size="30" /></div><br />
                <div class="clear"></div>
                <div class="size">Cidade:</div> <input type="text" name="cidade" id="cidade" size="30" class="float-left" />
                <div class="float-left">
                Estado: 
                <select name="uf" id="uf">  
                <?php
                foreach ($arr_uf as $uf => $uf_nome){
                echo '<option id="'.$uf.'" value="'.$uf.'">'.$uf.'</option>';
                }
                ?>
                </select>
              </div> <br />
                <div class="clear"></div>
                <div class="size">Telefone:</div> <input type="text" name="telefone" id="telefone" size="30" />
                <div class="clear"></div>
                
                <div class="linha"></div>
                
                <div class="size2">Número da nota fiscal:</div> <input type="text" name="nr_nf" id="nr_nf" size="30" class="float-left" />
                <div class="clear"></div>
                
                <div class="size2">CNPJ:</div> <input type="text" name="cnpj_nf" id="cnpj_nf" size="30" class="float-left" />
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
                    <input type="text" name="nome-produto[]">
                    <div class="clear"></div>
                 </div>
                
                <div class="linha"></div>
                
                <!--Regulamento | Ofertas-->
                <div class="regulamento">
                    <span class="checkbox-container2 float-left">
                        <input name="termos" id="termos" type="checkbox">
                    </span>
                    <span class="float-left ptop">Li o <a href="/regulamento.pdf" target="_blank" class="regulamento2">regulamento da promoção</a> e concordo com os termos e condições</span>                     
                    <div class="clear"></div>
                </div>
                <div class="ofertas">
                    <span class="checkbox-container2 float-left">
                        <input name="informacoes" id="informacoes" type="checkbox">
                        <input name="hidden_news" id="hidden_news" type="hidden" value="0">
                    </span>
                    <span class="float-left ptop">Aceito receber informações da Philips</span>
                    <div class="clear"></div>
                </div>
                <!--End of Regulamento | Ofertas-->
                
                <button type="button" name="bt_enviar" id="bt_enviar" value="Finalizar o cadastro" />
                <div class="clear"></div>
            </form>
        </div>
        <div class="clear"></div>
        <!--End of Form-->
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
<script type="text/javascript" src="../js/script.js"></script>
<!-- InstanceBeginEditable name="scripts" -->
<script type="text/javascript" src="../js/modal.js"></script>
<script type="text/javascript" src="../js/masked.js"></script>
<script type="text/javascript" src="../js/participe.js"></script>

<!-- InstanceEndEditable -->
<!--End of Scripts - Yes, on the end-->

</body>
<!-- InstanceEnd --></html>
