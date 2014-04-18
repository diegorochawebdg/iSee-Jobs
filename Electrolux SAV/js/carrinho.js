$(document).on('click', '.remover-carrinho', function(e){
	e.preventDefault();
	var dvremover   = $(this).attr("remover");
	var	total 		= parseInt($('.' + dvremover + ' .number').html()); 	
	$('.' + dvremover + ' .number').html(total - 1)
	$(this).parent().parent('tr').remove();
	if((total - 1) == 0){
		$('.' + dvremover ).remove();
	}	
	removerCarrinho($(this).attr('id'));	
	if((window.total_carrinho - 1) == 0){
		carrinhoVazio();
	}
});

$(document).on('click', '.limpar-carrinho', function(e){
	e.preventDefault();
	if(limparCarrinho()){		
		carrinhoVazio();	
	}
});


function carrinhoVazio(){
	$('.tables' ).remove();
	$('.side-buttons' ).remove();
	$('.vazio' ).css({'display':'table' });
}