/* 
	@charset "UTF-8";
	@ Title: Connect Photo Class
	@ Author: Gustavo Teider
	@ Date: 06/03/2013
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
*/

function ConnectFotos()
{
	
	// variables
	var marginTop	 = 100;
	var marginBottom = 140;
	var fadeSpeed    = 300;
	var fadeEase     = "easeOutQuint";
	var visibleAreaH = 520;
	var startThumbsMousePos = 300;
	var startThumbsInitPos = startThumbsMousePos + 250;
	var startThumbsInitPosActive = 445;
	var thumbsMouseArea = 410;
	var thumbsOffset = 270;
	var screenWidth  = $(document).width();
	//var screenWidth = 300;
	var currentIndex = 0;
	var currentIMG   = "";
	var hasStarted   = false;
	var currentIndexOver = -1;
	var currentIndexActive = 0;
	var isOvered = false;
	var topPosition = 0;
	var thumbWidth  = 96;
	var currentPagIndex = 0;
	var thumbsShowNo = 6;
	var currentOpacity = 0;
	var currentClickCount = 0;
	var isArrowOvered = false;
	var isFading = false;
	var swipeDistance = "";
	var isMobile = false;
	
	
	/**
		Função responsável por selecionar a imagem a ser mostrada
		@param none
	**/
	function selectImage()
	{
		// salva numa variável a antiga imagem
		var oldCurrent = currentIMG;
		
		// seta o item atual
		currentIMG   = $("#fotos img").eq( currentIndex );
		currentIMG.css("top" , topPosition + "px" );
		
		// seta variável de controle de fade
		isFading = true;
		
		// Se ainda não foi iniciada, aparece a primeira imagem 
		if( !hasStarted ) 
		{
			// fadeIn na imagem inicial
			currentIMG.css("display" , "block" );
			
		} else { 
			
			// fadeOut na imagem atual
			oldCurrent.css("display" , "none" );
			currentIMG.css("display" , "block" );

		}
		
		hasStarted = true;
		
		
	}
	
	// Redimensiona a Tela
	function resizeWindow( event ) 
	{
		screenWidth  = $(document).width();
		resizeImages();
		currentIMG.stop().animate( { top: 0 } , 500 );
	}
	
	/**
		Função responsável por paginar as thumbs
		@param none
	**/
	function paginateThumbs()
	{
		// Loop dentro de todas as imagens
		$(".thumbs ul li").each(function(i) {
			
			var marginLeft = (thumbWidth) * currentPagIndex;
			$(this).stop().animate( { left: marginLeft * -1 } , 150 );
			
			  
		});	
	}
	
	/**
		Função responsável por redimensionar as imagens
		@param none
	**/
	function resizeImages() 
	{
		// Loop dentro de todas as imagens
		$("#fotos img").each(function(i) {
			
			// pega largura
			var w = screenWidth;
			// calcula a altura proporcional a largura
			var h = Math.ceil( $(this).height() / $(this).width() * screenWidth);
			// seta as dimensões
			$(this).css({ height: h, width: w });
			
			// debuga
			console.log("Redimensionando a imagem " + $(this).attr("src") + " para a largura: " + w + "px e altura " + h + "px");
			
		});	
	}
	
	/** 
		Função responsável por adicionar clicks as miniaturas
		@param none
	**/
	function addThumbsClickListener()
	{
		
		// checa se temos mais que 6 imagens
		var totalThumbs = $(".thumbs ul li").size();
		if( totalThumbs > thumbsShowNo )
		{
			
			$("#arrow-left").click( function( event ) { 
				
				if( currentPagIndex > 0 ) currentPagIndex--;
				paginateThumbs();
				
			});
			
			$("#arrow-right").click( function( event ) { 
				
				if( currentPagIndex < (totalThumbs-thumbsShowNo) ) currentPagIndex++;
				paginateThumbs();
				
			});
			
			$(".arrow").hover( function( event ) {
				
				isArrowOvered = true;
				$(this).css("opacity" , 1 );
				
			}, function( event ) {
				
				isArrowOvered = false;
				$(this).css("opacity" , currentOpacity );
				
			});
			
			$(".arrow").mouseleave( function() { 
				isArrowOvered = false;
				$(this).css("opacity" , currentOpacity );
			});
			
			
		} else { 
			
			$("#arrow-left, #arrow-right").css("display" , "none" );

		}
		
		// Loop dentro de todas as imagens
		$(".thumbs div ul li").each(function(i) {
			
			// adiciona a função de click!
			$(this).click( function( event ) {
				
				currentIndex = $(this).index();
				var title    = $(this).find("img").attr("title");
				
				
				currentClickCount++;
				if( currentClickCount == 3 ) 
				{
					currentClickCount = 0;
				}
				
				// pageTracker._trackEvent( 'Fotos', 'Click', $NOME_FOLDER + currentIndex, 0, true);
				selectImage();
				
			});
			
			$(this).hover( function( event ) {
				
				currentIndexOver = $(this).index();
				isOvered = true;
				
			}, function( event ) {
				
				isOvered = false;
				
			});
			
			$(this).mouseleave( function() { 
				isOvered = false;
			});
			
		});	
	}
	
	/** 
		Função responsável por movimentar a imagem selecionada
		@param none
	**/
	function startMoving() 
	{
		
		// move thumbs container
		$(".thumbs_container").css("top" , startThumbsInitPosActive );
		$(".thumbs_container").delay(2000).animate( { top: startThumbsInitPos }, 1000 );
		
		$(".container_interna").mousemove( function( e ) {  
			
			var offsetY		   = Number( e.clientY - marginTop );
			var imgHeight      = Number( currentIMG.css("height").split("px")[0] );
			var pctArea        = Math.round( offsetY / (visibleAreaH) * 100 );
			var pctContentArea = Math.round( (imgHeight - visibleAreaH) / 100 * pctArea );
			var calcY		   = pctContentArea * -1;
			
			if( pctArea >= 0) 
			{
				//if( isFullScreen ) calcY += 100;
				currentIMG.stop().animate( { top: calcY } , 500 );
				topPosition = calcY; 
			}
			// Move thumbs 
			if( Number(e.pageY) > startThumbsMousePos ) 
			{
				offsetY		   =  Number(e.clientY) - startThumbsMousePos;
				pctArea        = Number( offsetY / thumbsOffset );
				if( pctArea > .5 ) pctArea = .5;
				
				currentOpacity = pctArea;
				
				calcY = startThumbsInitPos - offsetY;
				if( Number(e.clientY) < thumbsMouseArea) calcY = calcY;
				else if( Number(e.clientY) > startThumbsInitPosActive ) calcY = startThumbsInitPosActive;
				
				$(".thumbs_container").stop().animate( { top: calcY } , 300 );
				if(!isArrowOvered) $(".arrow").css( "opacity" , pctArea );
				
				// Loop dentro de todas as minis
				$(".thumbs div ul li").each(function(i) { 
					if(i != currentIndexOver)
					{
						if( currentIndex == i ) $(this).css( "opacity" , 1 );
						else $(this).css( "opacity" , pctArea );
					} else { 
						
						if(isOvered) $(this).css( "opacity" , 1 );
						
					}
				 });	
				
			}
		
		});
		
	}
	
	
	/**
		Function responsible to check if is mobile
	**/
	function checkMobile() { 
		
		// Checa se o dispositivo é móvel
		/*if( Connect.mobileEnvironment.isMobile ) 
		{
			
			isMobile = true;
			
			// Esconde miniaturas 
			$(".thumbs_container").css("display" , "none");
			
			// seta estilo da div que segura as imagens
			$("#fotos").css("position" , "absolute" );
			$("#fotos").css("left" , "0" );
			$("#fotos").css("width" , String($("#fotos img").size() * screenWidth + "px") );
			$("#fotos img").addClass("mobileIMG");
			
			myScroll = new iScroll('fotos');
			
			
		} */
	}
	
	// initializes all
	this.init = function() { 
		
		resizeImages();
		
		checkMobile();
		selectImage();
		
		if( !isMobile) 
		{
			// Redimensiona a Tela
			$(window).resize( resizeWindow );
			addThumbsClickListener();
			startMoving();
		
		}
		
		console.log("ConnectFotos.init()");
	
	}
	
	this.init();
	
}
