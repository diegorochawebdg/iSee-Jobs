////// Functions ////////

function getBusca(){
	$.ajax({
		url: 'ajax/ajax_filtro_busca.php?op=busca_produto',
		type:"POST",
		dataType:'json',
		data: $('form#cad_arquivo').serialize(),//serializeArray() é melhor para ser debugado, mas tem o mesmo resultado
		success:function(data){
			if(data.total > 0){
				printArrayProdutos(data.produtos);
				printTotal(data.total);
			}else{
				printTotal(data.total);
				printVazio(data.msg);
			}
		}					
	});
}

function getProdutos(){
	$.ajax({
		url: "ajax/ajax_filtro_busca.php",
		type:"POST",
		dataType:'json',
		success:function(data){
			if(data.total > 0){
				printArrayProdutos(data.produtos);
				printTotal(data.total);
			}else{
				printTotal(data.total);
				printVazio(data.msg);
			}
		}					
	});
}

function printVazio(msg){
	var html = '';
	html += '<li>';
	html += '<div class="description"> ';
	html += '<a href="#" title="'+ msg +'">'+ msg +'</a>';
	html += '</div>';
	html += '<div class="clear"></div>';
	html += '</li>';	
	$('#produtos-lista').html(html);	
}

function printTotal(total){
	$('.produtos-number').html(total);
}

function printArrayProdutos(array){
	var html = '';
	for(var i in array){
		//alert(array[i].nome);
		 html += '<li id="produto-'+ array[i].cod_produto +'"  class="produto_relacionar">';
         html += '<div class="description"> ';
         html += '<a href="#" title="'+ array[i].departamento +'">'+ array[i].departamento +'</a>';
         html += '<span class="list-separator">></span>';
         html += '<a href="#" title="'+ array[i].categoria +'"> '+ array[i].categoria +'</a>';
         html += '<span class="list-separator">></span>';
         html += '<a href="#" title="'+ array[i].nome +'"> '+ array[i].nome +'</a>';
         html += '</div>';
         html += '<div class="buttons">';
         html += '<a title="Linhas" class="gradient">Linhas</a>';
         html += '<a title="Relacionar" class="adicionar-produto gradient">Relacionar</a>';
         html += '<div class="clear"></div>';
         html += '</div>';
         html += '<div class="clear"></div>';
		 html += '</li>';		 
	}
	$('#produtos-lista').html(html);	
}

//Retorna Id limpo do elemento Campanha ou Produto
function retornaId( id ){
	var cont = id . split("-");	
	return cont[1];	
}

//Cria o elemento adicionado na lista de relacionados
function htmlProdutoRelacionado(id, content){	
	var li_relacionado_content = '<li id="' + id + '-relacionado" >';	
	li_relacionado_content += '<div class="description">';
	li_relacionado_content += content;
	li_relacionado_content += '</div>';
	li_relacionado_content += '<input type="hidden" id="produto_relacionado[]" name="produto_relacionado[]" value="' + retornaId(id) + '">'; 
	li_relacionado_content += '<div class="buttons">';
	li_relacionado_content += '<a title="Remover" class="remove-relacionado">Remover</a>';
	li_relacionado_content += '</div>';
	li_relacionado_content += '<div class="clear"></div>';
	li_relacionado_content += '</li>';	
	$(li_relacionado_content).appendTo('div.itens-relacionados ul');
}


//Cria o elemento adicionado na lista de relacionados
function htmlCampanhaRelacionado(id, content){	
	var li_relacionado_content = '<li id="' + id + '-relacionado" class="campanha_relacionar">';	
   	li_relacionado_content += '<div class="description">';
	li_relacionado_content += content;
    li_relacionado_content += '</div>';
	li_relacionado_content += '<input type="hidden" id="campanha_relacionada[]" name="campanha_relacionada[]" value="' + retornaId(id) + '">'; 
	li_relacionado_content += '<div class="buttons">';
	li_relacionado_content += '<a title="Remover" class="remove-relacionado">Remover</a>';
	li_relacionado_content += '</div>';
	li_relacionado_content += '<div class="clear"></div>';
	li_relacionado_content += '</li>';	
	$(li_relacionado_content).appendTo('div.itens-relacionados ul');
}


//Atualiza array com o id dos produtos adicionados
function updateProdutoArray(){
	var produtos_relacionados = 0;
	$('#produtos').val(0);
	var prudutoValues = new Array();
    $("input[name='produto_relacionado[]']").each(function() {
		prudutoValues . push( $(this).val() );
		produtos_relacionados++;				    
   	});		
	$('#produtos').val( prudutoValues );
}

