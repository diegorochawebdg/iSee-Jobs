/*Show/Hide - Main Menu*/
$("#main-menu .produtos, #main-menu .linhas, #main-menu .campanhas, #main-menu .guideline, #main-menu .videos").hover(function(e) {
	$(this).addClass("selected");
	$(this).find(".indicator").css("display","block"); 
}, function(e){
	$(this).removeClass("selected");
	$(this).find(".indicator").css("display","");
});

if(typeof(produtos) == "undefined"){
	$("#header .produtos").hover(function(e) {
		$("#header .produtos-menu").stop().fadeIn("fast");
	}, function(e){
		$("#header .produtos-menu").stop().fadeOut("fast");
	});
}
$("#header .linhas").hover(function(e) {
    $("#header .linhas .inner").stop().fadeIn("fast");
}, function(e){
	$("#header .linhas .inner").stop().fadeOut("fast");
});
$("#header .campanhas").hover(function(e) {
    $("#header .campanhas .inner").stop().fadeIn("fast");
}, function(e){
	$("#header .campanhas .inner").stop().fadeOut("fast");
});
/*End of Show/Hide - Main Menu*/

/*Show/Hide Downloads list*/
$(".search-download .download").hover(function(e) {
    $(".search-download .download .downloads-list").stop().fadeIn(200);
	$(".search-download .download .main-button").css("background-position","-88px 0");
}, function(e){
	$(".search-download .download .downloads-list").stop().fadeOut(200);
	$(".search-download .download .main-button").css("background-position","");
});
/*End of Show/Hide Downloads list*/

$(document).on('click','.download', function(e){
	e.preventDefault();	
	addCarrinho($(this).attr('id'));
});

function Carrinho(id, acao){
	$.ajax({
		url:'./ajax/ajax_carrinho.php',
		type:'POST',
		dataType:'json',
		data:{arquivo:id,acao:acao},
		success:function(data){
			$('.download-items').html(data.total);
			window.total_carrinho = data.total;
		}
	});
}

function addCarrinho(id){
	Carrinho(id, 'adicionar');
}

function removerCarrinho(id){
	Carrinho(id, 'remover');
}

function limparCarrinho(){
	if(confirm('Deseja mesmo limpar o carrinho?')){
		Carrinho(0, 'limpar');
		return true;
	}else{
		return false;
	}
}


/* Funcao acoes ANALYTICS */
function updateAnalytics(act, dados, category, action){		
//    pgtracker = _gat._getTracker("UA-33093199-1");
//	switch (act) {
//		case "evento":			
//			pgtracker._trackEvent( category, action, dados, 0, true );
//		break;			
//		case "pageview":		
//			pgtracker._trackPageview( dados );
//		break;		
//		case "additem":			
//			//alert("additem - " + dados);			
//			  window.pgtracker._addItem(
//				   dados,           // transaction ID - necessary to associate item with transaction
//				   category,           // SKU/code - required
//				  "",        // product name
//				  "",   // category or variation
//				  "1",          // unit price - required
//				  "1"               // quantity - required
//			   );		
//		break;
//		case "addtrans":
//			  window.pgtracker._addTrans(
//			  dados,            // transaction ID - required
//			  category,  // affiliation or store name
//			  action,           // total - required
//			  "1",            // tax
//			  "1",           // shipping
//			  "",        // city
//			  "",      // state or province
//			  ""              // country
//			);
//		break;		
//		
//		case "tracktrans":		
//			//alert("tracktrans");	
//			window.pgtracker._trackTrans();
//		break;
//				
//		case "teste":alert("teste");break;			
//	}	
}
