package com.gugateider.framework.loaders 
{
	import com.gugateider.framework.assets.AssetLibrary;
	import com.gugateider.framework.data.SiteData;
	import flash.display.LoaderInfo;
	import flash.system.ApplicationDomain;
	
	import flash.display.Loader;
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.net.URLRequest;
	import flash.text.StyleSheet;
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to load the Library objects from 
	:: a external SWF and place into the SiteData class
	:: @usage var library:LibraryLoader = new LibraryLoader();
	:: To start loading the library, you can use the method load();
	**/
	public class LibraryLoader extends EventDispatcher
	{
		// variables
		private var loader:Loader;
		
		
		/**
		 * Class constructor, 
		 */
		public function LibraryLoader() 
		{
			
		}
		
		
		/**
		 * Funtion responsible to start the loading of the Library
		 * @param none
		 */
		public function load():void 
		{
			var src:String = SiteData.instance.LANG + "/swf/library.swf";
			
			loader = new Loader();
			loader.contentLoaderInfo.addEventListener(Event.COMPLETE , onCompleteHandler );
			loader.addEventListener(IOErrorEvent.IO_ERROR , onErrorHandler );
			loader.load(new URLRequest( src ) );
		}
		
		
		/**
		 * Function dispatched if the Library was not loaded
		 * @param	e
		 */
		private function onErrorHandler(e:IOErrorEvent):void 
		{
			dispatchEvent( new Event( IOErrorEvent.IO_ERROR ));
		}
		
		
		/**
		 * Function dispatched when the Library is loaded and ready to be added in the framework
		 * @param	e
		 */
		private function onCompleteHandler(e:Event):void 
		{	
			var loaderInfo:LoaderInfo  				  = e.target as LoaderInfo;
			var applicationDomain:ApplicationDomain   = loaderInfo.applicationDomain;
			var assetLibrary:AssetLibrary			  = new AssetLibrary ( applicationDomain ) ;
			
			SiteData.instance.LIBRARY = assetLibrary;
			
			dispatchEvent(e);
			
			loader.removeEventListener(Event.COMPLETE, onCompleteHandler);
			loader.removeEventListener(IOErrorEvent.IO_ERROR, onErrorHandler);
		}
		
		
		
		
	}

}