<?php
session_start();
header("Content-Type: text/html; charset=ISO-8859-1", true);
require_once('libs/Smarty.class.php');
require_once('classes/Conexao.class.php');
require("class/class.phpmailer.php");
require_once('seguranca.php');



$smarty = new Smarty;




if($_GET['insert']=="true" || $_GET['insert']==true){

		$cliente = $_POST['cliente'];
		$produto = $_POST['produto'];
		$query_produto = mysql_query("select * from tbl_produtos where id='$produto'");
		$nome_produto = @mysql_result($query_produto,0,'produto');
		$detalhes = $_POST['detalhes'];
		$quantidade = $_POST['quantidade'];
		$valor = str_replace(',','.',str_replace('.','',$_POST['valor']));
		
		do{
		$referencia = rand(1111111111, 9999999999);
		$query_os = mysql_query("Select * from tbl_vendas where referencia = '$referencia' LIMIT 0,1");
		}while(@mysql_result($query_os, 0, 'referencia')==$referencia);
		$referencia = "CM".$referencia;


		$query = mysql_query("insert into tbl_vendas (cliente_id,produto_id,detalhes_itens,valor,status_transacao,referencia,quantidade) VALUES ('$cliente','$produto','$detalhes','$valor','Aguardando Pagamento','$referencia','$quantidade')") or die (mysql_error());

if($query){
		
		$sucesso_produtos = '<p class="gt-error" id="alert_info1" style="display:block">Pagamento Cadastrado com Sucesso</p>';
		$smarty->assign("sucesso_produtos",$sucesso_produtos);
		$query_link = mysql_query("select * from tbl_vendas where referencia='$referencia'");
		$id_venda_01 = @mysql_result($query_link,0,'id');	
		$referencia_venda = @mysql_result($query_link,0,'referencia');	

if($_POST['envia']=='on'){
			
			
$query_email = mysql_query("select * from tbl_clientes where id='$cliente'");
$nome_usuario = @mysql_result($query_email,0,'nome');			
$email_usuario = @mysql_result($query_email,0,'email');			

$mail = new PHPMailer();
$mail->IsSMTP(); 
$mail->SMTPAuth=true;
$mail->Host="smtp.mamatadodia.com.br";
$mail->Username="noreply@mamatadodia.com.br";
$mail->Password="141188";
$mail->From="noreply@mamatadodia.com.br";
$mail->WordWarp=100;
$mail->FromName= "Coifamax" ;
$mail->Subject="Link para Pagamento - Coifamax";
$mail->IsHTML(true);
$mail->AddAddress($email_usuario,$nome_usuario);
$mail->Body='
<table width="600" border="0" align="center" cellpadding="0" cellspacing="0" style="display: inline-table; border:1px solid #666">
  <tr>
   <td></td>
  </tr>

  <tr>
   <td align="right" bgcolor="#2C2C2C" height="30" style="padding-right:10px"><a href="http://www.coifamax.com.br"><span style="color:#FFF; font-size:14px; font-family:Arial">www.coifamax.com.br</span></a>&nbsp;</td>
  </tr>
  <tr>
   <td height="60" bgcolor="#2c2c2c" style="padding-left:10px"><img name="layout_rmail_r2_c1" src="http://localhost:8888/coifamax/images/logo.png" border="0" id="layout_rmail_r2_c1" alt="" /></td>
  </tr>
  <tr>
   <td bgcolor="#2C2C2C" height="40"><span style="color:#FFF; font-size:22px; font-family:Arial">&nbsp;&nbsp;Link para Pagamento!</span></td>
  </tr>
  <tr>
   <td valign="top" style="padding:10px"><span style="color:#000; font-size:14px; font-family:Arial"><b>'.$nome_usuario.'</b>, <br>
     segue abaixo o link para pagamento.<br><br>
     
     
     
     <table width="600px" cellpadding="8" style="border:1px solid #b5b5b5;text-align:center; font-size:12px;font-family:Arial">
       <tr>
         <td colspan="2" align="left"><b>Cliente:</b> '.$nome_usuario.'</td>
        </tr>
       <tr>
         <td width="269" align="left" colspan="2"><b>Produto:</b> '.$nome_produto.'</td>
        </tr>
       <tr>
         <td colspan="2" align="left"><b>Valor:</b> R$'.number_format($valor,2,',','.').'</td>
        </tr>
       <tr>
         <td colspan="2"><a href="http://localhost:8888/coifamax/EfetuaPagamento.php?pgt_id='.$id_venda_01.'&amp;ref='.$referencia_venda.'">http://localhost:8888/coifamax/EfetuaPagamento.php?pgt_id='.$id_venda_01.'&amp;ref='.$referencia_venda.'</a></td>
         </tr>
       
       </table>
     
   </td>
  </tr>
  <tr>
   <td bgcolor="#2C2C2C" align="center" height="30"><a href="http://www.coifamax.com.br"><span style="color:#FFF; font-size:14px; font-family:Arial">www.coifamax.com.br</span></a><span style="color:#FFF; font-size:14px; font-family:Arial"> | Todos os direitos reservados</span></td>
  </tr>
</table>';
//$mail->Helo;


if($mail->send()) { 

echo '';

}

echo "" . $mail->ErrorInfo;
$mail->SMTPClose();
			
			
		}
	
	}

}

$query_select = mysql_query("Select * from tbl_categorias");

while($dados=mysql_fetch_array($query_select)){

$nome_categoria[] = $dados['nome'];
$id_categoria[] = $dados['id'];

}

$smarty->assign("nome_categoria",$nome_categoria);
$smarty->assign("id_categoria",$id_categoria);


$smarty->display('CadastraPagamentos.tpl');



