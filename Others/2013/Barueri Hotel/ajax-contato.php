<?php
if($_SERVER['REQUEST_METHOD'] == "POST"){
	
	include_once ('../phpmailer/class.phpmailer.php');

	$host_smtp			= 'mail.isee.com.br';
	$user_smtp			= 'site@isee.com.br';
	$pass_smtp			= 'is@1q2w3e';
	
	$remetente_nome 	= 'Barueri Residence';
	$remetente_email 	= 'site@isee.com.br';

	$destinatario_nome 	= 'Barueri Residence';
	$destinatario_email = 'recepcao@residencebarueri.com.br';
	
	$assunto 			= utf8_decode('Contato através do site barueriresidence.com.br');
	
	$texto 				= 'Mensagem do email<br>' . 'Nome:' . $_POST['nome'] . '<br>Email:' . $_POST['email'] . '<br>Telefone:' . $_POST['tel'] . '<br>Celular:' . $_POST['cel'] . '<br>Mensagem:' . $_POST['mensagem'];
	
	
	include_once ('../phpmailer/initmail.php');
		
	
	// Define o remetente						
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=							
	$mail->From 	= $remetente_email; 	// Seu e-mail							
	$mail->FromName = $remetente_nome; 		// Seu nome	
	
	
	// Define os destinatário(s)						
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=							
	$mail->AddAddress($destinatario_email, $destinatario_nome);		

	$mail->IsHTML(true); // Define que o e-mail será enviado como HTML							
	$mail->CharSet = 'iso-8859-1'; // Charset da mensagem (opcional)							
	// Define a mensagem (Texto e Assunto)							
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=						
	$mail->Subject  = $assunto; // Assunto da mensagem		
	
	//echo $texto ;					
	$mail->Body 	= $texto;// Corpo da mensagem		
	
		// Envia o e-mail							
	$enviado = $mail->Send();							
	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();							
	$mail->ClearAttachments();						
	// Exibe uma mensagem de resultado		
	
	
	$result = ($enviado == true ? '{"result":"success","msg":"mensagem enviada com sucesso"}' : '{"result":"error","msg":"Houve um erro! A mensagem não foi enviada. '.$mail->ErroMSG.'"}');
	
	die($result);
}
?>