//Atualiza array com o id dos campanhas adicionadas
function updateCampanhaArray(){
	var campanhas_relacionadas = 0;
	$('#campanhas').val(0);
	var campanhaValues = new Array();
    $("input[name='campanha_relacionada[]']").each(function() {
		campanhaValues . push( $(this).val() );
		campanhas_relacionadas++;				    
   	});		
	$('#campanhas').val( campanhaValues );
}

//Habilita funcao de upload
function enableUpload(){
	$('#uploadfiles').attr("disabled", false);
	$('#uploadfiles').css({opacity:"1.0"});
}
//Desabilita funcao de upload
function disableUpload(){	
	$('#uploadfiles').attr("disabled", true);	
	$('#uploadfiles').css({opacity:"0.40"});	
}

//Habilita funcao de adicionar arquivos
function enablePick(){
	$('#pickfiles').attr("disabled", false);
	$('object').show();
	$('#pickfiles').css({opacity:"1.0"});
}

//Desabilita funcao de adicionar arquivos
function disablePick(){
	$('#pickfiles').attr("disabled", true);	
	$('#pickfiles').css({opacity:"0.40"});
	$('object').hide();
}

//Atualiza total de produtos na lista
function updateTotalProdutos(val){
	$("#total-itens").html(parseInt($("#total-itens").html()) + val);
}

//Remove um item relacionado
function removeRelacionado(id){
	var cont = id . split("-");	
	$("#" + id).remove();	
	$("#" + cont[0] + "-" + cont[1]).show();	
	updateProdutoArray();
	updateCampanhaArray();	
	if(cont[0] == "produto"){
		updateTotalProdutos( 1 );	
	}
	if($("#produtos").val() == 0 || $("#campanhas").val() == 0){	
		disableUpload();
	}	
}


function addProduto(id){
	//var id_produto = retornaId(id);	
	var li_content = $("#" + id + " .description").html();		
	htmlProdutoRelacionado( id, li_content);	
	$("#" + id ).hide();	
	//Altera total de produtos	
	updateTotalProdutos( -1 );
	//Testa se tipo arquivo está checado pra liberar lista de uploads
	if($("input[name='tipo_arquivo']:checked").val()!=0){		
		$('#lista-arquivos').show();
	}
	updateProdutoArray();
	
	if($("#produtos").val() != 0 || $("#campanhas").val() != 0){	
		enableUpload();
		enablePick();
	}	

}

function addCampanha(id){
	//var id_campanha = retornaId(id);	
	var li_content = $("#" + id + " .description").html();		
	htmlCampanhaRelacionado( id, li_content);	
	$("#" + id ).hide();	
	//Testa se tipo arquivo está checado pra liberar lista de uploads
	if($("input[name='tipo_arquivo']:checked").val()!=0){		
		$('#lista-arquivos').show();
	}
	//Atualiza array
	updateCampanhaArray();	
	if($("#produtos").val() != 0 || $("#campanhas").val() != 0){	
		enableUpload();
		enablePick();
	}		

}



//#################### UPLOADER FUNCTIONS ######################## //

//Variavel global com dados dos arquivos
window.arrayData = [];


//Funcao de remover aquivo na lista de upload
function removeFile(file){
	uploader.removeFile(uploader.getFile(file));
	return false;
}

//Funcao de remover aquivo invalido na lista de upload
function removeInvalido(file){	
	$("div#"+file).fadeOut(200,function(){
		$('div#'+file).remove();
	});		
	return false;
}

//Salva em cache dados dos Inputs na variavel global
function cacheInputData(){
	var count = 0;			
	$(".file-added").each(function(){
		var id = $(this).attr("id");							
		window.arrayData[count] = [];
		window.arrayData[count]["id"]   		= new String(id);
		window.arrayData[count]["descricao"] 	= ( $("#" + id + "-desc").val()==null ? "" : $("#" + id + "-desc").val());
		window.arrayData[count]["link"] 		= ( $("#" + id + "-externo").val()==null ? "" : $("#" + id + "-externo").val());		
		window.arrayData[count]["online"] 		= ( $("#" + id + "-online").is(":checked")    == true ? 1 : 0);	
		window.arrayData[count]["offline"] 		= ( $("#" + id + "-offline").is(":checked")   == true ? 1 : 0);
		window.arrayData[count]["recomenda"] 	= ( $("#" + id + "-recomenda").is(":checked") == true ? 1 : 0);
		window.arrayData[count]["restrito"] 	= ( $("#" + id + "-restrito").is(":checked")  == true ? 1 : 0);	 
		window.arrayData[count]["tipo"] 		= ( $("input:radio[name=" + id + "-tipo]:checked").val() == null ? "" : $("input:radio[name=" + id + "-tipo]:checked").val()); 
		
		count++;	
	});
}

