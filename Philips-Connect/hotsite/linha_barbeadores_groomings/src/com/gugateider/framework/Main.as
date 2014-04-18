package com.gugateider.framework
{
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.loaders.CSSLoader;
	import com.gugateider.framework.loaders.FontLoaderClass;
	import com.gugateider.framework.loaders.LibraryLoader;
	import com.gugateider.framework.loaders.XMLLoader;
	import com.gugateider.framework.pages.PageManager;
	
	import flash.display.Sprite;
	import flash.display.Stage;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	
	import net.hires.debug.Stats;
	
	/**
	:: Gugateider Framework - Make it better, keep it simple.   
	:: created by Gustavo Teider http://www.gugateider.com      
	::
	:: This class is responsible to compile a new SWF of your project.
	:: You can do it in many ways you want. See the examples below.
	:: @Place this class in your FLA Document Class
	:: @Compile this class through FDT, Flash Develop or Flash Builder
	**/
	public class Main extends Sprite 
	{
		// XML Loader
		private var xmlLoader:XMLLoader;
		// CSS Loader
		private var cssLoader:CSSLoader;
		// Font Loader
		private var fontLoader:FontLoaderClass;
		// Library Loader
		private var libraryLoader:LibraryLoader;
		// Page Manager
		public var pageManager:PageManager;
		// debugger
		public var debug	  :Stats;
		
		
		// static vars
		public static var stage	:Stage;
		
		/**
		 * Class Constructor
		 * @param none
		 * @return nothing, as it's a constructor
		 */
		public function Main():void 
		{
			if (stage) init();
			else addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		
		/**
		 * Function created to set general properties of the project
		 * @param	e
		 */
		public function init(e:Event = null):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			// entry point
			
			// Stage properties
			stage.align 	= StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			Main.stage = stage;
			
			// check html flashvars
			checkFlashVars();
			
			// load the first XML
			loadXML();
		}
			
		/**
		 * This function is responsible to check the flashvars from the HTML
		 * @param none
		 */
		public function checkFlashVars():void 
		{
			// get the current deeplink from FlashVars
			var deeplink:String = this.stage.loaderInfo.parameters.deeplink;
			// if no language sent to flash, set it empty as default
			if (deeplink == null) SiteData.instance.DEEPLINK = "";
			else SiteData.instance.DEEPLINK = deeplink;
			
			// get the current language from FlashVars
			var lang:String = this.stage.loaderInfo.parameters.lang;
			// if no language sent to flash, set it english as default
			if (lang == null) SiteData.instance.LANG = "pt-BR";
			else SiteData.instance.LANG = lang;
							
			// get the xml File from FlashVars
			var xmlFile:String = this.stage.loaderInfo.parameters.xmlFile;
			// if no time sent to flash, set it as user date
			if (xmlFile == null) SiteData.instance.XMLFILE = SiteData.instance.LANG + "/xml/content.xml";
			else SiteData.instance.XMLFILE = xmlFile;
			
		}
		
		/**
		 * Function responsible to start the loading of the Library
		 * @param none
		 */
		private function loadLibrary():void 
		{
			libraryLoader = new LibraryLoader();
			libraryLoader.addEventListener(Event.COMPLETE , onLibraryCompleteHandler );
			libraryLoader.load();
		}
		
		/**
		 * Function dispatched when the Library are ready to  be used
		 * @param	e
		 */
		private function onLibraryCompleteHandler(e:Event):void 
		{
			trace("Library loaded!");
			
			// show the pages on the screen
			startPageManager();
		}
		
		/**
		 * Function responsible to add the page manager into the scree, 
		 * once everything is loaded and ready to be used
		 * @param none
		 */
		public function startPageManager():void 
		{
			//pageManager = new PageManager();
			//addChild( pageManager );
		}
		
		
		/**
		 * Function responsible to start the loading of the fonts
		 * @param none
		 */
		private function loadFonts():void 
		{
			fontLoader = new FontLoaderClass();
			fontLoader.addEventListener(Event.COMPLETE , onFontCompleteHandler );
			fontLoader.load();
		}
		
		/**
		 * Function dispatched when the fonts are ready to  be used
		 * @param	e
		 */
		private function onFontCompleteHandler(e:Event):void 
		{
			trace("Fonts loaded!");
			
			// load the CSS
			loadCSS();
		}
		
		
		/**
		 * Function responsible to start the loading of the CSS
		 * @param none
		 */
		private function loadCSS():void 
		{
			cssLoader = new CSSLoader();
			cssLoader.addEventListener(Event.COMPLETE , onCSSCompleteHandler );
			cssLoader.addEventListener(IOErrorEvent.IO_ERROR, onCSSErrorHandler );
			cssLoader.load();
		}
		
		/**
		 * Function dispatched if the CSS is not loaded completely.
		 * @param	e
		 */
		public function onCSSErrorHandler(e:IOErrorEvent):void 
		{
			
		}
		
		/**
		 * Function dispatched when the CSS is loaded
		 * @param	e
		 */
		public function onCSSCompleteHandler(e:Event):void 
		{
			trace("CSS Loaded!");
			
			// load the Library
			loadLibrary();
		}
		
		
		/**
		 * Funtion responsible to start the loading of the XML
		 * @param none
		 */
		public function loadXML():void 
		{
			xmlLoader = new XMLLoader();
			xmlLoader.addEventListener(Event.COMPLETE , onXMLCompleteHandler );
			xmlLoader.addEventListener(IOErrorEvent.IO_ERROR, onXMLErrorHandler );
			xmlLoader.load();
		}
		
		
		/**
		 * Function dispatched if the XML was not loaded
		 * @param	e
		 */
		private function onXMLErrorHandler(e:IOErrorEvent):void 
		{
			trace( "Error message: " + e.text );
			
			// load the Fonts
			loadFonts();
		}
		
		
		/**
		 * Function dispatched when the XML data is loaded and ready to be added in the framework
		 * @param	e
		 */
		private function onXMLCompleteHandler(e:Event):void 
		{
			trace("Xml loaded succesfully, you can access the data through SiteData.instance.XMLDATA");
			//trace(e.target.data);
			//trace("--------- END OF THE XML --------");
			
			// load the fonts
			loadFonts();
		}
	
		
	}
	
}