package com.gugateider.framework.loaders 
{
	import com.gugateider.framework.data.SiteData;
	
	import flash.events.Event;
	import flash.events.EventDispatcher;
	import flash.events.IOErrorEvent;
	import flash.net.URLLoader;
	import flash.net.URLRequest;
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to load the XML and save the information 
	:: in the SiteData class
	:: @usage var xmlLoader:XMLLoader = new XMLLoader();
	:: To start loading the XML, you can use the method load();
	**/
	public class XMLLoader extends EventDispatcher
	{
		// variables
		private var loader:URLLoader;
		
		
		/**
		 * Class constructor, 
		 */
		public function XMLLoader() 
		{
			
		}
		
		
		/**
		 * Funtion responsible to start the loading of the XML
		 * @param src is the path of the XML
		 */
		public function load( src:String="" ):void 
		{
			if (src == "") src = SiteData.instance.XMLFILE;
			
			loader = new URLLoader();
			loader.addEventListener(Event.COMPLETE , onXMLCompleteHandler );
			loader.addEventListener(IOErrorEvent.IO_ERROR , onXMLErrorHandler );
			loader.load(new URLRequest( src ) );
		}
		
		
		/**
		 * Function dispatched if the XML was not loaded
		 * @param	e
		 */
		private function onXMLErrorHandler(e:IOErrorEvent):void 
		{
			dispatchEvent( new Event( IOErrorEvent.IO_ERROR ));
		}
		
		
		/**
		 * Function dispatched when the XML data is loaded and ready to be added in the framework
		 * @param	e
		 */
		private function onXMLCompleteHandler(e:Event):void 
		{
			// add the xml information to the SiteData class
			SiteData.instance.XMLDATA = XML( e.target.data ) as XML;
			
			dispatchEvent(e);
			
			loader.removeEventListener(Event.COMPLETE, onXMLCompleteHandler);
			loader.removeEventListener(IOErrorEvent.IO_ERROR, onXMLErrorHandler);
		}
		
		
		
		
	}

}