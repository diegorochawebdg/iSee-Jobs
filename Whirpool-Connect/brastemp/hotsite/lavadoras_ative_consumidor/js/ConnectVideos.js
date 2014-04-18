ConnectVideos = function( videoId, start, end ) { 
	
	(typeof(start) === "undefined" ? start = 0 : start );
	(typeof(end) === "undefined" ? end = 0 : end );
	
	var nomeVideo = "Connect-br";
	function onStart()
	{
		
	  // console.log("video iniciou ...");
	  // pageTracker._trackEvent( 'Vídeos', 'Interação', "Start", 0, true);
	  
	}
	function onComplete()
	{
		
	  console.log("video acabou de finalizar ...");
	  //pageTracker._trackEvent( 'Vídeos', 'End', nomeVideo, 0, true);
	  ga('send', 'event', 'Vídeo', 'End', nomeVideo);
	
	}	
	function onPlayFromPause()
	{
	  //pageTracker._trackEvent( 'Vídeos', 'Play', nomeVideo, 0, true);
	  console.log("video acabou de iniciar ...");
	  ga('send', 'event', 'Vídeo', 'Play', nomeVideo);
	}
	function onPause()
	{
	  //pageTracker._trackEvent( 'Vídeos', 'Pause', nomeVideo, 0, true);
	  console.log("video acabou de pausar ...");
	  ga('send', 'event', 'Vídeo', 'Pause', nomeVideo);
	}	
	function onBuffer()
	{
	  //console.log("video está carregando ...");
	  //pageTracker._trackEvent( 'Vídeos', 'Buffering', nomeVideo, 0, true);
	  ga('send', 'event', 'Vídeo', 'Buffering', nomeVideo);
	}	
	function onPlay()
	{
	  //console.log("video está tocando ..." + $.iSeePlayer.getSecondsPlayed() );
	
	  
	  switch( $.iSeePlayer.getSecondsPlayed() ) 
	  { 
		   case 1:
				console.log("1s ...");
				ga('send', 'event', 'Vídeo', 'Start', nomeVideo);
		   break;
	  
		   case 5:
				console.log("5s ...");
				ga('send', 'event', 'Vídeo', '5 segundos', nomeVideo);
		   break;
		   
		   case 15:
				console.log("15s ...");
				ga('send', 'event', 'Vídeo', '15 segundos', nomeVideo);
		   break;
		   
		   case 45:
				console.log("45s ...");
				ga('send', 'event', 'Vídeo', '45 segundos', nomeVideo);
		   break;
		   
		   case 90:
				console.log("90s ...");
				ga('send', 'event', 'Vídeo', '90 segundos', nomeVideo);
		   break;
	  }
		
	}
	
	$.iSeePlayer({
		autoPlay: false,
		width: 640,
		height: 360,
		debug: true, 
		videos: [ videoId ],
		start: start, // seconds
		end: end, // seconds
		onStart: onStart,
		onComplete: onComplete,
		onPause: onPause,
		onBuffer: onBuffer,
		onPlay: onPlay,
		onPlayFromPause: onPlayFromPause,
		container: "video-lightbox"
	});
	
}