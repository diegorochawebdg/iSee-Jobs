package com.gugateider.framework.loaders 
{
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.utils.TextUtils;

	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	import flash.text.StyleSheet;
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to load the CSS stylesheet and save it's data
	:: in the SiteData class
	:: @usage var cssLoader:CSSLoader = new CSSLoader();
	:: To start loading the CSS, you can use the method load();
	**/
	public class CSSLoader extends EventDispatcher
	{
		// variables
		private var loader:URLLoader;
		
		
		/**
		 * Class constructor, 
		 */
		public function CSSLoader() 
		{
			
		}
		
		
		/**
		 * Funtion responsible to start the loading of the CSS
		 * @param src is the path of the CSS
		 */
		public function load():void 
		{
			var src:String = SiteData.instance.LANG + "/css/general.css";
			
			loader = new URLLoader();
			loader.addEventListener(Event.COMPLETE , onCompleteHandler );
			loader.addEventListener(IOErrorEvent.IO_ERROR , onErrorHandler );
			loader.load(new URLRequest( src ) );
		}
		
		
		/**
		 * Function dispatched if the CSS was not loaded
		 * @param	e
		 */
		private function onErrorHandler(e:IOErrorEvent):void 
		{
			dispatchEvent( new Event( IOErrorEvent.IO_ERROR ));
		}
		
		
		/**
		 * Function dispatched when the CSS stylesheet is loaded and ready to be added in the framework
		 * @param	e
		 */
		private function onCompleteHandler(e:Event):void 
		{
			// add the CSS information to the SiteData class
			SiteData.instance.CSSDATA = new StyleSheet();
			SiteData.instance.CSSDATA.parseCSS(e.target.data);
			
			TextUtils.setCss = SiteData.instance.CSSDATA;
			
			dispatchEvent(e);
			
			loader.removeEventListener(Event.COMPLETE, onCompleteHandler);
			loader.removeEventListener(IOErrorEvent.IO_ERROR, onErrorHandler);
		}
		
		
		
		
	}

}