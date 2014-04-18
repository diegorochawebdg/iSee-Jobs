$(document).ready(function(e) {   
	
    //Hide lightbox
    $(".right-content a, .fechar").click(function(e){
        $(".lightbox").fadeOut();
    });
    
	//Analytics
	var currentPage = "Participe/"
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
    
    $(".radio").parent().click(function(e) {
        var checkbox = $(".radio").removeAttr("checked");
        checkbox.removeAttr("checked");
        $(".radio").parent().removeClass("selected");
        $(this).addClass("selected");		
		$(this).children(".radio").attr("checked", "checked");
		/*if(checkbox.attr("checked") == "checked"){
			checkbox.removeAttr("checked");
		} else{
			checkbox.attr("checked", "checked");
		}*/
    });
	
	$(document).on('click','#bt-login',function(e){
		e.preventDefault();	
		 $.ajax({
		  url:'../login.php',
		  type:'POST',
		  dataType:'json',
		  data: $('#form-login').serialize(),
		  success:function(json){
			  if(json.result == 'success'){
			  	window.location = json.redirect;
			  }else{
			  	alert(json.msg);
			  }
		  }
		});	  
	});	

    
	$(".cpf-input").mask("999.999.999-99");
	$("#cep").mask("99999-999");
	$("#cnpj_nf").mask("99.999.999/9999-99");
	$("#telefone").mask("(99)99999999?9");
    $("#nascimento").mask("99/99/9999");
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
			if($("#informacoes").is(":checked") == true){
				$("#hidden_news").val(1);	
			}
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
						  'page': currentPage + 'Erro_de_cadastro/'
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
						  'page': currentPage + 'Cadastro_Com_Sucesso/',
						});
						//End of Analytics
							
						window.timeoutID = window.setTimeout(function (){window.location = json.redirect},2000);	
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
	
	$(document).on('change','#qtd_produtos',function(e){	
		createInputs($(this).val());
	});	
	
	function createInputs(total){
		var html  = '';
		var count = 1;
		while (count <= total){
			html +=   '<div class="size2">Produto ' +  pad(count, 2, 0)  + '</div>' 
                    + '<input type="text" name="nome-produto[]">'
                    + '<div class="clear"></div>';
			++count;		
		}
		
		$('.array-input').html(html);
	}
	
	
	function pad(n, len, padding){
		var sign = '', s = n;
 		if (typeof n === 'number'){
      		sign = n < 0 ? '-' : '';
      		s = Math.abs (n).toString ();
   		}
 		if ((len -= s.length) > 0){
      		s = Array (len + 1).join (padding || '0') + s;
   		}
   		return sign + s;
	}
	
	
	
	$(document).on('click','#esqueci-senha',function(e){
		e.preventDefault();
		texto =  '<div class="div-senha">';
		texto += '<form name="form-esqueci" id="form-esqueci">';
		texto += '<h3 class="link-padding">Esqueci minha senha</h3>';
		texto += '<p>Preencha  com o cpf cadastrado</p>';
        texto += '<input type="text" size="20" name="esqueci-cpf" id="esqueci-cpf" >';
		texto += '<input type="button" name="bt-esqueci" id="bt-esqueci">';
		texto += '</form>';
		texto += '<div class="clear"></div>';
		texto += '</div>';	
		modalText(texto,510,200,"all","#FEEBD5");	
		$("#esqueci-cpf").mask("999.999.999-99");
	});
	
	
	function enviaSenha(){
		$.ajax({
			url:'../recuperar-senha.php',
			type:'POST',
			dataType:'json',
			data: $('#form-esqueci').serialize(),
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
					texto += '<h3 class="link-padding">Problemas no envio</h3>';
					texto += '<ul>';  						
					texto += '<li>' + json.msg + '</li>';				
					texto += '</ul>';	
					//texto += '<span>Corrija para finalizar seu cadastro.</span>';	
					texto += '</div>';
					modalText(texto,510,200,"all","#FEEBD5");
											
				}else if(json.result == "success"){
					texto += '<div class="success-msg-senha">';
					texto += '<h3 class="link-padding">Senha enviada com sucesso</h3>';
					texto += '</div>';	
					modalText(texto,510,200,"all","#FEEBD5");	
					//window.timeoutID = window.setTimeout(function (){window.location = json.redirect},2000);	
				}
			}
		});
	}

	$(document).on('click','#bt-esqueci',function(e){
		e.preventDefault();
		enviaSenha();	
	});
	
	$(document).on("keypress","#esqueci-cpf", function (e) {
		e.preventDefault();
		if (e.keyCode == 13) {
			enviaSenha();
		}
	});


});