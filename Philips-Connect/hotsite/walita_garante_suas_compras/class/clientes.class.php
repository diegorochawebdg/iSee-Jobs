<?php
class Clientes{	
	private $db; //Database class
	public $insert_id;// ultimo id inserido
	public $total;// total de linhas de uma selecao
	private $table 	= 'clientes';
	private $key 	= 'ISPHILIPSEE'; //Chave para criptografia de dados do cliente
	private $cliente_id,$nome,$cpf,$rg,$cep,$end,$nr_end,$comp_end,$cidade_end,$uf_end,$telefone,$email,$dt_cad,$senha,$sexo,$nascimento,$news;	
	private $arr_data = array();
	
	
	// Geters and Seters
	public function setId($cliente_id){
		$this->cliente_id = $cliente_id;
	}
	public function getId(){
		return $this->cliente_id;
	}

	public function setNome($nome){
		$this->nome = $nome;
	}
	public function getNome(){
		return $this->nome;
	}			

	public function setCpf($cpf){
		$this->cpf = $cpf;
	}
	public function getCpf(){
		return $this->cpf;
	}

	public function setRg($rg){
		$this->rg = $rg;
	}
	public function getRg(){
		return $this->rg;
	}

	public function setCep($cep){
		$this->cep = $cep;
	}
	public function getCep(){
		return $this->cep;
	}

	public function setEndereco($end){
		$this->end = $end;
	}
	public function getEndereco(){
		return $this->end;
	}
	public function setNrEnd($nr_end){
		$this->nr_end = $nr_end;
	}
	public function getNrEnd(){
		return $this->nr_end;
	}

	public function setComplemento($comp_end){
		$this->comp_end = $comp_end;
	}
	public function getComplemento(){
		return $this->comp_end;
	}

	public function setCidade($cidade_end){
		$this->cidade_end = $cidade_end;
	}
	public function getCidade(){
		return $this->cidade_end;
	}

	public function setUf($uf_end){
		$this->uf_end = $uf_end;
	}
	public function getUf(){
		return $this->uf_end;
	}
	
	public function setTelefone($telefone){
		$this->telefone = $telefone;
	}
	public function getTelefone(){
		return $this->telefone;
	}

	public function setEmail($email){
		$this->email = $email;
	}
	public function getEmail(){
		return $this->email;
	}

	public function setDtCad($dt_cad){
		$this->dt_cad = $dt_cad;
	}
	public function getDtCad(){
		return $this->dt_cad;
	} 	

	public function setSenha($senha){
		$this->senha = $senha;
	}
	public function getSenha(){
		return $this->senha;
	}

	public function setSexo($sexo){
		$this->sexo = $sexo;
	}
	public function getSexo(){
		return $this->sexo;
	} 
	public function setNascimento($nascimento){
		$this->nascimento = $nascimento;
	}
	public function getNascimento(){
		return $this->nascimento;
	}	

	public function setNews($news){
		$this->news = $news;
	}
	public function getNews(){
		return $this->news;
	}	

	public function __construct(){
		$this->db = new Database;
	}
	
	
	//Seta um array com valore e coluna do banco para relaizar o insert
	//Campos do array devem ter os mesmos nomes do banco de dados
	private function setParams(){
		if(isset($this->nome))    		$this->arr_data['nome'] 		= $this->nome;
		if(isset($this->cpf))    		$this->arr_data['cpf'] 			= $this->cpf;
		if(isset($this->rg))    		$this->arr_data['rg'] 			= $this->rg;	
		if(isset($this->end))    		$this->arr_data['end'] 			= $this->end;
		if(isset($this->cep))    		$this->arr_data['cep'] 			= $this->cep;
		if(isset($this->nr_end))    	$this->arr_data['nr_end'] 		= $this->nr_end;
		if(isset($this->comp_end))    	$this->arr_data['comp_end'] 	= $this->comp_end;
		if(isset($this->cidade_end))    $this->arr_data['cidade_end'] 	= $this->cidade_end;
		if(isset($this->uf_end))    	$this->arr_data['uf_end'] 		= $this->uf_end;
		if(isset($this->telefone))    	$this->arr_data['telefone'] 	= $this->telefone;
		if(isset($this->email))    		$this->arr_data['email'] 		= $this->email;
		if(isset($this->senha))    		$this->arr_data['senha'] 		= $this->senha;
		if(isset($this->sexo))    		$this->arr_data['sexo'] 		= $this->sexo;
		if(isset($this->nascimento))    $this->arr_data['data_nasc'] 	= $this->nascimento;
		if(isset($this->news))    		$this->arr_data['news'] 		= $this->news;	
		//if(isset($this->dt_cad))   		$this->arr_data['dt_cad'] 		= $this->dt_cad;
	}
	
	public function encryptField($field){
		return 'AES_ENCRYPT("'.$field.'","'.$this->key.'")';
	}
	
	public function setSession($dados){// Seta as variaveis da sessão
		$_SESSION[SESSION_ID]['user'] = $dados;
	}//setSession	
	
	public function login(){ 	
		if(isset($this->cpf) && isset($this->senha)){
			$fields 	= array('nome','email','id');
			//$where  	= array('cpf = AES_ENCRYPT("'.$this->cpf.'","'.$this->key.'")',  'senha = "'.trim(md5($this->senha)).'"');			
			$where  	= array('cpf = '.$this->encryptField($this->cpf),  'senha = "'.trim(md5($this->senha)).'"');			
			$user 		= $this->selecionar($where,$fields);			
			if($this->total == 1){
				$this->setSession($user);
				return true;
			}else{
				return false;
			}
			//return ($this->total == 1 ? true : false);			
		}
	}//Login	
	
