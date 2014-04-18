<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	if(empty($_POST['nr_nf'])){
		die('{"result":"error", "msg":"O campo número da nota fiscal é obrigatório"}');
	}

	$i = 1;
	$qtd_produtos = $_POST['qtd_produtos'];
	$produtos     = $_POST['nome-produto'];
	while($i <= $qtd_produtos){
		if(empty($produtos[$i - 1])) die('{"result":"error", "msg":"Coloque o nome de todos produtos"}');
		//$arr_errors[] = 'Coloque o nome de todos produtos';
		++$i;
	}	
	include('../config.php');
	//Testo se o usuario está logado
	
	
	if(!$nf->cnpjValido($_POST['cnpj_nf'])){	
		die('{"result":"error", "msg":"Este cnpj não é válido"}');
	}
	
	if($nf->exists($_POST['nr_nf'],$_POST['cnpj_nf'])){
		die('{"result":"error", "msg":"Essa nota fiscal já foi cadastrada"}');
	}
	
	if($cliente->isSetUser()){
		//Inserirndo dados nota fiscal		
		$nf->setNf($_POST['nr_nf']);
		$nf->setCnpj($_POST['cnpj_nf']);
		$qtd_produtos = $_POST['qtd_produtos'];
		$i = 1;	
		$erro = 0;
		while($i <= $qtd_produtos){
			$newcod = $nf->GenerateCod(0,99999); // Gero um codigo aleatorio que ainda não existe
			if($newcod > 0){		
				$nf->setCod($newcod);
				$nf->setUser(USER_ID);
				$nf->setProduto($produtos[$i - 1]);
				if(!$nf->inserir()){
					++$erro;
					die('{"result":"error", "msg":"Falha ao inserir"}');
				}				
			}elseif($newcod == 0){
				++$erro;				
				die('{"result":"error", "msg":"Não há mais codigos"}');
			}
			++$i;
		}
		
	}	
	die(($erro == 0 ? '{"result":"success"}' : '{"result":"error"}'));	
}else{
	die('{"result":"error", "msg":"Isso não foi um post"}');
}
?>