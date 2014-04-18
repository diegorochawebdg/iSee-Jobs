<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
	//Class includes
	include ('../config.php');
	//Validations
	$erro = 0;	
	if(empty($_POST['nome'])){
		++$erro;
		$arr_errors[] = 'O campo nome é obrigatório';
	}
	if(!$cliente->cpfValido($_POST['cpf'])){
		++$erro;
		$arr_errors[] = 'Este cpf não é válido';
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
		$arr_errors[] = 'Este cpf já foi cadastrado, verifique o email de confirmação enviado';
	}
	if($cliente->exists('rg',$_POST['rg'], true)){
		++$erro;
		$arr_errors[] = 'Este rg já foi cadastrado';
	}
	if($cliente->exists('email',$cliente->getEmail(), false)){
		++$erro;
		$arr_errors[] = 'Este email já foi cadastrado, verifique o email de confirmação enviado';
	}
	if(!$nf->cnpjValido($_POST['cnpj_nf'])){
		++$erro;
		$arr_errors[] = 'Este cnpj não é válido';
	}	
	if($erro > 0) die('{"result":"error","msg":"Alguns campos contém erros","errors":' . json_encode($arr_errors) . '}');	
		
	//Set vars
	$cliente->setNome('"'.$_POST['nome'].'"');	
	$cliente->setCpf($cliente->encryptField($_POST['cpf']));
	$cliente->setRg($cliente->encryptField($_POST['rg']));
	$cliente->setCep($cliente->encryptField($_POST['cep']));
	$cliente->setEndereco($cliente->encryptField($_POST['endereco']));
	$cliente->setNrEnd($cliente->encryptField($_POST['nr_endereco']));
	$cliente->setComplemento($cliente->encryptField($_POST['complemento']));
	$cliente->setCidade($cliente->encryptField($_POST['cidade']));
	$cliente->setUf($cliente->encryptField($_POST['uf']));
	$cliente->setTelefone($cliente->encryptField($_POST['telefone']));
	$cliente->setEmail('"'.$_POST['email'].'"');	
	$senha = $cliente->geraSenha(8);	
	$cliente->setSenha('"' . md5($senha) . '"');	
	if($cliente->inserir()){
		//Dados nota fiscal	
		if($nf->exists($_POST['nr_nf'],$_POST['cnpj_nf'])){
			die('{"result":"success","msg":"Cadastro efetuado com sucesso","redirect":"'.SITE_URL .'meus_numeros","msg2":"*Seu cadastro foi efetuado, porém a nota fiscal não foi cadastrada porque já estava na nossa base de dados.","style":"color:#9B0000"}');
		}else{
			$nf->setNf($_POST['nr_nf']);
			$nf->setCnpj($_POST['cnpj_nf']);
			$qtd_produtos = $_POST['qtd_produtos'];
			$i = 1;	
			while($i <= $qtd_produtos){
				$newcod = $nf->GenerateCod(0,99999,0,5);
				if($newcod > 0){		
					$nf->setCod($newcod);
					$nf->setUser($cliente->insert_id);
					$nf->inserir();				
				}elseif($newcod == 0){
					die('{"result":"error","msg":"Não foi possivel adicionar o novo código"}');	
				}
				++$i;
			}		
			include('emailsenha.php');	 
			$user['email'] 	= $_POST['email'];
			$user['nome'] 	= $_POST['nome'];
			$user['id'] 	= $cliente->insert_id;
			$cliente->setSession($user);	
			die('{"result":"success","msg":"Cadastro efetuado com sucesso","redirect":"'.SITE_URL .'meus_numeros","msg2":"*Você receberá sua senha no seu e-mail de cadastro","style":"color:#00B2B1"}');	
		}
	}else{
		die('{"result":"error","msg":"Houve uma falha ao inserir o cadastro"}');
	}
}
/*require ROOT_DIR  . 'facebook/facebook.php';

// Create our Application instance (replace this with your appId and secret).
$facebook = new Facebook(array(
  'appId'  => '602685646435981',
  'secret' => 'd2c73c9fafaf3e6e9f6d2d2556d43b67',
));

// Get User ID
$user = $facebook->getUser();


$params = array(
  'scope' => 'user_status,publish_stream,user_photos',
  'redirect_uri' => SITE_URL . 'redirect-facebook.php'
);

$facebook_loginUrl = $facebook->getLoginUrl($params);


die('{"result":"success","msg":"Cadastro efetuado com sucesso","redirect":"'.SITE_URL .'meus_numeros","facebook_url":"'.$facebook_loginUrl.'"}');
*/
//die('{"result":"success","msg":"Cadastro efetuado com sucesso","redirect":"'.SITE_URL .'meus_numeros","msg2":"*Seu cadastro foi efetuado, porém a nota fiscal não foi cadastrada porque já estava na nossa base de dados. Tente novamente.","style":"color:#9B0000"}');
?>