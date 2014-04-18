$(document).ready(function(e) {
    
	/*Analytics*/
	var currentPage = "Fale_conosco/";
	/*End of Analytics*/
	
	//Show/Hide of lists
	$(".lists li a").click(function(e) {
		if($(".lists li .txt").is(":visible")){
			$(".lists li .link").removeClass("selected");
			$(".lists li .txt:visible").toggle("fast");
			$(this).parent().parent().children(".txt:hidden").parent().children(".link").addClass("selected");
			$(this).parent().parent().children(".txt:hidden").toggle("fast");
		} else{
			$(this).parent().parent().children(".link").addClass("selected");
			$(this).parent().parent().children(".txt").toggle("fast");
		}
    });
	
	if($(".lists li .txt").is(":visible")){
		$(this).parent().parent().children(".link").css("background-image", "url(../fale_conosco/images/list-up.png)");
	} else{
		$(this).parent().parent().children(".link").css("background-image", "");
	}
	
	
	/*Valida Campos do formulário*/
	$(function() {
		function validaCampos(){ 
			var campos="";
			var conta = 0;
			
			if($('#nome').val()!="") {			      
				conta++;
			}else{
				campos=campos+"- Nome\n";
			}
			    			     			     
			if($('#email').val()!="") {     
				var filtro_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
				if(filtro_email.test($('#email').val())){       
					conta++;      
				}else{
					campos=campos+"- Email Inválido\n";
				}
			}else{
				campos=campos+"- E-mail\n";
			}
			    
			if($('#mensagem').val()!="") {
				conta++;
			}else{
				campos=campos+"- Mensagem\n";
			}                    
			if(conta==3){      
				return true;
			}else{
				alert('Preencha os campos:\n'+campos+'');
				ga('send', 'event', 'Button', 'Click', currentPage + "Formulário Não Enviado");
				return false;
			}
		}
		
		
		$(document).on('click','#bt-enviar',function(e){
			if(validaCampos()){
			
				e.preventDefault();	
				$.ajax({
					url:'ajax-contato.php',
					type:'POST',
					dataType:'json',
					data: $('#form-contato').serialize(),
					success:function(json){
						alert(json.msg);
						document.getElementById("form-contato").reset();
						ga('send', 'event', 'Button', 'Click', currentPage + "Formulário Enviado");
					}
				});	
			}  
			return false;
		});
	
	});
	/*Fim do Valida Campos do formulário*/
	
});