$(document).ready(function(){
	jQuery.ajaxSetup({ cache: false });
	$(document).on("keypress", "input", function (e) {
		if (e.keyCode == 13) {
			$('#acessar').click();
			return false;
		}
	});	
	$(document).on("click", "input:checkbox",function(){	
      $(this).parent().toggleClass("check-uncheck");
	  	if($("input:checkbox").parent().hasClass("check-uncheck")){
	  		$("input:checkbox").attr("checked", "");
	  	}
    });	
	$(document).on("click",'#acessar', function() { 			
		var nome 	= $('#nome').val();
		var acao 	= $('#acao').val();
		var e_mail	= $('#email').val();
		var flag 	= $('#atualizacoes').attr("checked");
		if( flag == "checked" ) flag = 1;
		else flag = 0;
		if(!validaEmail(e_mail)){
			$('#email').css("border", "solid 1px red");
			return false;	
		} 
		$('#email').css("border", "none");
		$.ajax({
			url: HTTP_URL + "ajax/check_acesso.php",
			type: 'POST',
			dataType: "json", //Tipo de Retorno 
			data: {email:e_mail, nome: nome, flag: flag,acao:acao},
			beforeSend:function(){
				var html_data = "<span style='width: 170px;'><img src='"+HTTP_URL+"images/preloader.gif' /></span>";
				$("#result").html( html_data );
			},				
			success: function(json) {
				if(json.result == 'success') {		
					setCookie("cookie_email", e_mail, 180);						 
					window.location.reload();
				}				
				if( json.result == 'error' ){ 
					$("#result").html( "<p></p>" );
					modalText('<div class="msg" style="text-align:center;margin-top:30px;font-size:14px;color:#929292">'+json.resposta+'<br></div>',395,120,"all");					
				}
				
			}
		});
		  
	});
	$(document).on('focus','#email',function(){
		if($(this).val() == 'Email'){
			$(this).val('');
		}
	});

	$(document).on('blur','#email',function(){
		if($(this).val() == ''){
			$(this).val('Email');
		}
	});

	if(COOKIE_EMAIL != ''){
		$('#email').val(COOKIE_EMAIL);
		$('#senha').focus();	
	}else{
		$('#email').focus();
	}
});
