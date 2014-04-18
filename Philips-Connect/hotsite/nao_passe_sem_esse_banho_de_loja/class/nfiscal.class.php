<?php
class Nfiscal {	
	private $db; //Database class
	public $insert_id;// ultimo id inserido
	public $total;// total de linhas de uma selecao
	private $table = 'nfiscal'; // Tabela banco de dados
	private $id_nf,$cod_usr,$nr_nf,$cod_nf,$dt_cad;	
	private $arr_data = array();
	
	public function setId($id_nf){
		$this->id_nf = $id_nf;
	}
	public function getId(){
		return $this->id_nf;
	}

	public function setCod($cod_nf){
		$this->cod_nf = $cod_nf;
	}
	public function getCod(){
		return $this->cod_nf;
	}			

	public function setNf($nr_nf){
		$this->nr_nf = $nr_nf;
	}
	public function getNf(){
		return $this->nr_nf;
	}

	public function setDtCad($dt_cad){
		$this->dt_cad = $dt_cad;
	}
	public function getDtCad(){
		return $this->dt_cad;
	}	

	public function setUser($cod_usr){
		$this->cod_usr = $cod_usr;
	}
	public function getUser(){
		return $this->cod_usr;
	}	
	
	
	public function __construct(){
		$this->db = new Database;
	}

 	
	private function setParams(){
		if(isset($this->nr_nf))    		$this->arr_data['nr_nf'] 	= '"'.$this->nr_nf.'"';
		if(isset($this->cod_usr))    	$this->arr_data['cod_usr'] 	= '"'.$this->cod_usr.'"';
		if(isset($this->cod_nf))    	$this->arr_data['cod_nf'] 	= '"'.$this->cod_nf.'"';
		//if(isset($this->dt_cad))   		$this->arr_data['dt_cad'] 	= '"'.$this->dt_cad.'"';		
	}	
	public function selecionar($where){
		$where 		 = (is_array($where) ? $where : array($where));
		$data 		 = $this->db->select($this->table,$where);
		$this->total = $this->db->qrcount;
		return $data[0];
	}//Selecionar

	public function listar($where = null,  $fields = '*'){
		if($where != null) $where = (is_array($where) ? $where : array($where));
		$data 		 = $this->db->select($this->table,$where,$fields);
		$this->total = $this->db->qrcount;
		return $data;
	}//Listar
	
	public function inserir(){
		$this->setParams();
		$this->arr_data['dt_cad'] 	= '"'.$this->db->now().'"';	
		$return = ($this->db->insert($this->table, $this->arr_data) ? true : false);		
		$this->insert_id = $this->db->insertId;	
		return $return;				
	}// Inserir
	
	public function atualizar(){
		if(isset($this->banner_id)){
			$this->setParams();	
			return ($this->db->update($this->table, $this->arr_data, array('cod = ' . $this->banner_id)) ? true : false);
		}
	}//Atualizar	
	
	public function Excluir(){		
		if(isset($this->banner_id)){			
			return ($this->db->delete($this->table, array('cod = ' . $this->banner_id)) ? true : false);		
		}
	}//Excluir
	
	
	//Pega todos os codigos inseridos no banco
	public function getAllCods(){
		$arr_cods = $this->db->select($this->table,null,array('cod_nf'));
		if($this->db->qrcount <= 0) return false;
		$cods = array();
		foreach ($arr_cods as $c) $cods[] = $c['cod_nf'];		
		return $cods; 
	}

	//Pega todos os codigos inseridos no banco
	public function getUserCods(){
		$arr_cods = $this->db->select($this->table,array('cod_usr = ' . USER_ID),array('cod_nf'));
		if($this->db->qrcount <= 0) return false;
		$cods = array();
		foreach ($arr_cods as $c) $cods[] = $c['cod_nf'];		
		return $cods; 
	}
	
	
	
	/** Gera um codigo diferente dos que ja foram inseridos
	 * @param $min Numero minimo onde começam a ser gerados os codigos aleatorios
	 * @param $max Numero maximo onde dos codigos a serem gerados
	 * @param $leftchar caracter usado para 
	 */
	public function generateCod($min,$max,$leftchar,$stringsize){
		$random 	= rand($min,$max);
		$result 	= str_pad($random, $stringsize, $leftchar, STR_PAD_LEFT);	
		$arr_itens 	= $this->getAllCods();
		if($arr_itens === false) return $result;
		if(array_search($result,$arr_itens) !== false){
			return $this->generateCod($min,$max,$leftchar,$stringsize);				
		}else{			
			return $result;
		}			
	}	
}
?>