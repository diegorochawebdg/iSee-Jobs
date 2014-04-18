<?php	
	//require_once("class.phpmailer.php"); 
	//$texto="<br>Olá $nome, Sua nova senha é: <strong>".$newpw."</strong>";					
	$mail = new PHPMailer();
	// Define os dados do servidor e tipo de conexão							
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=							
//	$mail->IsSMTP(); // Define que a mensagem será SMTP
//	$mail->Host = "mail.isee.com.br"; // Endereço do servidor SMTP
//	$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)							
//	$mail->Username = 'guiadotrade@isee.com.br'; // Usuário do servidor SMTP
//	$mail->Password = 'guia1q2w3e'; // Senha do servidor SMTP							
	
	$mail->IsSMTP(); // Define que a mensagem será SMTP
	$mail->Host 	= $host_smtp; // Endereço do servidor SMTP
	$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)							
	$mail->Username = $user_smtp; // Usuário do servidor SMTP
	$mail->Password = $pass_smtp; // Senha do servidor SMTP
	
	
	/*// Define o remetente						
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=							
	$mail->From = "thomas_piedade@yahoo.com.br"; // Seu e-mail							
	$mail->FromName = "iSee Thomas"; // Seu nome							
	
	// Define os destinatário(s)						
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=							
	$mail->AddAddress($email, $nome);							
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
	$mail->Body = $texto;// Corpo da mensagem							
	//$mail->AltBody = "Este é o corpo da mensagem de teste, em Texto Plano! \r\n <img src='http://blog.thiagobelem.net/wp-includes/images/smilies/icon_smile.gif' alt=':)' class='wp-smiley'>";							
	
	// Define os anexos (opcional)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=						
	//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo							
	// Envia o e-mail							
	$enviado = $mail->Send();							
	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();							
	$mail->ClearAttachments();						
	// Exibe uma mensagem de resultado*/
	
?>