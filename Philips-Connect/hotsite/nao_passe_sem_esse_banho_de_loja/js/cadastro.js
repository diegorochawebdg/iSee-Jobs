$(document).ready(function(e) {   
	
	//Analytics
	var currentPage = "Cadastro/"
	//End of Analytics
 
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
	$("#cnpj_nf").mask("99.999.999/9999-99");	
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
	
	
	
	function enviaCadastro(){
		if(jQuery("#termos").is(":checked")){
			$.ajax({
				url:'ajax-cadastro.php',
				type:'POST',
				dataType:'json',
				data: $('#cad_cliente').serialize(),
				beforeSend:function(){
					var texto = '';
					texto += '<div style="width:510px;height:200px;background:url(../images/loader.gif) #FEEBD5 center no-repeat;color:#00B2B1;font:16px GillSans; text-align:center;">';
					texto += '<p style="padding-top:115px;">Aguarde processando...</p></div>';
					modalText(texto,510,200,"background","#FEEBD5");
				},

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
						
						//Analytics
						ga('send', {
						  'hitType': 'pageview',
						  'page': currentPage + 'Erro_de_cadastro/',
						});
						//End of Analytics
												
					}else if(json.result == "success"){
						texto =  '<div class="success-msg">';
             			texto += '<h3 class="link-padding">Cadatro efetuado com sucesso</h3>';	
						texto += '<p style="'+ json.style +'">'+ json.msg2 +'</p>';
						
						//texto += '<a id="compartilhar" href="'+json.facebook_url+'" target="_blank" title="Publique no facebook">Publique no facebook</a>';
						texto += '</div>';	
						modalText(texto,510,200,"all","#FEEBD5");	
						document.getElementById("cad_cliente").reset();
						
						//Analytics
						ga('send', {
						  'hitType': 'pageview',
						  'page': currentPage + 'Cadastro_com_sucesso/',
						});
						//End of Analytics
							
						//window.timeoutID = window.setTimeout(function (){window.location = json.redirect},2000);	
					}
				}
			});
		}else{
			var texto = '';	
			texto =  '<div class="erro-msg">';
            texto += '<h3 class="link-padding">Problemas no cadastro</h3>';
			texto += '<ul>';  						
			texto += '<li>Você deve concordar com os termos e condições da promoção.</li>';					
			texto += '</ul>';	
			texto += '<span>Corrija para finalizar seu cadastro.</span>';	
			texto += '</div>';
			modalText(texto,510,200,"all","#FEEBD5");
		}		
	}
	
	$(document).on('click','#bt_enviar',function(e){	
		e.preventDefault();
		enviaCadastro()	
	});
	
	$(document).on("keypress","#cad_cliente input", function (e) {
		//e.preventDefault();
		if (e.keyCode == 13) {
			enviaCadastro();
		}
	});


});