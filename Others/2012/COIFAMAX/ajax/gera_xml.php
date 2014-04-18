<?php
// abre o arquivo colocando o ponteiro de escrita no final

	$tag  ="\n <cadastro> \r \n";
    $tag .= "<nome>$nome</nome> \r \n";
	$tag .= "<endereco>$endereco</endereco> \r \n";
	$tag .= "<numero>$numero</numero> \r \n";
	$tag .= "<ddd>$ddd</ddd> \r \n";
	$tag .= "<telefone>$telefone</telefone> \r \n";
	$tag .= "<marcabicicleta>$marcabicicleta</marcabicicleta> \r \n";
	$tag .= "<modelobicicleta>$modelobicicleta</modelobicicleta> \r \n";
	$tag .= "<tipopedal>$tipopedal</tipopedal> \r \n";
	$tag .= "<frequenciapedal>$frequenciapedal</frequenciapedal> \r \n";
    $tag .= "<noturno>$noturno</noturno>\r\n";
	$tag .= "<diurno>$diurno</diurno>\r\n";
	$tag .= "<favlang>$favlang</favlang>\r\n";
    $tag .= "</cadastro>\r\n";

$arquivo = fopen('cadastros.xml','r+');
if ($arquivo) {
	while(true) {
  		$linha = fgets($arquivo);
  		if ($linha==null) break;
  			// busca na linha atual o conteudo que vai ser alterado
  			if(!preg_match("<cadastros>", $linha) && !preg_match("</cadastros>", $linha)) {
   				
				if(!$arquivo[0]){
					$string .= $linha;
				}
  			} 
 		}
// move o ponteiro para o inicio pois o ftruncate() nao fara isso
rewind($arquivo);
// truca o arquivo apagando tudo dentro dele
ftruncate($arquivo, 0);
// reescreve o conteudo dentro do arquivo

$geral = '<?xml version="1.0" encoding="UTF-8"?>';
$geral .='<cadastros>';
$geral .= $tag;
$geral .= $string;
$geral .= '</cadastros>';


if (!fwrite($arquivo, $geral)) die('Não foi possível atualizar o arquivo.');
//echo 'Arquivo atualizado com sucesso';
fclose($arquivo);
}
?>