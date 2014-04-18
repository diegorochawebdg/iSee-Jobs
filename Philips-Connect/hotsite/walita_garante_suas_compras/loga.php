<?php	
    include 'config.php';
	if(($_GET['cpf'] && $_GET['senha']) != ''){
		$cliente->setCpf($_GET['cpf']);
		$cliente->setSenha($_GET['senha']);
		if($cliente->login() == true){
			//die('{"result":"success","redirect":"'.SITE_URL .'meus_numeros"}');		
			header('Location: '.SITE_URL .'meus_numeros');	
		}else{
			die('{"result":"error","msg":"Dados Incorretos!"}');
		}
	}else{
		die('{"result":"error","msg":"Preencha todos os campos"}');
	}
