<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	if($_POST['senha']=='isgarante10'){
	include ('config.php');	
	header("Content-type: application/vnd.ms-excel");
	header("Content-type: application/force-download");
	header("Content-Disposition: attachment; filename=relatorio_cadastro.xls");
	header("Pragma: no-cache");		
	$users = $cliente->getAllUsersData();
	$total_clientes = $cliente->total;
	foreach ($users as $u){
		$array_clientes[$u['id']] = $u;
	}
	$array_cods = $nf->getAllCodsData();
	$total_nrsorte = $nf->total;
	//print_r($array_cods);
	
	echo '<table border="1">';
	
		echo '<tr>';
				echo '<td>NR DA SORTE</td>';
				echo '<td>NOTA FISCAL</td>';
				echo '<td>NOME PRODUTO</td>';
				echo '<td>CNPJ</td>';
				echo '<td>DATA CADASTRO NR DA SORTE</td>';
				echo '<td>NOME</td>';
				echo '<td>CPF</td>';
				echo '<td>RG</td>';
				echo '<td>CEP</td>';
				echo utf8_decode('<td>ENDEREÇO</td>');
				echo utf8_decode('<td>NR ENDEREÇO</td>');
				echo '<td>COMPLEMENTO</td>';
				echo '<td>CIDADE</td>';	
				echo '<td>UF</td>';
				echo '<td>TELEFONE</td>';
				echo '<td>EMAIL</td>';		
				echo '<td>DATA CADASTRO CLIENTE</td>';
		echo '</tr>';
	
	foreach ($array_cods as $cod){
		echo '<tr>';
				echo '<td>'.$cod['cod_nf'].'</td>';
				echo '<td>'.$cod['nr_nf'].'</td>';
				echo '<td>'.utf8_decode($cod['nome_produto']).'</td>';
				echo '<td>'.$cod['cnpj'].'</td>';
				echo '<td>'.$cod['dt_cad'].'</td>';
				echo '<td>'.utf8_decode($array_clientes[$cod['cod_usr']]['nome']).'</td>';
				echo '<td>'.$array_clientes[$cod['cod_usr']]['cpf'].'</td>';
				echo '<td>'.$array_clientes[$cod['cod_usr']]['rg'].'</td>';
				echo '<td>'.$array_clientes[$cod['cod_usr']]['cep'].'</td>';
				echo '<td>'.utf8_decode($array_clientes[$cod['cod_usr']]['end']).'</td>';
				echo '<td>'.$array_clientes[$cod['cod_usr']]['nr_end'].'</td>';
				echo '<td>'.utf8_decode($array_clientes[$cod['cod_usr']]['comp_end']).'</td>';
				echo '<td>'.utf8_decode($array_clientes[$cod['cod_usr']]['cidade_end']).'</td>';	
				echo '<td>'.$array_clientes[$cod['cod_usr']]['uf_end'].'</td>';
				echo '<td>'.$array_clientes[$cod['cod_usr']]['telefone'].'</td>';
				echo '<td>'.$array_clientes[$cod['cod_usr']]['email'].'</td>';		
				echo '<td>'.$array_clientes[$cod['cod_usr']]['dt_cad'].'</td>';
		echo '</tr>';
	}
	
	echo '<tr><td colspan="15">Total de clientes cadastrados:'.$total_clientes.'</td></tr>';
	echo utf8_decode('<tr><td colspan="15">Total números da sorte:'.$total_nrsorte.'</td></tr>');
	echo '</table>';
	}
}else{
?>
    <form name="form-relatorio" method="post" >
        Senha: <input name="senha" type="password" size="30" />
        <input type="submit" name="bt-enviar" value="Gerar Relatorio" />
    </form>
<?php
}
?>




