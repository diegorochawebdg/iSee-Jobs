$(document).ready(function(e) {
	$("#cnpj_nf").mask("99.999.999/9999-99");	
	function enviaNota(){	  
	  if($('#nr_nf').val() == ''){
		  var texto = '';	
		  texto =  '<div class="erro-msg">';
		  texto += '<h3 class="link-padding">Problemas no cadastro</h3>';
		  texto += '<ul>';  						
		  texto += '<li>Insira o número da nota</li>';					
		  texto += '</ul>';	
		  texto += '<span>Corrija para finalizar seu cadastro.</span>';	
		  texto += '</div>';
		  modalText(texto,510,200,"all","#FEEBD5");		  
		  $('#nr_nf').focus();
		  return false;
	  }else if($('#cnpj_nf').val() == ''){
  		  var texto = '';	
		  texto =  '<div class="erro-msg">';
		  texto += '<h3 class="link-padding">Problemas no cadastro</h3>';
		  texto += '<ul>';  						
		  texto += '<li>Insira o cnpj da nota</li>';					
		  texto += '</ul>';	
		  texto += '<span>Corrija para finalizar seu cadastro.</span>';	
		  texto += '</div>';
		  modalText(texto,510,200,"all","#FEEBD5");	
		  $('#cnpj_nf').focus();
		  return false;
	  }else{
		  $.ajax({
			  url:'addnota.php',
			  type:'POST',
			  dataType:'json',
			  data: $('#form_addnota').serialize(),
			  beforeSend:function(){
				  var texto = '';
				  texto += '<div style="width:510px;height:200px;background:url(../images/loader.gif) #FEEBD5 center no-repeat;color:#00B2B1;font:16px GillSans; text-align:center;">';
				  texto += '<p style="padding-top:115px;">Aguarde processando...</p></div>';
				  modalText(texto,510,200,"background","#FEEBD5");
			  },
			  success: function(json){
				  	var texto = '';
					if(json.result == 'success'){					
					  texto =  '<div class="success-msg">';
					  texto += '<h3 class="link-padding">Cadatro efetuado com sucesso</h3>';
					  //texto += '<a id="compartilhar" href="'+json.facebook_url+'" target="_blank" title="Publique no facebook">Publique no facebook</a>';
					  texto += '</div>';	
					  modalText(texto,510,200,"all","#FEEBD5");
					  //exitModal();						
					  $('div#meus-numeros').load('load_cods.php');	
					  document.getElementById("form_addnota").reset();				
				  }else{
						texto =  '<div class="erro-msg">';
             			texto += '<h3 class="link-padding">Problemas no cadastro</h3>';
						texto += '<ul>';  						
						texto += '<li>' + json.msg + '</li>';							
						texto += '</ul>';	
						texto += '<span>Corrija para finalizar seu cadastro.</span>';	
						texto += '</div>';
						modalText(texto,510,200,"all","#FEEBD5");

				  }
			  }		
		  });
	  }
	}
	
	$(document).on('click','#bt_enviar_nota',function(e){
		e.preventDefault();
		enviaNota();
	});
	
	$(document).on("keypress","input", function (e) {
		if (e.keyCode == 13) {
			enviaNota();
		}
	});


});