	public function isSetUser(){// VERIFICA SE A SESSÃO DO USAURIO ESTÁ SETADA
		$s = $_SESSION[SESSION_ID]['user'];
		return ( isset($s['email']) && isset($s['nome']) && isset($s['id']) ? true : false );
	}

	public function unsetUser(){// Limpa Sessão
		unset($_SESSION[SESSION_ID]['user']);		
	}//unsetUser
	
	public function getUserSession(){
		return $_SESSION[SESSION_ID]['user'];
	}

	//Selecionar um cliente; // Sem criptografia;
	public function selecionar($where,$fields = '*'){
		$where 		 = (is_array($where) ? $where : array($where));
		$data 		 = $this->db->select($this->table,$where,$fields);
		$this->total = $this->db->qrcount;
		return $data[0];
	}

	//Lustar clientes; // Sem criptografia;
	public function listar($where = null,  $fields = '*'){
		if($where != null) $where = (is_array($where) ? $where : array($where));
		$data 		 = $this->db->select($this->table,$where,$fields);
		$this->total = $this->db->qrcount;
		return $data;
	}//Listar
	
	public function inserir(){
		$this->setParams();
		$this->arr_data['dt_cad'] = '"'.$this->db->now().'"';
		$return = ($this->db->insert($this->table, $this->arr_data) ? true : false);		
		$this->insert_id = $this->db->insertId;	
		return $return;				
	}// Inserir
		
	
	public function atualizar(){
		if(isset($this->cliente_id)){
			$this->setParams();	
			return ($this->db->update($this->table, $this->arr_data, array('id = ' . $this->cliente_id)) ? true : false);
		}
	}//Atualizar	
	
	
	//Excluir cliente
	public function excluir(){		
		if(isset($this->banner_id)){			
			return ($this->db->delete($this->table, array('id = ' . $this->cliente_id)) ? true : false);		
		}
	}
	//Retorna chave de cripitografia;
	public function getKey(){
		return $this->key;
	}
	
	public function logout(){
		$this->unsetUser();
		return true;
	}
	
	public function getUserData(){
		$fields		= array('email','nome');
		$fields_enc	= $this->arrayDecrypt(array('cpf','rg','cep','end','nr_end','comp_end','cidade_end','uf_end','telefone'));
		$fields		= array_merge($fields,$fields_enc);
		$where  	= array('id = ' . $this->cliente_id);
		$user 		= $this->selecionar($where,$fields);	
		return ($this->total == 1 ? $user : false);
	}



	public function getAllUsersData(){
		$fields		= array('id','email','nome','dt_cad');
		$fields_enc	= $this->arrayDecrypt(array('cpf','rg','cep','end','nr_end','comp_end','cidade_end','uf_end','telefone'));
		$fields		= array_merge($fields,$fields_enc);
		$users 		= $this->listar(null,$fields);
		return ($this->total > 0 ? $users : false);
	}

	
	
	public function arrayDecrypt($array){
		foreach ($array as $a){
			$new_arr[] = 'AES_DECRYPT('.$a.',"'.$this->key.'") AS '.$a;
		}
		return $new_arr;
	}
	
	public function exists( $field, $value , $encrypt =  false){
		if($encrypt == true){
			$value = $this->encryptField($value);
		}		
		$this->selecionar(array( $field . ' = ' . $value));
		return ($this->total == 1 ? true : false);
	}
	
	public function geraSenha($length) {
		$vowels = "aeiouyAEIOUY";
		$consonants = "bdghjmnpqrstvzBDGHJLMNPQRSTVWXZ0123456789";
		$password = "";
		$alt = time() % 2;
		for ($i = 0; $i < $length; $i++) {
			if ($alt == 1) {
				$password .= $consonants[(rand() % strlen($consonants))];
			   	$alt = 0;
			}else{
				$password .= $vowels[(rand() % strlen($vowels))];
			   	$alt = 1;
			}
		 }
  		return $password;
	} 
	
	
	
	public function cpfValido($cpf){	// Verifiva se o número digitado contém todos os digitos
		$cpf = str_pad(preg_replace('/[^0-9]/', '', $cpf), 11, '0', STR_PAD_LEFT);
		// Verifica se nenhuma das sequências abaixo foi digitada, caso seja, retorna falso
		if (strlen($cpf) != 11 || $cpf == '00000000000' || $cpf == '11111111111' || $cpf == '22222222222' || $cpf == '33333333333' || $cpf == '44444444444' || $cpf == '55555555555' || $cpf == '66666666666' || $cpf == '77777777777' || $cpf == '88888888888' || $cpf == '99999999999'){
			return false;
		}else{   // Calcula os números para verificar se o CPF é verdadeiro
			for ($t = 9; $t < 11; $t++) {
				for ($d = 0, $c = 0; $c < $t; $c++) {
					$d += $cpf{$c} * (($t + 1) - $c);
				}
	 			$d = ((10 * $d) % 11) % 10;
	 			if ($cpf{$c} != $d) {
					return false;
				}
			}	 
			return true;
		}
	}	
}
?>