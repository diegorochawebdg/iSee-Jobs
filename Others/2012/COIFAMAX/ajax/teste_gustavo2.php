<?php
$novoarquivo = fopen("teste.txt", "a+");

fwrite($novoarquivo, "Este � um novo arquivo.");
fclose($novoarquivo);
echo "Tudo conclu�do!";
?>