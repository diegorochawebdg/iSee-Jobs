<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	//Class includes
	include ('../config.php');
	
	//Set vars
	$cliente->setId(USER_ID);
	$cliente->setNome('"'.$_POST['nome'].'"');	
	//$cliente->setCpf($cliente->encryptField($_POST['cpf']));
	$cliente->setRg($cliente->encryptField($_POST['rg']));
	$cliente->setCep($cliente->encryptField($_POST['cep']));
	$cliente->setEndereco($cliente->encryptField($_POST['endereco']));
	$cliente->setNrEnd($cliente->encryptField($_POST['nr_endereco']));
	$cliente->setComplemento($cliente->encryptField($_POST['complemento']));
	$cliente->setCidade($cliente->encryptField($_POST['cidade']));
	$cliente->setUf($cliente->encryptField($_POST['uf']));
	$cliente->setTelefone($cliente->encryptField($_POST['telefone']));
	$cliente->setEmail('"'.$_POST['email'].'"');	
	$erro = 0;
	
	if(empty($_POST['nome'])){
		++$erro;
		$arr_errors[] = 'O campo nome é obrigatório';
	}

	if(empty($_POST['cpf'])){
		++$erro;
		$arr_errors[] = 'O campo cpf é obrigatório';
	}

	if(empty($_POST['rg'])){
		++$erro;
		$arr_errors[] = 'O campo rg é obrigatório';
	}

	if(empty($_POST['cep'])){
		++$erro;
		$arr_errors[] = 'O campo cep é obrigatório';
	}

	if(empty($_POST['endereco'])){
		++$erro;
		$arr_errors[] = 'O campo endereço é obrigatório';
	}
	
	if(empty($_POST['nr_endereco'])){
		++$erro;
		$arr_errors[] = 'O campo número é obrigatório';
	}
	
	if(empty($_POST['cidade'])){
		++$erro;
		$arr_errors[] = 'O campo cidade é obrigatório';
	}
	
	if(empty($_POST['telefone'])){
		++$erro;
		$arr_errors[] = 'O campo telefone é obrigatório';
	}	
	
	if(empty($_POST['email'])){
		++$erro;
		$arr_errors[] = 'O campo email é obrigatório';
	}
		
	if($cliente->exists('cpf',$_POST['cpf'], true)){
		 ++$erro;		 
		$arr_errors[] = 'Este cpf já foi cadastrado';
	}
	if($cliente->exists('rg',$_POST['rg'], true)){
		++$erro;
		$arr_errors[] = 'Este rg já foi cadastrado';
	}
	if($cliente->exists('email',$cliente->getEmail(), false)){
		++$erro;
		$arr_errors[] = 'Este email já foi cadastrado';
	}
	
	if($erro > 0) die('{"result":"error","msg":"Alguns campos contém erros","errors":' . json_encode($arr_errors) . '}');
	
	if($cliente->atualizar()){
		$user['email'] 	= $_POST['email'];
		$user['nome'] 	= $_POST['nome'];
		$user['id'] 	= USER_ID;
		$cliente->setSession($user);	
		die('{"result":"success","msg":"Dados alterados com sucesso"}');	
	}else{
		die('{"result":"error","msg":"Houve uma falha ao atualizar o cadastro"}');
	}
}

?>