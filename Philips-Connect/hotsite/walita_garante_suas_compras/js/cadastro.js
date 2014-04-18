$(document).ready(function(e) { 
	$(".checkbox-container, .checkbox-container2").click(function(e) {
        $(this).toggleClass("selected");
		var checkbox = $(this).children("input[type='checkbox']");
		if(checkbox.attr("checked") == "checked"){
			checkbox.removeAttr("checked");
		} else{
			checkbox.attr("checked", "checked");
		}
    });	
	$("#cpf").mask("999.999.999-99");
	$("#cep").mask("99999-999");
	$("#telefone").mask("(99)99999999?9");
	$(document).on('blur','#cep',function(){
		if(jQuery("#completar").is(":checked")){		
			var cep = $(this).val();
			$.ajax({
				url:'http://cep.republicavirtual.com.br/web_cep.php?cep='+ cep +'&formato=json',
				dataType:'json',
				success:function(json){
					if(json.resultado == 0){
						return false;
						//alert('CEP Não encontrado');
					}else{
						$('#'+json.uf).attr('selected','selected');
						$('#cidade').val(json.cidade);
						var endereco = '';
						endereco 	+= json.tipo_logradouro + ' ' + json.logradouro;						
						if(json.bairro !=''){
							endereco += ', ' + json.bairro;
						}						
						$('#endereco').val(endereco);					
					}
				}
			});
		}
	});
	
	
	$(document).on('click','#bt_enviar',function(){		
		if(jQuery("#termos").is(":checked")){
			$.ajax({
				url:'ajax-cadastro.php',
				type:'POST',
				dataType:'json',
				data: $('#cad_cliente').serialize(),
				success:function(json){
						var texto = '';				
					if(json.result == "error"){						
						texto =  '<div class="erro-msg">';
             			texto += '<h3 class="link-padding">Problemas no cadastro</h3>';
						texto += '<ul>';  						
						for (var i in json.errors){
							texto += '<li>' + json.errors[i] + '</li>';				
						}	
						texto += '</ul>';	
						texto += '<span>Corrija para finalizar seu cadastro.</span>';	
						texto += '</div>';
						modalText(texto,510,200,"all","#FEEBD5");
												
					}else if(json.result == "success"){
						texto =  '<div class="success-msg">';
             			texto += '<h3 class="link-padding">Cadatro efetuado com sucesso</h3>';
						texto += '<a id="compartilhar" href="'+json.facebook_url+'" target="_blank" title="Publique no facebook">Publique no facebook</a>';
						texto += '</div>';	
						modalText(texto,510,200,"all","#FEEBD5");	
						document.getElementById("cad_cliente").reset();	
						//window.timeoutID = window.setTimeout(function (){window.location = json.redirect},2000);	
					}
				}
			});
		}else{
			alert('Você deve concordar com os termos e condições da promoção.');
			return false;
		}
	});
	
	$(document).on('click','#compartilhar',function(e){	
		e.preventDefault();
		window.open($(this).attr("href"),'sharer','toolbar=0,status=0,width=548,height=325');	
	});

});