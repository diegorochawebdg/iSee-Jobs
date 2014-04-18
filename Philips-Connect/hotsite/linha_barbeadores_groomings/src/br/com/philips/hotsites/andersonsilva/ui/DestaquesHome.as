package br.com.philips.hotsites.andersonsilva.ui
{
	import br.com.philips.hotsites.andersonsilva.pages.AndersonSilvaPageManager;
	
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.display.ContentDisplay;
	import com.gugateider.framework.data.SiteData;
	
	import flash.display.Sprite;
	import flash.events.TimerEvent;
	import flash.utils.Timer;
	
	public class DestaquesHome extends Sprite
	{
		private var timer:Timer;
		private var currentItem:Number;
		private var currentID:String;
		private var destaquesData:XMLList;
		private var content:ContentDisplay;
		private var created:Boolean;
		
		public function DestaquesHome()
		{
			
			super();
			
		}
		
		
		public function initDestaques( itemID:String = "" ):void 
		{
			destaquesData = SiteData.instance.XMLDATA.intro_destaques;
			
			currentID = itemID;
			
			startTimer();
			
		}
		
		private function timerCompleteEventHandler(e:TimerEvent):void 
		{
			
			if(currentItem < (destaquesData.item.length()-1))
				currentItem++;
			else 
				currentItem = 0;
			
			startTimer();
			
		}
		
		public function startTimer():void 
		{
			
			clearTimer();
			
			var xmlData:XMLList = AndersonSilvaPageManager.getData(  currentID );
			trace("xmlData.features.@itemDestaque : " + xmlData.features.@itemDestaque );
			
			
			content = LoaderMax.getContent( xmlData.features.@itemDestaque );
			addChild( content );
			content.rawContent.play();
			
			
			timer = new Timer( Number( destaquesData.item[currentItem].tempo ) * 1000 , 1 );
			//timer.addEventListener( TimerEvent.TIMER_COMPLETE , timerCompleteEventHandler );
			//timer.start();
			
			created = true;
		}
		
		
		public function clearTimer():void 
		{
			if(created)
			{
				
				
				removeChild( content );
				timer.removeEventListener( TimerEvent.TIMER_COMPLETE , timerCompleteEventHandler );
				timer.stop();
				
				
			}
		}
		
		public function selectDestaque():void {
			
			trace( "selectDestaque" );
			
		}
		
		
	}
}