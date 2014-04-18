<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	include '../config.php';
	if(($_POST['cpf'] && $_POST['senha']) != ''){
		$cliente->setCpf($_POST['cpf']);
		$cliente->setSenha($_POST['senha']);
		if($cliente->Login() == true){
			die('{"result":"success","redirect":"'.SITE_URL .'meus_numeros"}');			
		}else{
			die('{"result":"error","msg":"Dados Incorretos!"}');
		}
	}else{
		die('{"result":"error","msg":"Preencha todos os campos"}');
	}
}
?>