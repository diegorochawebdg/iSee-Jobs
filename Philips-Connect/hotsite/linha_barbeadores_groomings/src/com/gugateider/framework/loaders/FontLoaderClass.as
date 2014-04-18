package com.gugateider.framework.loaders 
{
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.tools.FontLoader;
	
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.net.URLRequest;
	import flash.text.Font;
	import flash.text.StyleSheet;
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to load the fonts took from the SWF in the folder
	:: in the SiteData class
	:: @usage var cssLoader:CSSLoader = new CSSLoader();
	:: To start loading the CSS, you can use the method load();
	**/
	public class FontLoaderClass extends EventDispatcher
	{
		// variables
		private var loader:FontLoader;
		
		
		/**
		 * Class constructor, 
		 */
		public function FontLoaderClass() 
		{
			
		}
		
		
		/**
		 * Funtion responsible to start the loading of the CSS
		 * @param src is the path of the CSS
		 */
		public function load():void 
		{
			var src:String = SiteData.instance.LANG + "/swf/fonts.swf";
			
			loader = new FontLoader();
			loader.addEventListener(Event.COMPLETE , onCompleteHandler );
			loader.load(new URLRequest( src ) );
			
		}
		
	
		
		/**
		 * Function dispatched when the SWF is loaded and ready to be added in the framework
		 * @param	e
		 */
		private function onCompleteHandler(e:Event):void 
		{
			// Check if the fonts are already installed after loading
			var fonts : Array;   
			fonts = Font.enumerateFonts( false );
			fonts.sortOn( "fontName", Array.CASEINSENSITIVE );			
			for each( var font : Font in fonts ) {
				trace( "FontLoaderClass : FontEmbedded :: " + font.fontName + " - " + font.fontStyle );
			}
			
			dispatchEvent(e);
		
			loader.removeEventListener(Event.COMPLETE, onCompleteHandler);
		}
		
		
		
		
	}

}