<?php
$novoarquivo = fopen("teste.txt", "a+");

fwrite($novoarquivo, "Este Ž um novo arquivo.");
fclose($novoarquivo);
echo "Tudo conclu’do!";
?>