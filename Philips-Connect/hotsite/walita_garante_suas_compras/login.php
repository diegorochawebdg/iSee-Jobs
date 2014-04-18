<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){	
	if(empty($_POST['cpf']) || empty($_POST['senha'])){
		die('{"result":"error","msg":"Preencha todos os campos"}');
	}
	include 'config.php';
	$cliente->setCpf($_POST['cpf']);
	$cliente->setSenha($_POST['senha']);
	if($cliente->Login() == true){
		die('{"result":"success","redirect":"'.SITE_URL .'meus_numeros"}');			
	}else{
		die('{"result":"error","msg":"Dados Incorretos!"}');
	}
}
?>