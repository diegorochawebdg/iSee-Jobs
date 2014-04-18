<?php
session_start();
define('SESSION_ID',session_id());	
define('ROOT_DIR'  ,dirname(__FILE__).'/');
define('CLASS_DIR' ,ROOT_DIR . 'class/');

//Class includes
include (CLASS_DIR . 'database.class.php');
include (CLASS_DIR . 'clientes.class.php');
include (CLASS_DIR . 'nfiscal.class.php');

//Class Instances
$cliente = new Clientes;
$nf 	 = new Nfiscal;


if($cliente->isSetUser()){
	define('USER_NAME'	,$_SESSION[SESSION_ID]['user']['nome']);
	define('USER_EMAIL'	,$_SESSION[SESSION_ID]['user']['email']);
	define('USER_IP'	,$_SERVER['REMOTE_ADDR']);
	define('USER_ID'	,$_SESSION[SESSION_ID]['user']['id']);	
}else{
	$cliente->unsetUser();
}
?>