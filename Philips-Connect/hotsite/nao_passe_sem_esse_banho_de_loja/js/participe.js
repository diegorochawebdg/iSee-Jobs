$(document).ready(function(e) {
    
	//Analytics
	var currentPage = "Participe/"
	$("#cadastrar, #cadastrar2").click(function(e) {
		ga('send', 'event', 'Button', 'Click', currentPage + "Cadastrar Nota/");
	});
	$(".cadastrado").click(function(e) {
		ga('send', 'event', 'Button', 'Click', currentPage + "Não sou cadastrado/");
	});
	$("#bt-login").click(function(e) {
		ga('send', 'event', 'Button', 'Click', currentPage + "Acessar/");
	});
	
	
	
	$("#cpf").mask("999.999.999-99");
	$(document).on('click','#bt-login',function(e){
		e.preventDefault();	
		 $.ajax({
		  url:'login.php',
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
			url:'recuperar-senha.php',
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
					texto += '<div class="success-msg">';
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