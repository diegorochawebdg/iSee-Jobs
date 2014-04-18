package  {
	import flash.display.Loader;
	import flash.events.Event;
	import flash.net.URLRequest;
	
	public class Tela3 extends Tela {
		
		// This will hold the API player instance once it is initialized.
		private var player:Object;
		private var loader:Loader;
		
		public function Tela3() {
			// constructor code
			super();
			
			loader = new Loader();
			loader.contentLoaderInfo.addEventListener(Event.INIT, onLoaderInit, false , 0, true);
			loader.load(new URLRequest("http://www.youtube.com/v/isxaNrIGspE?version=3"));
			
			trace("load youtube video: " + loader );
			
		}
		
		public function stopVideo():void 
		{
			try { 
				player.stopVideo();
				player.destroy();
				loader.unload();
			} catch(er:Error) { 
				
			}
		
		}
		
		private function onLoaderInit(event:Event):void {
			
			trace("init!");
			addChild(loader);
			
			loader.content.addEventListener("onReady", onPlayerReady);
			loader.content.addEventListener("onError", onPlayerError);
			loader.content.addEventListener("onStateChange", onPlayerStateChange);
			loader.content.addEventListener("onPlaybackQualityChange", 
				onVideoPlaybackQualityChange);
		}
		
		private function onPlayerReady(event:Event):void {
			// Event.data contains the event parameter, which is the Player API ID 
			trace("player ready:", Object(event).data);
		
			// Once this event has been dispatched by the player, we can use
			// cueVideoById, loadVideoById, cueVideoByUrl and loadVideoByUrl
			// to load a particular YouTube video.
			player = loader.content;
			player.x = 110;
			player.y = 136;
			// Set appropriate player dimensions for your application
			player.setSize(639, 359);
			// loading the video
			// player.loadVideoById("hH07bOJQ_UY");
		}
		
		private function onPlayerError(event:Event):void {
			// Event.data contains the event parameter, which is the error code
			trace("player error:", Object(event).data);
		}
		
		private function onPlayerStateChange(event:Event):void {
			// Event.data contains the event parameter, which is the new player state
			trace("player state:", Object(event).data);
		}
		
		private function onVideoPlaybackQualityChange(event:Event):void {
			// Event.data contains the event parameter, which is the new video quality
			trace("video quality:", Object(event).data);
		}

	}
	
}
