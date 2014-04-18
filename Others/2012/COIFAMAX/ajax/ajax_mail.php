<?php
	header("Content-Type: text/html; charset=ISO-8859-1",true);
	
	require_once("../phpmailer/class.phpmailer.php");

	$nome  = utf8_decode($_POST['nome']);
	$email = utf8_decode($_POST[ 'email']);
	$telefone = utf8_decode($_POST['ddd'] . "-" . $_POST["telefone"]);
	$assunto = utf8_decode($_POST['assunto']);
	$mensagem = utf8_decode($_POST['mensagem']);
								

	// Inicia a classe PHPMailer
	$mail = new PHPMailer();
	// Define os dados do servidor e tipo de conexão

	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

	$mail->IsSMTP(); // Define que a mensagem será SMTP
	$mail->Host = "mail.isee.com.br"; // Endereço do servidor SMTP
	$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)							
	$mail->Username = 'contato@coifamax.com.br'; // Usuário do servidor SMTP
	$mail->Password = 'coifa@1q2w3e'; // Senha do servidor SMTP
	
	
	// Define o remetente
	
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	
	$mail->From = "contato@coifamax.com.br"; // Seu e-mail
	$mail->FromName = "Website CoifaMax"; // Seu nome
	 
	
	// Define os destinatário(s)
	
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	
	
	$mail->AddAddress('contato.site@coifamax.com.br', ' Coifamax');
	//$mail->AddAddress( 'operacional@mattar.com.br', 'Operacional - Mattar');
	//$mail->AddAddress($email, $nome);
	
	//$mail->AddAddress('ciclano@site.net');
	
	//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia
	
	//$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); // Cópia Oculta
	
	// Define os dados técnicos da Mensagem
	
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	
	$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
	
	$mail->CharSet = 'iso-8859-1'; // Charset da mensagem (opcional)
	
	// Define a mensagem (Texto e Assunto)
	
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	
	$mail->Subject  = $assunto; // Assunto da mensagem
	
	$mail->Body = "Contato através do site coifamax.com.br: <br />";
	
	$mail->Body .= "Nome: ".$nome."<br>";
	$mail->Body .= "E-mail: ".$email."<br>";
	$mail->Body .= "Telefone: ".$telefone."<br>";
	$mail->Body .= "Assunto: ".$assunto."<br>";
	$mail->Body .= "Mensagem: ".$mensagem."<br><br><br>";
	
	//$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n <img src='http://blog.thiagobelem.net/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley'>";
	 
	
	// Define os anexos (opcional)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	
	//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo
	
	 
	
	// Envia o e-mail
	
	$enviado = $mail->Send();
	
	 
	
	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();
	
	$mail->ClearAttachments();
	
	 
	
	// Exibe uma mensagem de resultado
	
	/*if($enviado){
		echo "success";
	}else{
		echo "erro";
	}*/
	echo "Mensagem enviada com sucesso!";
?>				