$(document).ready(function(){
$(function() {
   function validaCampos(){ 
    var campos="";
    var conta = 0;

    if($('#nome-in-company').val()!="" && $('#nome-in-company').val()!="NOME:") {			      
     conta++;
    }else{
     campos=campos+"- Nome\n";
    }

	if($('#cargo-in-company').val()!="" && $('#cargo-in-company').val()!="CARGO:") {			      
     conta++;
    }else{
     campos=campos+"- Cargo\n";
    }
	
	if($('#dias-in-company').val()!="") {			      
     conta++;
    }else{
     campos=campos+"- Número de dias para o curso\n";
    }

	if($('#tipo-in-company').val()!="") {			      
     conta++;
    }else{
     campos=campos+"- Tipos de equipamentos da planta\n";
    }

	if($('#participantes-in-company').val()!="" && $('#participantes-in-company').val()!="QUANTIDADE DE PARTICIPANTES:") {			      
     conta++;
    }else{
     campos=campos+"- Quantidade de participantes\n";
    }
	
	if($('#cidade-in-company').val()!="" && $('#cidade-in-company').val()!="CIDADE:") {			      
     conta++;
    }else{
     campos=campos+"- Cidade\n";
    }

	if($('#estado-in-company').val()!="" && $('#estado-in-company').val()!="ESTADO:") {			      
     conta++;
    }else{
     campos=campos+"- Estado\n";
    }
    			     			     
    if($('#email-in-company').val()!="" && $('#email-in-company').val()!="E-MAIL:") {
     
     var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
     
     if(filtro_email.test($('#email-in-company').val())){       
      conta++;      
     }else{
      campos=campos+"- Email Inválido\n";
     }
    }else{
     campos=campos+"- E-mail\n";
    }

	if($('#empresa-in-company').val()!="" && $('#empresa-in-company').val()!="EMPRESA:") {			      
     conta++;
    }else{
     campos=campos+"- Empresa\n";
    }
    
    if($('#ddd-in-company').val()!="" && $('#ddd-in-company').val()!="DDD:") {
     conta++;
    }else{
     campos=campos+"- DDD\n";
    }     
    
    if($('#telefone-in-company').val()!="" && $('#telefone-in-company').val()!="TELEFONE:") {
     conta++;
    }else{
     campos=campos+"- Telefone\n";
    }

	if($('#publico-in-company').val()!="" && $('#publico-in-company').val()!="PÚBLICO ALVO:") {
	     conta++;
	    }else{
	     campos=campos+"- Público Alvo\n";
	    } 
	
	if($('#mensagem-in-company').val()!="" && $('#mensagem-in-company').val()!="MENSAGEM:") {
	     conta++;
	    }else{
	     campos=campos+"- Mensagem\n";
	    } 
                   
    if(conta==13){      
     return true;
    }else{
     alert('Prezado cliente, a fim de ter sua solicitação de orçamento atendida, pedimos que faça a gentileza de preencher TODOS os campos abaixo:\n'+campos+'');
     return false;
    }
   }
  $('#envia-in-company').click(function (){   
   if(validaCampos()){
// var valor_radio = $("input[@name='favlang']:checked").val();
    $.post(
      'http://www.noria.com.br/wp-content/themes/noria/ajax/ajax_mail_in_company.php',  
      {
		nome:$('#nome-in-company').val(),
		cargo:$('#cargo-in-company').val(),
		numero_dias:$('#dias-in-company').val(),
		tipos_equipamentos:$('#tipo-in-company').val(),
		participantes:$('#participantes-in-company').val(),
		cidade:$('#cidade-in-company').val(),
		estado:$('#estado-in-company').val(),
		email:$('#email-in-company').val(),
		ddd:$('#ddd-in-company').val(),
		telefone:$('#telefone-in-company').val(),
		publico:$('#publico-in-company').val(),
		mensagem:$('#mensagem-in-company').val()
      },
      function(data) {
       alert(data);
       location.reload();
      }
    );  
   }  
   return false;
  });
});
});