//Carrega dados dos Inputs nos seus respectiovs inputs
function loadInputData(){
	if(window.arrayData.length > 0){
		for (var i in window.arrayData){						
			var id = window.arrayData[i]["id"];						
			$("#"+ id +"-desc").val(window.arrayData[i]["descricao"]);
			$("#"+ id +"-externo").val(window.arrayData[i]["link"]);			
			if(window.arrayData[i]["online"] == 1){
				$("#"+ id +"-online").prop("checked", true);
			}else{
				$("#"+ id +"-online").prop("checked", false);
			}
			
			if(window.arrayData[i]["offline"] == 1){
				$("#"+ id +"-offline").prop("checked", true);
			}else{
				$("#"+ id +"-offline").prop("checked", false);
			}
			
			if(window.arrayData[i]["recomenda"] == 1){
				$("#"+ id +"-recomenda").prop("checked", true);
			}else{
				$("#"+ id +"-recomenda").prop("checked", false);
			}	
			
			if(window.arrayData[i]["restrito"] == 1){
				$("#"+ id +"-restrito").prop("checked", true);
			}else{
				$("#"+ id +"-restrito").prop("checked", false);
			}
			
			if(window.arrayData[i]["tipo"] == "selo"){
				$(".radio-selo-"+ id).prop("checked", true);
			}
			
			if(window.arrayData[i]["tipo"] == "banner"){
				$(".radio-banner-"+ id).prop("checked", true);
			}
			
			if(window.arrayData[i]["tipo"] == "tabloide"){
				$(".radio-tabloide-"+ id).prop("checked", true);
			}				
				
		}
	}
}

//Retorna extensão do arquivo inserido na lista
function getExtesion(str){
	var ext 		= str.substr(str.lastIndexOf('.'), str.lenght);
	return ext.toLowerCase();	
}

//Retorna tipo do arquivo da extensão
function ExtensionTest(ext){
	var ext 		= getExtesion(ext);
	var imagem 		= Array(".jpg",".gif",".png",".tiff",".tif",".psd",".jpeg",".bmp",".xbm",".ai",".eps");
	var video 		= Array(".avi",".mp4",".mov",".wmv",".flv",".mpg",".mpeg");
	var documento 	= Array(".doc",".docx",".xls",".xlsx",".ppt",".pptx",".pps",".ppsx",".pdf",".rtf",".txt",".csv");
	var rarzip 		= Array(".rar",".zip");
		
	if(imagem.indexOf(ext) != -1) return "Imagem";
	if(video.indexOf(ext) != -1)  return "Video";
	if(documento.indexOf(ext) != -1) return "Documento";
	if(rarzip.indexOf(ext) != -1) return "Compactado RAR/ZIP";
		
}


/////////  Actions /////////




$(document).on("click", ".lista_linha", function(){	
	var id_prod = $(this).attr("id");
	$('.produto_relacionar div').hide();	
	$('#'+id_prod+'-prod div').load('ajax/ajax_mostra_linhas.php?cod_produto=' + id_prod,function(){
		$('#'+id_prod+'-prod div').slideDown(100);
	});
});

$(document).on('click', '.remove-linha', function(){	
	if(confirm('Deseja mesmo desvincular essa linha deste produto?')){	
		var rmurl = $(this).attr("href");	
		$.ajax({
			url: rmurl,
			type: 'GET',
			dataType: "json", //Tipo de Retorno
			success:function(json){
				if(json.result=='sucess'){									
					$('#'+json.cod_produto+'-prod div').load('ajax/ajax_mostra_linhas.php?cod_produto='+json.cod_produto);
				}
				alert(json.resposta);
			}					
		});			
	}else{		
		return false;	
	}
	return false;
});


$(document).on('click', '.adicionar-linha', function(){
	var addurl = $(this).attr("href");	
	$.ajax({
		url: addurl,
		type: 'GET',
		dataType: "json", //Tipo de Retorno
		success:function(json){
			if(json.result=='sucess'){
				$('#'+json.cod_produto+'-prod div').load('ajax/ajax_mostra_linhas.php?cod_produto='+json.cod_produto);
			}else{
				alert(json.resposta);
			}		
		}					
	});	
	return false;
});

$(document).on('click', 'a.vinculaProduto',function(){	
	var pagina = $(this).attr("href");
	montaModal(pagina,500,300,"all");		
	return false;
});
