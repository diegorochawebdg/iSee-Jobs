<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	//Class includes
	include ('config.php');	
	if(empty($_POST['esqueci-cpf']) || $_POST['esqueci-cpf'] == '') die('{"result":"error","msg":"Campo cpf não pode ficar vazio"}');
	if($cliente->exists('cpf',$_POST['esqueci-cpf'],true)){
		$c 			= $cliente->selecionar(array('cpf = '.$cliente->encryptField($_POST['esqueci-cpf'])),array('*'));
		$cliente->setId($c['id']); 
 		$usuario 	= $cliente->getUserData();			
		$senha 		= $cliente->geraSenha(8);	
		$cliente->setSenha('"' . md5($senha) . '"');
		if($cliente->atualizar()){
			include ('emailrecsenha.php');
			die('{"result":"success","msg":"Senha resetada"}');	
		}else{
			die('{"result":"error","msg":"Houve uma falha ao enviar senha"}');
		}
	}else{
		die('{"result":"error","msg":"Cpf inexistente!"}');
	}	
}
?>