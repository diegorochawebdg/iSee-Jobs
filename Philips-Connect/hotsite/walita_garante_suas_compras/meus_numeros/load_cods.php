<?php
include('../config.php');
//Seta id do usuario
$cliente->setId(USER_ID); 
//Testo se o usuario está logado
if($cliente->isSetUser()){
	//Obtem os codigos do usuario
	$codigos = $nf->getUserCods();
	//Printo os codigos
	if(!empty($codigos)){
		foreach ($codigos as $codigo) echo '<span>'.$nf->formatCod($codigo,0,5).'</span>';
	}	
	echo '<div class="clear"></div>';
}
?>