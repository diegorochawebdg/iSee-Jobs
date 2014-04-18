<?php
	include_once (ROOT_DIR . 'phpmailer/class.phpmailer.php');	
	$host_smtp			= 'mail.isee.com.br';
	$user_smtp			= 'site@isee.com.br';
	$pass_smtp			= 'is@1q2w3e';
	
	$remetente_nome 	= 'Philips Walita';
	$remetente_email 	= 'site@isee.com.br';

	$destinatario_nome 	= $usuario['nome'];
	$destinatario_email = $usuario['email'];
	
	$assunto 			= utf8_decode('Nova senha - Promoção Philips Walita garante suas compras');
	
	//$texto 				=  'Nome:' . $_POST['nome'] . '<br>Email:' . $_POST['email'] . '<br>Senha:' . $senha;
	
	
	$texto				= utf8_decode('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<meta charset="utf-8" http-equiv="content-type">
<style>
*{padding:0; }
    
</style>
<head>
<title>Promoção Philips Walita garante suas compras</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
</head>
<body bgcolor="#FFFFFF">
<!-- Save for Web Slices (email.psd) -->
<table id="Table_01" width="650" border="0" cellpadding="0" cellspacing="0" align="center">
	<tr>
		<td>
			<img style="border:none; display:block;" id="promocaox20garantax20suasx20comprasx20philipsx20walita" src="http://www.walitagarantesuascompras.com.br/email-mkt/images/promocao-garanta-suas-compras-philips-walita.jpg" width="650" height="249" alt="Promoção Philips Walita garante suas compras" title="Promoção Philips Walita garante suas compras" /></td>
	</tr>
	<tr>
		<td style="background-image:url(http://www.walitagarantesuascompras.com.br/email-mkt/images/email_02.jpg);" width="650" height="367">
            <p style="margin:0 100px 0 45px; font:18px Arial, sans-serif; color:#686868;">Prezado(a) '.$usuario['nome'].', <br><br>Recebemos sua solicitação de recuperação da senha acesso.
Abaixo segue uma nova senha:</p><br><br><br>
            <span style="color:#FFF; background-color:#ed1c24; padding:2px 10px; font-size:24px; margin:0 auto; display:table; font-family:Arial, sans-serif;">'.$senha.'</span><br><br><br>
            <p style="margin:0 100px 0 45px; font:18px Arial, sans-serif; color:#686868;">Caso você não tenha solicitado essa opção, desconsidere esta mensagem.</p>
        </td>
	</tr>
	<tr>
		<td>
			<a href="#"><img style="border:none; display:block;" id="email_03" src="http://www.walitagarantesuascompras.com.br/email-mkt/images/email_03_02.jpg" width="650" height="127" alt="" /></a>
        </td>
	</tr>
	<tr>
		<td>
			<img style="border:none; display:block;" id="email_04" src="http://www.walitagarantesuascompras.com.br/email-mkt/images/email_04.jpg" width="650" height="57" alt="" /></td>
	</tr>
</table>
<!-- End Save for Web Slices -->
</body>
</html>');
	
	
	include_once (ROOT_DIR . 'phpmailer/initmail.php');
	
	
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
	$mail->Body 	= $texto;// Corpo da mensagem		
	
	// Envia o e-mail							
	$enviado = $mail->Send();							
	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();							
	$mail->ClearAttachments();						
	// Exibe uma mensagem de resultado			
	if($enviado == false) die('{"result":"error","msg":"Houve um erro! A o email não foi enviado."}');
?>