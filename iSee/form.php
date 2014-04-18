<?php
    $nome = $_POST['nome'];
    $email = $_POST['email'];
	$pais = $_POST['pais'];
	$tel = $_POST['tel'];
    $mensagem = $_POST['mensagem'];
    $from = 'De: iSee Site'; 
    $to = 'diego.webdg@gmail.com'; 
    $subject = 'Hello';
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
				
    if ($_POST['submit']) {				 
        if (mail ($to, $subject, $body, $from)) { 
	    echo '<p>Mensagem enviada com sucesso!</p>';
		} 
		else { 
	    	echo '<p>Algo deu errado, tente novamente!</p>'; 
		} 
    } 
?>