<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	//Class includes
	include ('../config.php');	
	if(empty($_POST['email']) || $_POST['email'] == '') die('{"result":"error","msg":"Campo email não pode ficar vazio"}');
	if($cliente->exists('email',$_POST['email'])){
		$senha = $cliente->geraSenha(8);	
		$cliente->setSenha('"' . md5($senha) . '"');
		if($cliente->atualizar()){
			include ('emailrecsenha.php');
			die('{"result":"success","msg":"Senha resetada"}');	
		}else{
			die('{"result":"error","msg":"Houve uma falha ao enviar senha"}');
		}
	}else{
		die('{"result":"error","msg":"Email inexistente!"}');
	}	
}
?>