<?php 
include 'config.php';

//AAAAMMDD
$data_vigencia = '20140104';


$dia = date('d');
$mes = date('m');
$ano = date('Y');


header('Content-type: text/plain');
header('Content-Disposition: attachment; filename="MCAP_II_PAG_PPPP_'.$dia.$mes.$ano.'_01.TXT"');
$array_notas = $nf->getAllCodsData();
foreach($array_notas as $n){
	$notas[$n['cod_nf']] = $n['cod_usr'];
}


$cod_cliente = '0050';
$cod_plano 	 = '4079';
$cod_estipulante = '0000';
$nr_remessa  = '000001';
$livre = '001';
$lote_distribuicao = '001';



$vl_titulo = str_pad('054214256', 17, '0', STR_PAD_LEFT) ;



$total 	 = 99999;

$quebra_linha = "\r\n";

echo 'H' . $cod_cliente . $cod_plano . $cod_estipulante . $ano . $mes . $dia  . $ano . $nr_remessa . $quebra_linha;

$nr_sorte = 0;

while ($nr_sorte <= $total){
	echo 'D' . $ano . $mes . $lote_distribuicao . str_pad($nr_sorte, 8, '0', STR_PAD_LEFT) . $vl_titulo . $data_vigencia . str_pad($notas[$nr_sorte],25,' ',STR_PAD_RIGHT) . str_pad($nr_sorte + 1, 9 , '0', STR_PAD_LEFT) . $quebra_linha;
	++$nr_sorte;
}


echo 'T' . str_pad($total + 1, 9, '0', STR_PAD_LEFT) .  str_pad($total * $vl_titulo, 17, '0', STR_PAD_LEFT);
?>