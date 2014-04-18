<?php 
class Database extends PDO{ //CLASSE PARA ACESSO AO BANCO DE DADOS	
	public 		$conexao, $qrcount,	$insertId, $error, $querydata, $query;	
	private 	$dbhost,$dbname,$dbuser,$dbpass;
	protected 	$dbcon;	

	public function __construct(){						
//		$this->dbhost = '186.202.152.99';
//		$this->dbname = 'iseestart';
//		$this->dbuser = 'iseestart';
//		$this->dbpass = 'is@1q2w3e';		

//		$this->dbhost = 'localhost';
//		$this->dbname = 'nfiscal2';
//		$this->dbuser = 'root';
//		$this->dbpass = '123456';
		
		$this->dbhost = '177.154.147.226';
		$this->dbname = 'isee_garante';
		$this->dbuser = 'isee_garante';
		$this->dbpass = 'is@1q2w3e';		
			
		//Conecta
		$this->connect();		
	}
	
	private function connect(){
		$this->dbcon = new PDO('mysql:host='.$this->dbhost.';dbname='.$this->dbname,$this->dbuser,$this->dbpass);	
		$this->dbcon->query('SET NAMES "utf8"');
		$this->dbcon->query('SET character_set_connection=utf8');
		$this->dbcon->query('SET character_set_client=utf8');
		$this->dbcon->query('SET character_set_results=utf8');
	}	
	
	public function hostDisconnect(){// FUNÇÃO DESCONECTAR BANCO DE DADOS				
		return @mysql_close($this->conexao);			
	}
	

	public function now(){
		//YYYY-mm-dd HH:ii:ss
		return date('Y-m-d H:i:s');	
	}// now()
		
	public function execute_query(){//FUNÇÃO EXECUÇÃO DE QUERIES EM GERAL
		$this->qrcount = 0;
			unset($this->querydata);					
			if($result = $this->dbcon->query($this->query)){// executa query	
				$result->setFetchMode(PDO::FETCH_ASSOC);		
				$this->querydata = $result->fetchAll();	
				$this->qrcount 	 = count($this->querydata);
				$this->setInsertId($this->dbcon->lastInsertId());
				return true;
			}else{
				return false;
			}		
	}	
	
	
	public function insert($table, array $data, $debug = 0){
		try {
			$this->dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);					
			foreach($data as $field => $value){
				$fields[] = $field;
				$values[] = $value; 
			}			
			$fields 	= implode(', ',$fields);			
			$values 	= implode(',',$values);		
			$sql = "INSERT INTO {$table} ({$fields}) VALUES ({$values})";	
			if($debug == 1) echo $sql;		
			$sth = $this->dbcon->prepare($sql);
			foreach ($data as $f => $v){
				$sth->bindValue(':' . $f, $v);
			}
			if($sth->execute()){	
				$this->setInsertId($this->dbcon->lastInsertId());
				return true;
			}else{
				return false;
			}
		}catch(PDOException $e){
			echo $e->getMessage();
			return false;
    	}	

	}// insert 
	
	public function select($table, array $where = null, $fields = '*', array $others = null,$debug = 0){			
		$where  = ($where  != null ? ' WHERE '.implode(' AND ',$where) : '');
		$others = ($others != null ? implode(' ',$others) : '');		
		if(is_array($fields) || $fields == null){
			$fields = ($fields == null ? '*' : implode(', ', $fields));			
		}
		$sql 	= "SELECT {$fields} FROM {$table} {$where} {$others}";
		if($debug == 1) echo $sql;
		$this->qrcount = 0;
		if($result = $this->dbcon->query($sql)){// executa query	
			$result->setFetchMode(PDO::FETCH_ASSOC);
			$data = $result->fetchAll();		
			$this->qrcount = count($data);			
			return $data;		
		}else{
			return false;
		}
					
	}// slelect
	
	public function update($table, array $data, $where = '', $debug = 0){		
		if(is_array($where)){		
			$where  = ($where  != null ? ' WHERE '.implode(' AND ',$where) : '');
		}elseif($where != ''){		
			$where  = ' WHERE ' . $where;
		}		
		foreach($data as $field => $value)	$fields[] = $field . ' = ' . $value ; 				
		$sets = implode(', ',$fields);	
		$sql  = "UPDATE {$table} SET {$sets} {$where}";	
		if($debug == 1) echo $sql;
		$result = $this->dbcon->prepare($sql);
     	$result->execute();		
		return $result->rowCount() <= 0 ? false : true;	
	}// update
	
	public function delete($table, $where = '', $debug = 0){
		if(isset($where)){
			if(is_array($where)){		
				$where  = ($where  != null ? ' WHERE '.implode(' AND ',$where) : '');
			}elseif($where != ''){		
				$where  = ' WHERE ' . $where;
			}
			$sql 	= "DELETE FROM {$table} {$where}";	
			if($this->dbcon->query($sql)) return true;
		}else{
			return false;
		}
	}// delete	

	public function setInsertId($insertId) {
		$this->insertId = $insertId;
	}
	
	public function getInsertId() {
		return $this->insertId;
	}
	
	public function dbdate($date){		
		$new_date = explode('/',$date);	
		return $new_date[2].'-'.$new_date[1].'-'.$new_date[0];	
	}	
	
	public function brdate($date){		
		$new_date = explode('-', $date);	
		return $new_date[2].'/'.$new_date[1].'/'.$new_date[0];	
	}

}
?>