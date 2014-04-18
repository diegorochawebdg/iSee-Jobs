/* 
	@charset "UTF-8";
	@ Title: iSee Website Funcionality
	@ Author: Gustavo Teider
	@ Date: 03/06/2013
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
*/

/**
	Class Constructor
	@param none
**/
function iSeeSobre() { 
	
	
	// private variables
	var isTeamToggle = false;
	
	// private methods
	function toggleTeamBox() { 
		
		$("#box_somos_isee").toggleClass("box_somos_isee_height");
		$("#fechar-conheca").toggleClass("show");
		isTeamToggle = !isTeamToggle;
		
	}
	
	
	// public methods 
	
	/**
		Initializes the application
		@param none
	**/
	this.init = function() { 
		console.log("new iSeeSobre()");
		$("a#conheca, #fechar-conheca, #fechar2").click( function( event ) { 
			event.preventDefault();
			toggleTeamBox();
			var link = location.href.split("#");
		});
		$("#cycle").css("opacity"  , 0 );
		var cycleInitialized = false;
		$("#cycle").cycle({
			speed:   500,
			timeout: 2000,
			random: true,
			before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
				
				if( !cycleInitialized ) $("#cycle").css("opacity"  , 1 );
				cycleInitialized = true;
					
			}
		});
		
		carouselClients();// Chama função carrossel dos clientes
	}
	
	/*
		Função carrossel dos clientes
		OBS: É necessário que todas as UL's dentro de li.item tenham a mesma quantidade de LI's, mesmo que vazias
	*/
	
	var carouselClients = function(){
		
		// vars
		var liArray         = [];
		var timeSwap        = 2; // in seconds
		var directionSlider = true;
		var heightDefault;
		
		var countCols       = 0;
		var countObjects    = 0;
		var objectLine	    = 0;
		var countLoop	    = 0;
		
		// Pega as li's e divide em arrays
		$("#carousel-clients ul li.item").each( function(index, value){
			
			countCols++;
		
			var objArray = [];
			var arrayList = $(value).children( "ul" ).children("li");
			
			$.each( arrayList, function( ind, val ){
				
				countObjects++;
				
				var addArray = {};
				
				addArray.object    = $(val);
				addArray.offSet = $(val).offset().top;
				addArray.objHeight = $(val).height();
				
				objArray.push( addArray );
				
			} );
			
			liArray.push( objArray );
			
		} );
		
		//Executa a troca dos clientes
		objectLine = ( countObjects / countCols );			
		sliderCarousel( 0 );
		heightDefault = liArray[0][0].objHeight;
		
		function sliderCarousel( count ){
			
			var countTime = 0;
			
			$.each( liArray, function( index, value ){
				
				intervalClient( ("idInterval" + countLoop), value[count], ( ( (countTime / 5 ) + timeSwap) * 1000 ) );
				
				countTime++;
				countLoop++;
				
			});
			
			if( (count + 1) >= objectLine ) directionSlider = false;
			if( (count - 1) < 0 ) directionSlider = true;	
			
			if( directionSlider ) count++;
			else count--;		
			
			var interval = setInterval( function(){ 
					sliderCarousel( count ); 
					clearInterval( interval );
				}, ( (timeSwap + timeSwap) * 1000 ) );
		}
		
		function intervalClient( idInterval, object, time ){
			
			var idInterval = setInterval(function(e){
					
				var objUl     = object.object.parent("ul");
				var objHeight = object.objHeight;
				
				if( directionSlider ) objUl.animate( { marginTop: ( parseInt(objUl.css("margin-top")) - objHeight ) + "px" }, 500 );
				else objUl.animate( { marginTop: ( parseInt(objUl.css("margin-top")) + objHeight ) + "px" }, 500 );
				
				clearInterval( idInterval );
				
			}, time);
				
		}
			
	}// Fim carouselClients
}
