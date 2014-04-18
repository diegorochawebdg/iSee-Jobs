<?php
include ('../config.php');
if($cliente->logout()){
	header('Location: index.php');
}
?>
Saindo...