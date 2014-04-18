package com.gugateider.framework
{
	
	import com.greensock.events.LoaderEvent;
	import com.greensock.loading.CSSLoader;
	import com.greensock.loading.ImageLoader;
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.SWFLoader;
	import com.greensock.loading.XMLLoader;
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.pages.PageManager;
	
	import flash.display.Loader;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.display.Stage;
	import flash.display.StageAlign;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.ui.ContextMenu;
	
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
	public class MainLoaderMax extends Sprite 
	{
		// XML Loader
		private var xmlLoader:XMLLoader;
		// Page Manager
		public var pageManager:PageManager;
		// debugger
		public var debug	  :Stats;
		
		// static vars
		public static var stage	:Stage;
		
		// static constants
		public static const LOAD_PROGRESS :String = "progress";
		public static const LOAD_COMPLETED:String = "complete";
		
		
		/**
		 * Class Constructor
		 * @param none
		 * @return nothing, as it's a constructor
		 */
		public function MainLoaderMax():void 
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
			MainLoaderMax.stage = stage;
			
			// hide menu
			var cMenu:ContextMenu = new ContextMenu();
			cMenu.hideBuiltInItems();
			this.contextMenu = cMenu;
			
			// check html flashvars
			checkFlashVars();
			
			// init view
			initView();
			
			// load the first XML
			loadXML();
		}
		
		/**
		 * init view 
		 * @param none
		 */		
		public function initView():void 
		{
				
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
		 * Funtion responsible to start the loading of the XML
		 * @param none
		 */
		public function loadXML():void 
		{
			
			
			LoaderMax.activate([ImageLoader, XMLLoader, SWFLoader, CSSLoader]);
			
			xmlLoader = new XMLLoader( SiteData.instance.XMLFILE , { onComplete: onLoadCompleteHandler, onProgress:progressHandler , estimatedBytes: 20000 });
			xmlLoader.load();
			
			
		}
		
		/**
		 * Loader Progress 
		 * @param e
		 * 
		 */		
		public function progressHandler(e:LoaderEvent):void 
		{
			// dispatchEvent( new Event( MainLoaderMax.LOAD_PROGRESS ));
		}
		
		/**
		 * Function dispatched if the XML was not loaded
		 * @param	e
		 */
		private function onXMLErrorHandler(e:IOErrorEvent):void 
		{
			trace( "Error message: " + e.text );
			
		}
		
		
		/**
		 * Function dispatched when the loading is finished
		 * @param	e
		 */
		public function onLoadCompleteHandler(e:LoaderEvent):void 
		{
			
			/*
			var libraryLoader:SWFLoader = LoaderMax.getLoader("library") as SWFLoader;
			var bgClass:Class = libraryLoader.getClass("Background"); 
			var bg:MovieClip  = new bgClass();
			addChild( bg );*/
			
			
		}
		
		
	}
	
}