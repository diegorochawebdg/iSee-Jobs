package br.com.philips.hotsites.andersonsilva
{

	import br.com.philips.hotsites.andersonsilva.analytics.PhilipsGATracker;
	import br.com.philips.hotsites.andersonsilva.pages.AndersonSilvaPageManager;
	
	import com.greensock.TweenLite;
	import com.greensock.events.LoaderEvent;
	import com.greensock.loading.CSSLoader;
	import com.greensock.loading.LoaderMax;
	import com.greensock.loading.SWFLoader;
	import com.gugateider.framework.MainLoaderMax;
	import com.gugateider.framework.data.SiteData;
	import com.gugateider.framework.utils.TextUtils;
	
	import flash.display.MovieClip;
	import flash.display.Shape;
	import flash.display.StageScaleMode;
	import flash.events.Event;
	import flash.external.ExternalInterface;
	import flash.text.Font;
	
	import net.hires.debug.Stats;
	
	
	/**
	 :: created by Gustavo Teider http://www.gugateider.com  
	 :: iSee Interactive Group    http://www.isee.com.br
	 ::     
	 :: Classe responsável por compilar o SWF do Epson Projector Game 
	 **/
	public class AndersonSilvaFlashSite extends MainLoaderMax
	{
		
		// loader bar
		private var loaderBar:Shape; 
		private var pct:MovieClip;
		
		
		/**
		 * Construtor da class
		 * @param nenhum
		 **/ 
		public function AndersonSilvaFlashSite()
		{
			super();
		}
		
		
		/**
		 *  
		 * @param e
		 * 
		 */		
		override public function initView():void 
		{
			trace("initView()");
			
			loaderBar = new Shape();
			loaderBar.graphics.beginFill( 0x999999 , 1 );
			loaderBar.graphics.drawRect( 0 , 506, stage.stageWidth , 2 );
			loaderBar.graphics.endFill();
			loaderBar.scaleX = 0;
			addChild( loaderBar );
			
			pct = new pctMC();
			pct.y = 506 - 28;
			pct.x = loaderBar.x;
			addChild( pct );
		}
		
		
		/**
		 * Função responsável por iniciar as páginas do Game
		 * @param none
		 **/ 
		override public function startPageManager():void
		{
			
			// get the google analytics code
			var enabledGA:String = SiteData.instance.XMLDATA.analytics.enabled;
			if (enabledGA == "true") PhilipsGATracker.ENABLED = true;
			var debugGA:String = SiteData.instance.XMLDATA.analytics.debug;
			if (debugGA == "true") PhilipsGATracker.DEBUG = true;
			
			PhilipsGATracker.GOOGLE_ANALYTICS_ID = SiteData.instance.XMLDATA.analytics.id;
			
			// pega o alvo que vem do facebook
			var targetParameter:String = this.stage.loaderInfo.parameters.acao;
			if (targetParameter == null) PhilipsGATracker.TARGET = "";
			else PhilipsGATracker.TARGET = targetParameter;
			
			pageManager = new AndersonSilvaPageManager();
			addChild( pageManager );
			
			
			//debug = new Stats();
			//addChild( debug );
		}
		
		
		/**
		 * Progress handler 
		 * @param e
		 * 
		 */		
		override public function progressHandler(e:LoaderEvent):void 
		{
			// trace(e.target.progress);
			loaderBar.scaleX = e.target.progress;
			pct.pct.text = Math.floor( e.target.progress * 100) + "%";
			pct.x = loaderBar.width - pct.width;
		}
		
		
		/**
		 * Load Completed! 
		 * @param e
		 * 
		 */		
		override public function onLoadCompleteHandler(e:LoaderEvent):void 
		{
			// set xml structure
			SiteData.instance.XMLDATA = XML( e.target.content ) as XML;
			trace("Xml loaded succesfully, you can access the data through SiteData.instance.XMLDATA");
			
			// set CSS!
			TextUtils.setCss = LoaderMax.getLoader("generalCSS").content;
			
			// register Fonts
			registerFonts();
			
			// hide loader bar
			TweenLite.to( loaderBar , 1, { alpha: 0, onComplete: function():void {  
				removeChild( loaderBar );
				removeChild( pct );
			}});
			
			// start pages
			startPageManager();
			
		}
			
		
		/**
		 * Register fonts on the SWF 
		 * @param none
		 */
		private function registerFonts():void 
		{
			// attach fonts
			var museo700:Class = LoaderMax.getLoader("fonts").getClass("Museo700"); 
			//var museo500:Class = LoaderMax.getLoader("fonts").getClass("Museo500"); 
			var museo300:Class = LoaderMax.getLoader("fonts").getClass("Museo300"); 
			Font.registerFont( museo700 );
			//Font.registerFont( museo500 );
			Font.registerFont( museo300 );
			
			var fonts : Array;   
			fonts = Font.enumerateFonts( false );
			fonts.sortOn( "fontName", Array.CASEINSENSITIVE );			
			for each( var font : Font in fonts ) {
				trace( "FontLoaderClass : FontEmbedded :: " + font.fontName + " - " + font.fontStyle );
			}
		}
		
		
		
		
		
	}
}