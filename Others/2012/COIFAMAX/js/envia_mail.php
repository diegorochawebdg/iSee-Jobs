<?php
/*
* Configura��es do formul�rio de Contato
* Altere a variavel $mail_destino para o seu email
* 
*/

if($_SERVER["REQUEST_METHOD"] == "POST") { 
	
	$nome         = $_POST['name'];
	$email        = $_POST['email'];
	$mensagem 	  = $_POST['message'];
	$remetente    = $_POST['email'];
	$assunto 	  = $_POST['subject'];
	
	//Seu email, para onde irao as informa��es do formul�rio
	$mail_destino		=  "gustavo@isee.com.br";
	//Mensagem de cabe�alho do email
	$mail_header		= "Novo contato pelo site <b>www.mattar.com.br<br />
						   Nome:</b> $nome<br />
						   <b>E-mail:</b> $email<br />
						   <b>Mensagem:</b> $mensagem";

	//Mensagem para o email de resposta
	/*$msg_reply	= "<font face=verdana size=2>
					<br />
					     <b>
						    Ol� $nome 
						  </b>
					<br />
					Seu e-mail foi enviado com sucesso, em breve entrarei em contato.<br />
					Gustavo Teider <br />
					Curitiba - PR<br />
					www.gugateider.com
					</font>";*/
					
	if (  mail("$mail_destino","$assunto","$mail_header","From: $remetente\nContent-type: text/html\n"))
		{
		//Imprimindo confirma��o de envio
		$header = "Content-Type: text/html; charset=us-ascii";
		//Enviando mensagem de confirma��o para o email do internauta
		//mail ($email, "Contato pelo site gugateider.com",$msg_reply, "From: $mail_destino\nContent-type: text/html\n");
		// imprimindo pro flash
		echo "success";
		
		}	
}		

?>