<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	if($_POST['senha']=='isgarante10'){
	include ('config.php');	
	header("Content-type: application/vnd.ms-excel");
	header("Content-type: application/force-download");
	header("Content-Disposition: attachment; filename=dados_cadastro.xls");
	header("Pragma: no-cache");		
	$users = $cliente->getAllUsersData();
	$total_clientes = $cliente->total;
//	foreach ($users as $u){
//		$array_clientes[$u['id']] = $u;
//	}
	//$array_cods = $nf->getAllCodsData();
	//$total_nrsorte = $nf->total;
	//print_r($array_cods);
	
	echo '<table border="1">';
	
		echo '<tr>';
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
	
	foreach ($users as $c){
		echo '<tr>';
				echo '<td>'.utf8_decode($c['nome']).'</td>';
				echo '<td>'.$c['cpf'].'</td>';
				echo '<td>'.$c['rg'].'</td>';
				echo '<td>'.$c['cep'].'</td>';
				echo '<td>'.utf8_decode($c['end']).'</td>';
				echo '<td>'.$c['nr_end'].'</td>';
				echo '<td>'.utf8_decode($c['comp_end']).'</td>';
				echo '<td>'.utf8_decode($c['cidade_end']).'</td>';	
				echo '<td>'.$c['uf_end'].'</td>';
				echo '<td>'.$c['telefone'].'</td>';
				echo '<td>'.$c['email'].'</td>';		
				echo '<td>'.$c['dt_cad'].'</td>';
		echo '</tr>';
	}
	
	echo '<tr><td colspan="15">Total de clientes cadastrados:'.$total_clientes.'</td></tr>';
	echo '</table>';
	}
}else{
?>
    <form name="form-relatorio" method="post" >
        Senha: <input name="senha" type="password" size="30" />
        <input type="submit" name="bt-enviar" value="Gerar Dados" />
    </form>
<?php
}
?>




