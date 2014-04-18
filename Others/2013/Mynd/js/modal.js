// JavaScript Document
/*
 	FUNÇÃO CSS PARA MODAL
 	@param wid -> Lagura do box
	@param heig -> Altura do Box
*/
function modalCss(wid,heig){			
	jQuery('#fundo-popup').css({
		position:"fixed", 
		top:"0", 
		left:"0", 
		margin:"0", 
		padding:"0", 
		width:"100%", 
		height:"100%", 
		background:"#222", 
		opacity:"0.80",
		"z-index":"9990"
	});
			
	jQuery('#close-popup').css({
		width:"20px", 
		height:"20px",
		border:"none", 
		cursor:"pointer", 
		float:"right", 
		background:"url(images/botao_fechar.png) no-repeat 0 0", 
		"margin-top":"-21px", 
		"margin-right":"0px",
		"z-index":"99999"
	});
	
	jQuery('#popup').css({ 
		width: "780px", 
		height: "394px", 
		"z-index":"9991", 
		position:"fixed", 
		display:"table",
		left:"50%", 
		"margin-left":"-"+wid/2+"px", 
		top:"50%", 
		"margin-top":"-"+heig/2+"px",
		//'overflow-x':'hidden',
		"background-color":"#3C4143"				
	})
	
	jQuery('#contpopup').css({
		border:"none", 
		display:"table", 
		height:heig-10+"px", 
		width:wid-10+"px",
		"margin-left":"5px",
		"margin-top":"5px",
		'overflow-x':'hidden',
		position:"absolute"
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
		jQuery("#close-popup").live("click",function() {
			jQuery("#popup").fadeOut(250,function(){
				jQuery("#fundo-popup").fadeOut(250,function(){				
					jQuery("#fundo-popup").remove();
						jQuery("#popup").remove();			
				});
			});		
		});
	}
	
	if(tipo=="ok-button" || tipo=="all"){	
		jQuery("#close-popup-ok").live("click",function() {
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
		jQuery("#fundo-popup").live("click",function() {
			jQuery("#popup").fadeOut(250,function(){
				jQuery("#fundo-popup").fadeOut(250,function(){				
					jQuery("#fundo-popup").remove();
					jQuery("#popup").remove();			
				});
			});		
		});
	
	}

}


function exitModal(){

	jQuery("#popup").fadeOut(250,function(){
				jQuery("#fundo-popup").fadeOut(250,function(){				
					jQuery("#fundo-popup").remove();
					jQuery("#popup").remove();			
				});
			});		

}


function montaModal(lk,wid,heig,fechar){
//FUNCAO CRIAR MODAL LINK,LARGURA,ALTURA, BOTAO FECHAR //			
	modalGenerate();			
	modalClose(fechar);			
	modalCss(wid,heig);			
	
	jQuery("#contpopup").load(lk,function(){
		//jQuery('#usernameLoading').hide();
		jQuery("#fundo-popup").fadeIn(200,function(){					
				jQuery("#popup").fadeIn(250);
		});				
	});			
}
function modalText(dados,wid,heig,fechar){
	//FUNCAO CRIAR MODAL LINK,LARGURA,ALTURA, BOTAO FECHAR //					
	modalGenerate();
	modalClose(fechar);
	modalCss(wid,heig);			
	
	jQuery("#contpopup").html(dados);	
	jQuery("#fundo-popup").fadeIn(200,function(){					
		jQuery("#popup").fadeIn(250);
	});	
			
}