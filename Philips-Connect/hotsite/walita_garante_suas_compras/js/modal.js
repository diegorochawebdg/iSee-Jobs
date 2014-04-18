// JavaScript Document
/*
 	FUNÇÃO CSS PARA MODAL
 	@param wid -> Lagura do box
	@param heig -> Altura do Box
*/
function modalCss(wid,heig,bgcolor,border){			
	
	if(!bgcolor){bgcolor = "#FFFFFF";}
	if(!border) {border = "none";}
	
	jQuery('#fundo-popup').css({
		position:"fixed", 
		top:"0", 
		left:"0", 
		margin:"0", 
		padding:"0", 
		width:"100%", 
		height:"100%", 
		background:"#222", 
		opacity:"0.50",
		"z-index":"9990"
	});
			
	jQuery('#close-popup').css({
		width:"29px", 
		height:"29px",
		border:"none", 
		right: "-29px",
		top: "0px",
		cursor:"pointer", 
		background:"url(../images/shadowbox/close.png) no-repeat 0 0", 
		position:"absolute",
		"z-index":"99999"
	});
	
	jQuery('#popup').css({ 
		width:wid+"px", 
		height:heig+"px", 
		border:border, 
		"z-index":"9991", 
		position:"fixed", 
		display:"table",
		left:"50%", 
		"margin-left":"-"+wid/2+"px", 
		top:"50%", 
		"margin-top":"-"+heig/2+"px",
		//'overflow-x':'hidden',
					
	})
	
	jQuery('#contpopup').css({
		border:"none", 
		display:"table", 
		height:heig+"px", 
		width:wid+"px",
		'overflow-x':'hidden',
		position:"absolute",
		"background-color": bgcolor	
	})
}

function modalGenerate(){
	jQuery("#fundo-popup").remove();
	jQuery("#popup").remove();
	jQuery("<div id='fundo-popup'></div>").appendTo('body');
	jQuery("<div id='popup'></div>").appendTo('body');	
	jQuery("<div id='close-popup' title='Fechar'></div>").appendTo('#popup');				
	jQuery("<div id='contpopup'></div>").appendTo('#popup');			
	jQuery("#fundo-popup").hide();
	jQuery("#popup").hide();
	jQuery("#close-popup").hide();				
}

function modalClose(tipo){
	if(tipo=="janela" || tipo=="all"){
		jQuery("#close-popup").show();		
		jQuery(document).on("click","#close-popup",function() {
			jQuery("#popup").fadeOut(250,function(){
				jQuery("#fundo-popup").fadeOut(250,function(){				
					jQuery("#fundo-popup").remove();
						jQuery("#popup").remove();			
				});
			});		
		});
	}
	
	if(tipo=="ok-button" || tipo=="all"){	
		jQuery(document).on("click","#close-popup-ok",function() {
			jQuery("#popup").fadeOut(250,function(){
				jQuery("#fundo-popup").fadeOut(250,function(){				
					jQuery("#fundo-popup").remove();
					jQuery("#popup").remove();	
						//location.reload();	
					});
				});		
		});	
	}
	
	if(tipo=="background" || tipo=="all"){
		jQuery(document).on("click","#fundo-popup",function() {
			jQuery("#popup").fadeOut(250,function(){
				jQuery("#fundo-popup").fadeOut(250,function(){				
					jQuery("#fundo-popup").remove();
					jQuery("#popup").remove();			
				});
			});		
		});
	
	}

}


function exitModal(callback){
   // alert('teste');
	jQuery("#popup").fadeOut(250,function(){		
	//	jQuery("#fundo-popup").fadeOut(250,function(){	
			jQuery("#popup").remove();			
			jQuery("#fundo-popup").remove();			
	//	});		
	});	
	if(typeof(callback) == "function"){ 
		callback();
	}
}





function montaModal(lk,wid,heig,fechar,bgcolor){
//FUNCAO CRIAR MODAL LINK,LARGURA,ALTURA, BOTAO FECHAR //			
	modalGenerate();			
	modalClose(fechar);			
	modalCss(wid,heig,bgcolor);		
	jQuery("#contpopup").load(lk,function(){
		//jQuery('#usernameLoading').hide();
		jQuery("#fundo-popup").fadeIn(200,function(){					
				jQuery("#popup").fadeIn(250);
		});				
	});			
}
function modalText(dados,wid,heig,fechar,bgcolor){
	//FUNCAO CRIAR MODAL LINK,LARGURA,ALTURA, BOTAO FECHAR //					
	modalGenerate();
	modalClose(fechar);
	modalCss(wid,heig,bgcolor);			
	
	jQuery("#contpopup").html(dados);	
	jQuery("#fundo-popup").fadeIn(200,function(){					
		jQuery("#popup").fadeIn(250);
	});	
			
}