<?php
	include_once ('../phpmailer/class.phpmailer.php');	
	$host_smtp			= 'mail.isee.com.br';
	$user_smtp			= 'site@isee.com.br';
	$pass_smtp			= 'is@1q2w3e';
	
	$remetente_nome 	= 'Philips Walita';
	$remetente_email 	= 'site@isee.com.br';

	$destinatario_nome 	= $_POST['nome'];
	$destinatario_email = $_POST['email'];
	
	$assunto 			= utf8_decode('Seus Dados - Promoção Não passe sem esse banho de loja');
	
	//$texto 				=  'Nome:' . $_POST['nome'] . '<br>Email:' . $_POST['email'] . '<br>Senha:' . $senha;
	
	
	$texto				= utf8_decode('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<style>

*{font-family:Arial, Helvetica, sans-serif; font-size:18px; color:#686868;}
img{display:block; border:0;}
body{background-color:#F1EEEE; margin:0; padding:0;}
.faixa{background-image:url(http://www.banhodelojaphilipswalita.com.br/email-mkt/images/faixa.png); background-repeat:repeat-x; height:6px; width:100%;}

</style>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Promoção Não passe sem esse banho de loja</title>
</head>

<body>
<div class="container">
	<div class="faixa"></div>
    <table width="605" cellpadding="0" cellspacing="0" border="0" align="center">
    	<tr>
        	<td>
                <img src="http://www.banhodelojaphilipswalita.com.br/email-mkt/images/promocao-nao-passe-sem-esse-banho-de-loja.jpg" alt="Promoção - Não passe sem esse banho de loja" width="604" height="208" title="Promoção - Não passe sem esse banho de loja" />
                <br /><br />
            </td>
        </tr>
        <tr>
        	<td>
            	<p>Prezado(a) <strong>'.$_POST['nome'].',</strong><br /><br />Seu cadastro foi efetuado com sucesso!</p>
                <p>Agora você poderá acessar sua área de cadastro no site da <strong>promoção Não Passe Sem Esse Banho de Loja da Philips Walita</strong> e conferir seu número da sorte para concorrer ao prêmio de 10 mil reais em um banho de loja!</p>
                <br />
                <p>Sua senha de cadastro é: <span style="color:#FFF !important; display:block; padding:2px 5px; text-align:center; font-size:24px; width:120px; background-color:#ed1c24; display:inline-block; margin-left:25px;">'.$senha.'</span></p><br />
                
                <p>Para acessar, basta clicar no link da promoção e digitar seu CPF e sua senha de cadastro.</p>
            </td>
        </tr>
        <tr>
        	<td>
            	<center><a href="http://www.banhodelojaphilipswalita.com.br/participe/" target="_blank" title="Ir para o site"><img src="http://www.banhodelojaphilipswalita.com.br/email-mkt/images/ir-para-o-site.png" width="205" height="42" alt="Ir para o site" title="ir para o site" /></a></center>
                <br /><br /><br />
            </td>
        </tr>
        <tr>
        	<td>
            	<img src="http://www.banhodelojaphilipswalita.com.br/email-mkt/images/certificado-philips-walita.png" alt="Certificado de autorização | Philips Walita" width="604" height="37" title="Certificado de autorização | Philips Walita" />
                <br /><br />
            </td>
        </tr>
    </table>
</div>
</body>
</html>
');
	
	
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
	$mail->Body 	= $texto;// Corpo da mensagem		
	
		// Envia o e-mail							
	$enviado = $mail->Send();							
	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();							
	$mail->ClearAttachments();						
	// Exibe uma mensagem de resultado		
	
	
	//$result = ($enviado == true ? '{"result":"success","msg":"mensagem enviada com sucesso"}' : '{"result":"error","msg":"Houve um erro! A mensagem não foi enviada. '.$mail->ErroMSG.'"}');
	
	//die($result);

?>