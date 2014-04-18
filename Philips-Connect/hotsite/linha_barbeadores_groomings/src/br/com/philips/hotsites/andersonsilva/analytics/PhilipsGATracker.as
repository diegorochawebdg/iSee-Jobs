package br.com.philips.hotsites.andersonsilva.analytics
{
	import com.google.analytics.GATracker;
	import com.gugateider.framework.Main;
	import com.gugateider.framework.MainLoaderMax;
	
	import flash.events.EventDispatcher;
	import flash.events.IEventDispatcher;
	
	public class PhilipsGATracker extends EventDispatcher
	{
		public static var ENABLED	:Boolean;
		public static var GOOGLE_ANALYTICS_ID	:String = "";
		public static var DEBUG		:Boolean;
		public static var TARGET	:String;
		
		
		public function PhilipsGATracker(target:IEventDispatcher=null)
		{
			
			super(target);
		
		
		}
		
		/**
		 * Função responsável por setar uma página no google analytics 
		 * @param page
		 * 
		 */		
		public static function trackPage( page:String ):void 
		{
			if(ENABLED)
			{
				
				if(TARGET != "") page = "/" + TARGET + page;
				
				var tracker:GATracker = new GATracker( MainLoaderMax.stage , GOOGLE_ANALYTICS_ID , "AS3", DEBUG );
				tracker.trackPageview( page );
			}
		}
		
		/**
		 * Função responsável por setar um evento
		 * @param evento ->
		 * 
		 */		
		public static function trackEvent( evento:String ):void 
		{
			
			//var tracker:GATracker = new GATracker( Main.stage , GOOGLE_ANALYTICS_ID, "AS3", DEBUG );
			//tracker.trackEvent( evento );
			
		}
		
	}
}