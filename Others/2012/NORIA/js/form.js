$(document).ready(function(){
	$(function() {
	    function validaCampos(){ 
	     var campos="";
	     var conta = 0;
		 
	     if($('#nome').val()!="" && $('#nome').val()!="NOME:") {			      
	      conta++;
	     }else{
	      campos=campos+"- Nome\n";
	     }
	     			     			     
	     if($('#email').val()!="" && $('#email').val()!="E-MAIL:") {
	      
	      var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	      
	      if(filtro_email.test($('#email').val())){       
	       conta++;      
	      }else{
	       campos=campos+"- Email Inválido\n";
	      }
	     }else{
	      campos=campos+"- E-mail\n";
	     }
	     
	     if($('#ddd').val()!="" && $('#ddd').val()!="DDD:") {
	      conta++;
	     }else{
	      campos=campos+"- DDD\n";
	     }     
	     
	     if($('#telefone').val()!="" && $('#telefone').val()!="TELEFONE:") {
	      conta++;
	     }else{
	      campos=campos+"- Telefone\n";
	     }
	 
		 if($('#assunto').val()!="" && $('#assunto').val()!="ASSUNTO:") {
	      conta++;
	     }else{
	      campos=campos+"- Assunto\n";
	     } 
		 if($('#mensagem').val()!="" && $('#mensagem').val()!="MENSAGEM:") {
	      conta++;
	     }else{
	      campos=campos+"- Mensagem\n";
	     } 
	                    
	     if(conta==6){      
	      return true;
	     }else{
	      alert('Preencha os campos:\n'+campos+'');
	      return false;
	     }
	    }
	   $('#envia').click(function (){   
	    if(validaCampos()){
		// var valor_radio = $("input[@name='favlang']:checked").val();
	     $.post(
	       'http://www.noria.com.br/site/wp-content/themes/noria/ajax/ajax_mail.php',  
	       {
	        nome:$('#nome').val(),      
	        email:$('#email').val(),
	        ddd:$('#ddd').val(),
	        telefone:$('#telefone').val(),
	        assunto:$('#assunto').val(),
	        mensagem:$('#mensagem').val(),
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