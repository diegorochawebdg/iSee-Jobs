/* 
	@charset "UTF-8";
	@ Title: Youtube iFrame API
	@ Author: Gustavo Teider
	@ Date: 17/01/2013
	@ Version: 1.0	
	@ iSee Interactive Group 
	@ http://www.isee.com.br 
	@ Todos os direitos reservados
*/	

// variáveis
var opts;
var instance;
var instanciated  = false;
var pauseOnEnd    = false;
var secondsPlayedTimeout = 0;
var secondsPlayed = 0;
var isPaused	  = false;
var player;
var count = 0;


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
	
	if( opts.debug ) console.log("onYouTubeIframeAPIReady()\nYoutube API has been downloaded and is ready to be use.");
	
	// load first video
	jQuery.iSeePlayer.loadVideo( 0 );
	
 }



(function($) { 
	
	jQuery.iSeePlayer = function( options ) { 
			
			// Parâmetros passados através do constructor
			opts = jQuery.extend( {} , jQuery.iSeePlayer.defaults , options );
			
			if( instance == undefined ) 
			{
				instance = this;
				jQuery.iSeePlayer.loadAPI();
			} else { 
				
				instance.iSeePlayer.destroy();
				setTimeout( function() { 
					instance.iSeePlayer.loadVideo( 0 );
				}, 300 );
			
			}	
			
	}
	
	
})(jQuery);


/** 
	Timeout seta o tempo que o vídeo foi visto
	@param none
**/
jQuery.iSeePlayer.setSecondsPlaying = function() { 

	secondsPlayedTimeout = setTimeout( function() {
								
								secondsPlayed++;
								jQuery.iSeePlayer.setSecondsPlaying();	
								opts.onPlay.call( secondsPlayed );
								//if( opts.debug ) console.log( secondsPlayed + " seconds played ... " );
								
							} , 1000 );					

}
/** 
	Reseta o time out dos segundos vistos
	@param none
**/
jQuery.iSeePlayer.clearSecondsPlaying = function( ended ) { 

	if(ended) secondsPlayed = 0;
	clearTimeout( secondsPlayedTimeout );
}

/** 
	Resgata o numero de segundos tocados
	@param none
**/
jQuery.iSeePlayer.getSecondsPlayed = function() { 
	return secondsPlayed;
};


/** 
	Carrega a Youtube API
	@param none
**/
jQuery.iSeePlayer.loadAPI = function() { 
	
	// Escreve o framework na tela
	// 2. This code loads the IFrame Player API code asynchronously.
	//setTimeout( function() { 
		
		var tag = document.createElement('script');
	
		// This is a protocol-relative URL as described here:
		//     http://paulirish.com/2010/the-protocol-relative-url/
		// If you're testing a local page accessed via a file:/// URL, please set tag.src to
		//     "https://www.youtube.com/iframe_api" instead.
		tag.src = "https://www.youtube.com/iframe_api";
		var firstScriptTag  = document.getElementsByTagName('script')[0];
		var scriptTag = $(firstScriptTag);
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		
		//var js_code = "<script src='http://www.youtube.com/iframe_api'>
		//$("#" + opts.container).append( js_code ); <script src="http://s.ytimg.com/yts/jsbin/www-widgetapi-vflSBkLNo.js" async=""></script>
	//} , 1000 );
}


/**
	função responsável por excluir o vídeo da tela
	e remover todos seus eventos da memória
**/
jQuery.iSeePlayer.destroy = function() 
 {
	 if( player != null && instanciated )
	 {
		// player.stopVideo();
		player.destroy();
		player = null;
		instance.iSeePlayer.clearSecondsPlaying( true );
	 }
 }



/**
	função responsável por pular para um segundo particular do video
**/
jQuery.iSeePlayer.seek = function( seconds ) 
 {
	player.seekTo( seconds );
	player.playVideo();
	console.log("seek to " + seconds + " seconds ");
	 
 }

 


 /**
	função responsável por carregar um vídeo e inserir na página
	@param index -> Index number da array de vídeos
 **/
jQuery.iSeePlayer.loadVideo = function( index ) 
{
	instanciated = true;
	
	count = index;
	//jQuery.iSeePlayer.destroy();
	player = new YT.Player('player', {
				height: opts.height.toString(),
				width:  opts.width.toString(),
				videoId: opts.videos[ count ],
				playerVars: { 
								start: opts.start, 
								end: opts.end
							},
				events: {
					'onReady': jQuery.iSeePlayer.onPlayerReady,
					'onStateChange': jQuery.iSeePlayer.onPlayerStateChange
				}
			  });
			  
}
	

/**
	Função disparada quando o vídeo player está pronto
	para tocar o vídeo
	@param event -> 
**/
jQuery.iSeePlayer.onPlayerReady = function(event) {

	if( opts.autoPlay ) 
	{
		event.target.playVideo();
		//event.target.setVolume(0);
		opts.onStart.call();
	}
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1)
jQuery.iSeePlayer.onPlayerStateChange = function(event) {
	
		// ! debug
		if( opts.debug ) console.log( event );
		
		switch( event.data ) 
		{
			case YT.PlayerState.PLAYING:
				
				if( opts.debug ) console.log("Video is playing");
				jQuery.iSeePlayer.setSecondsPlaying();
				opts.onPlay.call();
				
				if(isPaused) 
				{
					opts.onPlayFromPause.call();	
					isPause = false;
				}
			
			break;
			
			case YT.PlayerState.PAUSED:
				if( opts.debug ) console.log("Video is paused");
				
				if( !pauseOnEnd ) 
				{
					opts.onPause.call(true);
					isPaused   = true;
					pauseOnEnd = false;
				}
				
				jQuery.iSeePlayer.clearSecondsPlaying();
				
			break;
			
			case YT.PlayerState.BUFFERING:
				if( opts.debug ) console.log("Video is buffering");
				opts.onBuffer.call();
				jQuery.iSeePlayer.clearSecondsPlaying();
			break;
			
			case YT.PlayerState.ENDED:
				if( opts.debug ) console.log("Video has ended");
				if( opts.hideRelated )
				{
					isPaused   = true;
					pauseOnEnd = true;
					player.seekTo( opts.start );
					player.pauseVideo();
				}
				
				jQuery.iSeePlayer.clearSecondsPlaying( true );
				opts.onComplete.call();
				
			break;
			
			case YT.PlayerState.CUED:
				if( opts.debug ) console.log("Video is cued");
				opts.onCue.call();
			break;
		}
		
 }


// plugin default options
jQuery.iSeePlayer.defaults = {
    
	autoPlay: true,
	width: 900,
	height: 506,
	debug: false, 
	videos: [],
	start: 0, // seconds
	end: 0, // seconds
	hideRelated: true,
	onStart: function() {},
	onComplete: function() {},
	onStateChange: function() {},
	onPause: function() {},
	onBuffer: function() {},
	onPlay: function() {},
	onPlayFromPause: function() {},
	onCue: function() {},
	container: ""

};

